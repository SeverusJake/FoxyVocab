import copy
from typing import Dict, List, Tuple, Optional


WORD_REQUIRED_FIELDS = [
    "definition",
    "pos",
    "pron",
    "example",
    "vietnamese",
    "vietnamese_example",
    "cefr",
]


def validate_word_payload(word_key: str, payload: dict) -> List[str]:
    errors = []

    if not word_key or not word_key.strip():
        errors.append("Word key cannot be empty.")

    if not isinstance(payload, dict):
        errors.append(f"Word '{word_key}' payload must be an object.")
        return errors

    for field in WORD_REQUIRED_FIELDS:
        if field not in payload:
            errors.append(f"Word '{word_key}' is missing field '{field}'.")
        elif not str(payload[field]).strip():
            errors.append(f"Word '{word_key}' has empty field '{field}'.")

    return errors


def validate_courses_structure(courses: List[dict], dictionary: Dict[str, dict]) -> List[str]:
    errors = []
    course_ids = set()
    set_ids = set()

    for course in courses:
        cid = course.get("id", "").strip()
        title = course.get("title", "").strip()

        if not cid:
            errors.append("A course has an empty id.")
        elif cid in course_ids:
            errors.append(f"Duplicate course id: '{cid}'.")
        else:
            course_ids.add(cid)

        if not title:
            errors.append(f"Course '{cid or '[no id]'}' has an empty title.")

        if "sets" not in course or not isinstance(course["sets"], list):
            errors.append(f"Course '{cid or '[no id]'}' is missing a valid sets list.")
            continue

        for s in course["sets"]:
            sid = s.get("id", "").strip()
            stitle = s.get("title", "").strip()
            words = s.get("words", [])

            if not sid:
                errors.append(f"A set in course '{cid or '[no id]'}' has an empty id.")
            elif sid in set_ids:
                errors.append(f"Duplicate set id: '{sid}'.")
            else:
                set_ids.add(sid)

            if not stitle:
                errors.append(f"Set '{sid or '[no id]'}' has an empty title.")

            if not isinstance(words, list):
                errors.append(f"Set '{sid or '[no id]'}' must have a words list.")
                continue

            for word in words:
                if word not in dictionary:
                    errors.append(f"Set '{sid}' references missing word '{word}'.")

    return errors


def validate_dictionary(dictionary: Dict[str, dict]) -> List[str]:
    errors = []
    for word_key, payload in dictionary.items():
        errors.extend(validate_word_payload(word_key, payload))
    return errors


def validate_all(dictionary: Dict[str, dict], courses: List[dict]) -> List[str]:
    errors = []
    errors.extend(validate_dictionary(dictionary))
    errors.extend(validate_courses_structure(courses, dictionary))
    return errors


def get_all_sets(courses: List[dict]) -> List[dict]:
    result = []
    for course in courses:
        for s in course.get("sets", []):
            result.append({
                "id": s["id"],
                "title": s["title"],
                "course_id": course["id"],
                "course_title": course["title"],
                "words": s.get("words", []),
            })
    return result


def get_all_courses(courses: List[dict]) -> List[dict]:
    return [
        {
            "id": c.get("id", ""),
            "title": c.get("title", ""),
            "icon": c.get("icon", ""),
        }
        for c in courses
    ]


def find_course(courses: List[dict], course_id: str) -> Optional[dict]:
    for course in courses:
        if course.get("id") == course_id:
            return course
    return None


def find_set(courses: List[dict], set_id: str) -> Tuple[Optional[dict], Optional[dict]]:
    for course in courses:
        for s in course.get("sets", []):
            if s.get("id") == set_id:
                return s, course
    return None, None


def get_word_set_ids(courses: List[dict], word_key: str) -> List[str]:
    set_ids = []
    for course in courses:
        for s in course.get("sets", []):
            if word_key in s.get("words", []):
                set_ids.append(s["id"])
    return set_ids


def create_word(
    dictionary: Dict[str, dict],
    courses: List[dict],
    word_key: str,
    payload: dict,
    selected_set_ids: List[str],
) -> None:
    if word_key in dictionary:
        raise ValueError(f"Word '{word_key}' already exists.")

    errors = validate_word_payload(word_key, payload)
    if errors:
        raise ValueError("\n".join(errors))

    dictionary[word_key] = payload

    for set_id in selected_set_ids:
        s, _ = find_set(courses, set_id)
        if not s:
            raise ValueError(f"Set '{set_id}' not found.")
        if word_key not in s["words"]:
            s["words"].append(word_key)


def update_word(
    dictionary: Dict[str, dict],
    courses: List[dict],
    old_word_key: str,
    new_word_key: str,
    payload: dict,
    selected_set_ids: List[str],
) -> None:
    if old_word_key not in dictionary:
        raise ValueError(f"Word '{old_word_key}' does not exist.")

    if new_word_key != old_word_key and new_word_key in dictionary:
        raise ValueError(f"Word '{new_word_key}' already exists.")

    errors = validate_word_payload(new_word_key, payload)
    if errors:
        raise ValueError("\n".join(errors))

    if new_word_key != old_word_key:
        dictionary[new_word_key] = payload
        del dictionary[old_word_key]

        for course in courses:
            for s in course.get("sets", []):
                s["words"] = [new_word_key if w == old_word_key else w for w in s.get("words", [])]
    else:
        dictionary[old_word_key] = payload

    current_memberships = set(get_word_set_ids(courses, new_word_key))
    desired_memberships = set(selected_set_ids)

    for set_id in desired_memberships - current_memberships:
        s, _ = find_set(courses, set_id)
        if s and new_word_key not in s["words"]:
            s["words"].append(new_word_key)

    for set_id in current_memberships - desired_memberships:
        s, _ = find_set(courses, set_id)
        if s and new_word_key in s["words"]:
            s["words"].remove(new_word_key)


