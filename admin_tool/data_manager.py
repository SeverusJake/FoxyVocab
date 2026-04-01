import json
import re
from datetime import datetime
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent

# Change "FoxyVocab" to your real project folder name if needed.
# Example structure:
# project/
# ├── FoxyVocab/
# │   └── data.js
# └── admin_tool/
#     ├── foxyvocab_admin.py
#     ├── ui.py
#     ├── models.py
#     └── data_manager.py
DATA_FILE = BASE_DIR.parent / "data.js"

BACKUP_DIR = BASE_DIR / "backup_data"
DECLARATION_PATTERN = r"(?P<keyword>var|let|const)\s+{name}\s*=\s*(?P<value>{value_pattern})\s*;"


def ensure_data_file_exists():
    if not DATA_FILE.exists():
        raise FileNotFoundError(
            f"data.js not found at:\n{DATA_FILE}\n\n"
            f"Please update DATA_FILE in data_manager.py to match your real folder structure."
        )


def ensure_backup_dir():
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)


def create_backup():
    ensure_data_file_exists()
    ensure_backup_dir()

    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    backup_path = BACKUP_DIR / f"data_{timestamp}.js.bak"

    content = DATA_FILE.read_text(encoding="utf-8")
    backup_path.write_text(content, encoding="utf-8")

    return backup_path


def read_raw_data_file():
    ensure_data_file_exists()
    return DATA_FILE.read_text(encoding="utf-8")


def extract_data_block(content: str, variable_name: str, value_pattern: str):
    pattern = DECLARATION_PATTERN.format(
        name=re.escape(variable_name),
        value_pattern=value_pattern,
    )
    match = re.search(pattern, content, re.S)
    if not match:
        raise ValueError(
            f"Could not find '{variable_name}' in data.js. "
            f"Supported declarations: var {variable_name} = ..., "
            f"let {variable_name} = ..., const {variable_name} = ..."
        )
    return match.group("keyword"), match.group("value")


def extract_dictionary_block(content: str):
    return extract_data_block(content, "dictionary", r"\{.*?\}")


def extract_courses_block(content: str):
    return extract_data_block(content, "coursesData", r"\[[\s\S]*?\]")


def load_data():
    content = read_raw_data_file()

    _, dictionary_str = extract_dictionary_block(content)
    _, courses_str = extract_courses_block(content)

    try:
        dictionary = json.loads(dictionary_str)
    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse dictionary from data.js as JSON:\n{e}")

    try:
        courses = json.loads(courses_str)
    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse coursesData from data.js as JSON:\n{e}")

    if not isinstance(dictionary, dict):
        raise ValueError("Parsed dictionary is not an object.")

    if not isinstance(courses, list):
        raise ValueError("Parsed coursesData is not an array.")

    return dictionary, courses


def save_data(dictionary, courses):
    ensure_data_file_exists()

    if not isinstance(dictionary, dict):
        raise ValueError("dictionary must be a dict.")

    if not isinstance(courses, list):
        raise ValueError("courses must be a list.")

    original = read_raw_data_file()
    create_backup()

    dictionary_keyword, _ = extract_dictionary_block(original)
    courses_keyword, _ = extract_courses_block(original)

    new_dict_str = json.dumps(dictionary, ensure_ascii=False, indent=4)
    new_courses_str = json.dumps(courses, ensure_ascii=False, indent=4)

    updated = re.sub(
        DECLARATION_PATTERN.format(
            name="dictionary",
            value_pattern=r"\{.*?\}",
        ),
        f"{dictionary_keyword} dictionary = {new_dict_str};",
        original,
        flags=re.S,
    )

    updated = re.sub(
        DECLARATION_PATTERN.format(
            name="coursesData",
            value_pattern=r"\[[\s\S]*?\]",
        ),
        f"{courses_keyword} coursesData = {new_courses_str};",
        updated,
        flags=re.S,
    )

    DATA_FILE.write_text(updated, encoding="utf-8")


def parse_bulk_words(paste_text: str) -> dict:
    """
    Accepts pasted content like:

    "alleviate": {
        "definition": "To make something less severe or painful.",
        "pos": "verb",
        "pron": "/əˈliː.vi.eɪt/",
        "example": "The government introduced measures to alleviate poverty.",
        "vietnamese": "làm giảm",
        "vietnamese_example": "Chính phủ đưa ra các biện pháp để giảm nghèo.",
        "cefr": "C1"
    },
    "arbitrary": {
        "definition": "Based on random choice rather than reason or system.",
        "pos": "adjective",
        "pron": "/ˈɑː.bɪ.trər.i/",
        "example": "The decision seemed arbitrary and unfair.",
        "vietnamese": "tùy ý",
        "vietnamese_example": "Quyết định đó có vẻ tùy ý và không công bằng.",
        "cefr": "C1"
    },

    Returns:
        {
            "alleviate": {...},
            "arbitrary": {...}
        }
    """
    cleaned = paste_text.strip()
    if not cleaned:
        raise ValueError("Paste text is empty.")

    cleaned = cleaned.rstrip(",")
    wrapped = "{\n" + cleaned + "\n}"

    try:
        parsed = json.loads(wrapped)
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid bulk word format:\n{e}")

    if not isinstance(parsed, dict):
        raise ValueError("Bulk paste content must parse into an object.")

    return parsed


def slugify(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[-\s]+", "-", text)
    return text.strip("-")


def find_all_sets(courses: list) -> list:
    all_sets = []
    for course in courses:
        for s in course.get("sets", []):
            all_sets.append(s)
    return all_sets


def find_set_by_id(courses: list, set_id: str):
    for course in courses:
        for s in course.get("sets", []):
            if s.get("id") == set_id:
                return s, course
    return None, None


def find_course_by_id(courses: list, course_id: str):
    for course in courses:
        if course.get("id") == course_id:
            return course
    return None


def add_words_to_set(courses: list, set_id: str, words: list):
    target_set, _ = find_set_by_id(courses, set_id)
    if not target_set:
        raise ValueError(f"Set '{set_id}' not found.")

    existing_words = set(target_set.get("words", []))
    for word in words:
        if word not in existing_words:
            target_set.setdefault("words", []).append(word)


def remove_word_from_all_sets(courses: list, word_key: str):
    for course in courses:
        for s in course.get("sets", []):
            if word_key in s.get("words", []):
                s["words"] = [w for w in s["words"] if w != word_key]


def rename_word_in_all_sets(courses: list, old_word_key: str, new_word_key: str):
    for course in courses:
        for s in course.get("sets", []):
            s["words"] = [
                new_word_key if w == old_word_key else w
                for w in s.get("words", [])
            ]


def replace_word_memberships(courses: list, word_key: str, selected_set_ids: list):
    selected_set_ids = set(selected_set_ids)

    for course in courses:
        for s in course.get("sets", []):
            words = s.get("words", [])
            set_id = s.get("id")

            if set_id in selected_set_ids:
                if word_key not in words:
                    words.append(word_key)
            else:
                if word_key in words:
                    s["words"] = [w for w in words if w != word_key]


def move_set_to_course(courses: list, set_id: str, new_course_id: str):
    target_set, old_course = find_set_by_id(courses, set_id)
    new_course = find_course_by_id(courses, new_course_id)

    if not target_set or not old_course:
        raise ValueError(f"Set '{set_id}' not found.")

    if not new_course:
        raise ValueError(f"Course '{new_course_id}' not found.")

    if old_course.get("id") == new_course.get("id"):
        return

    old_course["sets"] = [s for s in old_course.get("sets", []) if s.get("id") != set_id]
    new_course.setdefault("sets", []).append(target_set)


def get_data_file_path() -> Path:
    return DATA_FILE


def get_backup_dir_path() -> Path:
    return BACKUP_DIR