def delete_word(dictionary: Dict[str, dict], courses: List[dict], word_key: str) -> None:
    if word_key not in dictionary:
        raise ValueError(f"Word '{word_key}' does not exist.")

    del dictionary[word_key]

    for course in courses:
        for s in course.get("sets", []):
            if word_key in s.get("words", []):
                s["words"].remove(word_key)


def create_course(courses: List[dict], course_id: str, title: str, icon: str) -> None:
    if not course_id.strip():
        raise ValueError("Course id cannot be empty.")
    if not title.strip():
        raise ValueError("Course title cannot be empty.")
    if find_course(courses, course_id):
        raise ValueError(f"Course '{course_id}' already exists.")

    courses.append({
        "id": course_id.strip(),
        "title": title.strip(),
        "icon": icon.strip(),
        "sets": [],
    })


def update_course(courses: List[dict], old_course_id: str, new_course_id: str, title: str, icon: str) -> None:
    course = find_course(courses, old_course_id)
    if not course:
        raise ValueError(f"Course '{old_course_id}' does not exist.")

    if not new_course_id.strip():
        raise ValueError("Course id cannot be empty.")
    if not title.strip():
        raise ValueError("Course title cannot be empty.")

    if new_course_id != old_course_id and find_course(courses, new_course_id):
        raise ValueError(f"Course '{new_course_id}' already exists.")

    course["id"] = new_course_id.strip()
    course["title"] = title.strip()
    course["icon"] = icon.strip()


def delete_course(courses: List[dict], course_id: str) -> None:
    index = None
    for i, course in enumerate(courses):
        if course.get("id") == course_id:
            index = i
            break

    if index is None:
        raise ValueError(f"Course '{course_id}' does not exist.")

    del courses[index]


def create_set(courses: List[dict], set_id: str, title: str, course_id: str, words: Optional[List[str]] = None) -> None:
    if not set_id.strip():
        raise ValueError("Set id cannot be empty.")
    if not title.strip():
        raise ValueError("Set title cannot be empty.")

    existing_set, _ = find_set(courses, set_id)
    if existing_set:
        raise ValueError(f"Set '{set_id}' already exists.")

    course = find_course(courses, course_id)
    if not course:
        raise ValueError(f"Course '{course_id}' not found.")

    course["sets"].append({
        "id": set_id.strip(),
        "title": title.strip(),
        "words": list(words or []),
    })


def update_set(
    courses: List[dict],
    old_set_id: str,
    new_set_id: str,
    title: str,
    new_course_id: str,
    words: List[str],
) -> None:
    s, old_course = find_set(courses, old_set_id)
    if not s or not old_course:
        raise ValueError(f"Set '{old_set_id}' does not exist.")

    if not new_set_id.strip():
        raise ValueError("Set id cannot be empty.")
    if not title.strip():
        raise ValueError("Set title cannot be empty.")

    if new_set_id != old_set_id:
        existing_set, _ = find_set(courses, new_set_id)
        if existing_set:
            raise ValueError(f"Set '{new_set_id}' already exists.")

    new_course = find_course(courses, new_course_id)
    if not new_course:
        raise ValueError(f"Course '{new_course_id}' not found.")

    s["id"] = new_set_id.strip()
    s["title"] = title.strip()
    s["words"] = list(dict.fromkeys(words))

    if old_course["id"] != new_course["id"]:
        old_course["sets"] = [item for item in old_course["sets"] if item is not s]
        new_course["sets"].append(s)


def delete_set(courses: List[dict], set_id: str) -> None:
    s, course = find_set(courses, set_id)
    if not s or not course:
        raise ValueError(f"Set '{set_id}' does not exist.")

    course["sets"] = [item for item in course["sets"] if item.get("id") != set_id]


def detect_bulk_conflicts(dictionary: Dict[str, dict], incoming_words: Dict[str, dict]) -> List[str]:
    return [word for word in incoming_words if word in dictionary]


def apply_bulk_words(
    dictionary: Dict[str, dict],
    courses: List[dict],
    incoming_words: Dict[str, dict],
    action_map: Dict[str, str],
    target_set_id: str,
) -> Tuple[int, int]:
    created = 0
    updated = 0

    s, _ = find_set(courses, target_set_id)
    if not s:
        raise ValueError(f"Target set '{target_set_id}' not found.")

    for word_key, payload in incoming_words.items():
        errors = validate_word_payload(word_key, payload)
        if errors:
            raise ValueError("\n".join(errors))

        if word_key in dictionary:
            action = action_map.get(word_key, "skip")
            if action == "overwrite":
                dictionary[word_key] = payload
                updated += 1
            elif action == "skip":
                continue
            else:
                raise ValueError(f"Unknown action '{action}' for word '{word_key}'.")
        else:
            dictionary[word_key] = payload
            created += 1

        if word_key not in s["words"]:
            s["words"].append(word_key)

    return created, updated