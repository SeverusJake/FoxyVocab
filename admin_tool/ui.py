import copy
import tkinter as tk
from tkinter import ttk, messagebox, simpledialog

from data_manager import (
    load_data,
    save_data,
    parse_bulk_words,
    slugify,
)
from models import (
    validate_all,
    get_all_sets,
    get_all_courses,
    get_word_set_ids,
    create_word,
    update_word,
    delete_word,
    create_set,
    update_set,
    delete_set,
    create_course,
    update_course,
    delete_course,
    detect_bulk_conflicts,
    apply_bulk_words,
    find_set,
    find_course,
)


class FoxyVocabAdminApp:
    def __init__(self, root):
        self.root = root
        self.root.title("FoxyVocab Admin")
        self.root.geometry("1320x760")
        self.root.minsize(1120, 680)

        self.style = ttk.Style()
        try:
            self.style.theme_use("clam")
        except Exception:
            pass

        self.style.configure("TFrame", padding=4)
        self.style.configure("TLabel", padding=2)
        self.style.configure("TButton", padding=6)
        self.style.configure("Header.TLabel", font=("Segoe UI", 11, "bold"))
        self.style.configure("Section.TLabelframe.Label", font=("Segoe UI", 10, "bold"))

        self.dictionary = {}
        self.courses = []

        self.current_word_key = None
        self.current_set_id = None
        self.current_course_id = None

        self.word_set_vars = {}
        self.set_word_vars = {}
        self.bulk_target_mode = tk.StringVar(value="existing")

        self._build_layout()
        self.reload_data()

    def _build_layout(self):
        self.root.columnconfigure(0, weight=0)
        self.root.columnconfigure(1, weight=1)
        self.root.columnconfigure(2, weight=1)
        self.root.rowconfigure(0, weight=1)

        self.left_panel = ttk.Frame(self.root)
        self.left_panel.grid(row=0, column=0, sticky="nsw")
        self.center_panel = ttk.Frame(self.root)
        self.center_panel.grid(row=0, column=1, sticky="nsew")
        self.right_panel = ttk.Frame(self.root)
        self.right_panel.grid(row=0, column=2, sticky="nsew")

        self._build_left_panel()
        self._build_word_tab()
        self._build_set_tab()
        self._build_course_tab()
        self._build_bulk_tab()

    def _build_left_panel(self):
        frame = ttk.LabelFrame(self.left_panel, text="Browse", style="Section.TLabelframe")
        frame.pack(fill="y", expand=True, padx=8, pady=8)

        ttk.Label(frame, text="Words", style="Header.TLabel").pack(anchor="w")
        word_search_frame = ttk.Frame(frame)
        word_search_frame.pack(fill="x", pady=(0, 4))
        self.word_search_var = tk.StringVar()
        ttk.Entry(word_search_frame, textvariable=self.word_search_var).pack(side="left", fill="x", expand=True)
        ttk.Button(word_search_frame, text="Filter", command=self.refresh_word_list).pack(side="left", padx=(4, 0))

        self.word_listbox = tk.Listbox(frame, height=18)
        self.word_listbox.pack(fill="both", expand=True, pady=(0, 10))
        self.word_listbox.bind("<<ListboxSelect>>", self.on_word_select)

        ttk.Label(frame, text="Sets", style="Header.TLabel").pack(anchor="w")
        self.set_listbox = tk.Listbox(frame, height=10)
        self.set_listbox.pack(fill="both", expand=True, pady=(0, 10))
        self.set_listbox.bind("<<ListboxSelect>>", self.on_set_select)

        ttk.Label(frame, text="Courses", style="Header.TLabel").pack(anchor="w")
        self.course_listbox = tk.Listbox(frame, height=8)
        self.course_listbox.pack(fill="both", expand=True)
        self.course_listbox.bind("<<ListboxSelect>>", self.on_course_select)

        ttk.Button(frame, text="Reload from data.js", command=self.reload_data).pack(fill="x", pady=(10, 0))

    def _build_word_tab(self):
        notebook = ttk.Notebook(self.center_panel)
        notebook.pack(fill="both", expand=True, padx=8, pady=8)
        self.center_notebook = notebook

        self.word_tab = ttk.Frame(notebook)
        self.set_tab = ttk.Frame(notebook)
        self.course_tab = ttk.Frame(notebook)
        self.bulk_tab = ttk.Frame(notebook)

        notebook.add(self.word_tab, text="Word View")
        notebook.add(self.set_tab, text="Set View")
        notebook.add(self.course_tab, text="Course View")
        notebook.add(self.bulk_tab, text="Bulk Add")

        form = ttk.LabelFrame(self.word_tab, text="Word Editor", style="Section.TLabelframe")
        form.pack(fill="both", expand=True, padx=8, pady=8)

        self.word_vars = {
            "key": tk.StringVar(),
            "definition": tk.StringVar(),
            "pos": tk.StringVar(),
            "pron": tk.StringVar(),
            "example": tk.StringVar(),
            "vietnamese": tk.StringVar(),
            "vietnamese_example": tk.StringVar(),
            "cefr": tk.StringVar(),
        }

        row = 0
        for label, key in [
            ("Word", "key"),
            ("Definition", "definition"),
            ("Part of Speech", "pos"),
            ("Pronunciation", "pron"),
            ("Example", "example"),
            ("Vietnamese", "vietnamese"),
            ("Vietnamese Example", "vietnamese_example"),
            ("CEFR", "cefr"),
        ]:
            ttk.Label(form, text=label).grid(row=row, column=0, sticky="nw", padx=6, pady=6)
            entry = ttk.Entry(form, textvariable=self.word_vars[key], width=48)
            entry.grid(row=row, column=1, sticky="ew", padx=6, pady=6)
            row += 1

        form.columnconfigure(1, weight=1)

        set_frame = ttk.LabelFrame(form, text="Sets for this word", style="Section.TLabelframe")
        set_frame.grid(row=0, column=2, rowspan=8, sticky="nsew", padx=10, pady=6)

        self.word_set_canvas = tk.Canvas(set_frame, highlightthickness=0)
        self.word_set_scroll = ttk.Scrollbar(set_frame, orient="vertical", command=self.word_set_canvas.yview)
        self.word_set_inner = ttk.Frame(self.word_set_canvas)

        self.word_set_inner.bind(
            "<Configure>",
            lambda e: self.word_set_canvas.configure(scrollregion=self.word_set_canvas.bbox("all"))
        )

        self.word_set_canvas.create_window((0, 0), window=self.word_set_inner, anchor="nw")
        self.word_set_canvas.configure(yscrollcommand=self.word_set_scroll.set)

        self.word_set_canvas.pack(side="left", fill="both", expand=True)
        self.word_set_scroll.pack(side="right", fill="y")

        btn_frame = ttk.Frame(form)
        btn_frame.grid(row=8, column=0, columnspan=3, sticky="ew", padx=6, pady=(8, 6))

        ttk.Button(btn_frame, text="New Word", command=self.clear_word_form).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Create Word", command=self.create_word_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Update Word", command=self.update_word_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Delete Word", command=self.delete_word_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Validate All", command=self.validate_all_ui).pack(side="right", padx=4)

    def _build_set_tab(self):
        form = ttk.LabelFrame(self.set_tab, text="Set Editor", style="Section.TLabelframe")
        form.pack(fill="both", expand=True, padx=8, pady=8)

        self.set_vars = {
            "id": tk.StringVar(),
            "title": tk.StringVar(),
            "course_id": tk.StringVar(),
        }

        ttk.Label(form, text="Set ID").grid(row=0, column=0, sticky="w", padx=6, pady=6)
        ttk.Entry(form, textvariable=self.set_vars["id"]).grid(row=0, column=1, sticky="ew", padx=6, pady=6)

        ttk.Label(form, text="Set Title").grid(row=1, column=0, sticky="w", padx=6, pady=6)
        ttk.Entry(form, textvariable=self.set_vars["title"]).grid(row=1, column=1, sticky="ew", padx=6, pady=6)

        ttk.Label(form, text="Course").grid(row=2, column=0, sticky="w", padx=6, pady=6)
        self.set_course_combo = ttk.Combobox(form, textvariable=self.set_vars["course_id"], state="readonly")
        self.set_course_combo.grid(row=2, column=1, sticky="ew", padx=6, pady=6)

        words_frame = ttk.LabelFrame(form, text="Words in this set", style="Section.TLabelframe")
        words_frame.grid(row=0, column=2, rowspan=6, sticky="nsew", padx=10, pady=6)

        self.set_word_canvas = tk.Canvas(words_frame, highlightthickness=0)
        self.set_word_scroll = ttk.Scrollbar(words_frame, orient="vertical", command=self.set_word_canvas.yview)
        self.set_word_inner = ttk.Frame(self.set_word_canvas)

        self.set_word_inner.bind(
            "<Configure>",
            lambda e: self.set_word_canvas.configure(scrollregion=self.set_word_canvas.bbox("all"))
        )

        self.set_word_canvas.create_window((0, 0), window=self.set_word_inner, anchor="nw")
        self.set_word_canvas.configure(yscrollcommand=self.set_word_scroll.set)

        self.set_word_canvas.pack(side="left", fill="both", expand=True)
        self.set_word_scroll.pack(side="right", fill="y")

        form.columnconfigure(1, weight=1)
        form.columnconfigure(2, weight=1)
        form.rowconfigure(5, weight=1)

        btn_frame = ttk.Frame(form)
        btn_frame.grid(row=6, column=0, columnspan=3, sticky="ew", padx=6, pady=(8, 6))

        ttk.Button(btn_frame, text="New Set", command=self.clear_set_form).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Create Set", command=self.create_set_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Update Set", command=self.update_set_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Delete Set", command=self.delete_set_ui).pack(side="left", padx=4)

    def _build_course_tab(self):
        form = ttk.LabelFrame(self.course_tab, text="Course Editor", style="Section.TLabelframe")
        form.pack(fill="both", expand=True, padx=8, pady=8)

        self.course_vars = {
            "id": tk.StringVar(),
            "title": tk.StringVar(),
            "icon": tk.StringVar(),
        }

        ttk.Label(form, text="Course ID").grid(row=0, column=0, sticky="w", padx=6, pady=6)
        ttk.Entry(form, textvariable=self.course_vars["id"]).grid(row=0, column=1, sticky="ew", padx=6, pady=6)

        ttk.Label(form, text="Course Title").grid(row=1, column=0, sticky="w", padx=6, pady=6)
        ttk.Entry(form, textvariable=self.course_vars["title"]).grid(row=1, column=1, sticky="ew", padx=6, pady=6)

        ttk.Label(form, text="Icon").grid(row=2, column=0, sticky="w", padx=6, pady=6)
        ttk.Entry(form, textvariable=self.course_vars["icon"]).grid(row=2, column=1, sticky="ew", padx=6, pady=6)

        form.columnconfigure(1, weight=1)

        btn_frame = ttk.Frame(form)
        btn_frame.grid(row=3, column=0, columnspan=2, sticky="ew", padx=6, pady=(8, 6))

        ttk.Button(btn_frame, text="New Course", command=self.clear_course_form).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Create Course", command=self.create_course_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Update Course", command=self.update_course_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Delete Course", command=self.delete_course_ui).pack(side="left", padx=4)

    def _build_bulk_tab(self):
        form = ttk.LabelFrame(self.bulk_tab, text="Bulk Add Words", style="Section.TLabelframe")
        form.pack(fill="both", expand=True, padx=8, pady=8)

        ttk.Label(form, text="Paste word objects here").grid(row=0, column=0, sticky="w", padx=6, pady=6)

        self.bulk_text = tk.Text(form, wrap="word", height=18)
        self.bulk_text.grid(row=1, column=0, columnspan=4, sticky="nsew", padx=6, pady=6)

        target_frame = ttk.LabelFrame(form, text="Target Set", style="Section.TLabelframe")
        target_frame.grid(row=2, column=0, columnspan=4, sticky="ew", padx=6, pady=6)

        ttk.Radiobutton(
            target_frame, text="Use existing set",
            variable=self.bulk_target_mode, value="existing",
            command=self.toggle_bulk_target_mode
        ).grid(row=0, column=0, sticky="w", padx=6, pady=4)

        ttk.Radiobutton(
            target_frame, text="Create new set",
            variable=self.bulk_target_mode, value="new",
            command=self.toggle_bulk_target_mode
        ).grid(row=1, column=0, sticky="w", padx=6, pady=4)

        self.bulk_existing_set_var = tk.StringVar()
        self.bulk_existing_set_combo = ttk.Combobox(target_frame, textvariable=self.bulk_existing_set_var, state="readonly")
        self.bulk_existing_set_combo.grid(row=0, column=1, sticky="ew", padx=6, pady=4)

        self.bulk_new_set_title_var = tk.StringVar()
        self.bulk_new_set_id_var = tk.StringVar()
        self.bulk_new_set_course_var = tk.StringVar()

        ttk.Label(target_frame, text="New Set Title").grid(row=1, column=1, sticky="w", padx=6, pady=4)
        self.bulk_new_set_title_entry = ttk.Entry(target_frame, textvariable=self.bulk_new_set_title_var)
        self.bulk_new_set_title_entry.grid(row=1, column=2, sticky="ew", padx=6, pady=4)

        ttk.Label(target_frame, text="New Set ID").grid(row=2, column=1, sticky="w", padx=6, pady=4)
        self.bulk_new_set_id_entry = ttk.Entry(target_frame, textvariable=self.bulk_new_set_id_var)
        self.bulk_new_set_id_entry.grid(row=2, column=2, sticky="ew", padx=6, pady=4)

        ttk.Label(target_frame, text="Course").grid(row=3, column=1, sticky="w", padx=6, pady=4)
        self.bulk_new_set_course_combo = ttk.Combobox(target_frame, textvariable=self.bulk_new_set_course_var, state="readonly")
        self.bulk_new_set_course_combo.grid(row=3, column=2, sticky="ew", padx=6, pady=4)

        target_frame.columnconfigure(2, weight=1)

        btn_frame = ttk.Frame(form)
        btn_frame.grid(row=3, column=0, columnspan=4, sticky="ew", padx=6, pady=8)

        ttk.Button(btn_frame, text="Process Bulk Add", command=self.process_bulk_add_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Clear Box", command=lambda: self.bulk_text.delete("1.0", "end")).pack(side="left", padx=4)

        form.columnconfigure(0, weight=1)
        form.rowconfigure(1, weight=1)

        self.toggle_bulk_target_mode()

    def toggle_bulk_target_mode(self):
        is_existing = self.bulk_target_mode.get() == "existing"

        if is_existing:
            self.bulk_existing_set_combo.configure(state="readonly")
            self.bulk_new_set_title_entry.configure(state="disabled")
            self.bulk_new_set_id_entry.configure(state="disabled")
            self.bulk_new_set_course_combo.configure(state="disabled")
        else:
            self.bulk_existing_set_combo.configure(state="disabled")
            self.bulk_new_set_title_entry.configure(state="normal")
            self.bulk_new_set_id_entry.configure(state="normal")
            self.bulk_new_set_course_combo.configure(state="readonly")

    def reload_data(self):
        try:
            self.dictionary, self.courses = load_data()
            self.refresh_word_list()
            self.refresh_set_list()
            self.refresh_course_list()
            self.refresh_set_checkboxes()
            self.refresh_set_word_checkboxes()
            self.refresh_course_dropdowns()
            self.refresh_bulk_target_options()
        except Exception as e:
            messagebox.showerror("Load Error", str(e))

    def refresh_word_list(self):
        self.word_listbox.delete(0, "end")
        search = self.word_search_var.get().strip().lower()
        for word in sorted(self.dictionary.keys()):
            if search and search not in word.lower():
                continue
            self.word_listbox.insert("end", word)

    def refresh_set_list(self):
        self.set_listbox.delete(0, "end")
        for item in get_all_sets(self.courses):
            self.set_listbox.insert("end", f"{item['id']} | {item['title']} | {item['course_title']}")

    def refresh_course_list(self):
        self.course_listbox.delete(0, "end")
        for course in get_all_courses(self.courses):
            self.course_listbox.insert("end", f"{course['id']} | {course['title']} {course['icon']}")

    def refresh_set_checkboxes(self):
        for child in self.word_set_inner.winfo_children():
            child.destroy()

        self.word_set_vars = {}
        for item in get_all_sets(self.courses):
            var = tk.BooleanVar(value=False)
            self.word_set_vars[item["id"]] = var
            ttk.Checkbutton(
                self.word_set_inner,
                text=f"{item['title']} ({item['course_title']})",
                variable=var
            ).pack(anchor="w", fill="x", padx=4, pady=2)

    def refresh_set_word_checkboxes(self):
        for child in self.set_word_inner.winfo_children():
            child.destroy()

        self.set_word_vars = {}
        for word in sorted(self.dictionary.keys()):
            var = tk.BooleanVar(value=False)
            self.set_word_vars[word] = var
            ttk.Checkbutton(self.set_word_inner, text=word, variable=var).pack(anchor="w", fill="x", padx=4, pady=2)

    def refresh_course_dropdowns(self):
        course_values = [c["id"] for c in get_all_courses(self.courses)]
        self.set_course_combo["values"] = course_values
        self.bulk_new_set_course_combo["values"] = course_values

    def refresh_bulk_target_options(self):
        set_values = [item["id"] for item in get_all_sets(self.courses)]
        self.bulk_existing_set_combo["values"] = set_values

    def on_word_select(self, event=None):
        selection = self.word_listbox.curselection()
        if not selection:
            return

        word_key = self.word_listbox.get(selection[0])
        payload = self.dictionary.get(word_key, {})
        self.current_word_key = word_key
        self.center_notebook.select(self.word_tab)

        self.word_vars["key"].set(word_key)
        self.word_vars["definition"].set(payload.get("definition", ""))
        self.word_vars["pos"].set(payload.get("pos", ""))
        self.word_vars["pron"].set(payload.get("pron", ""))
        self.word_vars["example"].set(payload.get("example", ""))
        self.word_vars["vietnamese"].set(payload.get("vietnamese", ""))
        self.word_vars["vietnamese_example"].set(payload.get("vietnamese_example", ""))
        self.word_vars["cefr"].set(payload.get("cefr", ""))

        selected_set_ids = set(get_word_set_ids(self.courses, word_key))
        for set_id, var in self.word_set_vars.items():
            var.set(set_id in selected_set_ids)

    def on_set_select(self, event=None):
        selection = self.set_listbox.curselection()
        if not selection:
            return

        line = self.set_listbox.get(selection[0])
        set_id = line.split(" | ")[0]
        s, course = find_set(self.courses, set_id)
        if not s or not course:
            return

        self.current_set_id = set_id
        self.center_notebook.select(self.set_tab)

        self.set_vars["id"].set(s.get("id", ""))
        self.set_vars["title"].set(s.get("title", ""))
        self.set_vars["course_id"].set(course.get("id", ""))

        selected_words = set(s.get("words", []))
        for word, var in self.set_word_vars.items():
            var.set(word in selected_words)

    def on_course_select(self, event=None):
        selection = self.course_listbox.curselection()
        if not selection:
            return

        line = self.course_listbox.get(selection[0])
        course_id = line.split(" | ")[0]
        course = find_course(self.courses, course_id)
        if not course:
            return

        self.current_course_id = course_id
        self.center_notebook.select(self.course_tab)

        self.course_vars["id"].set(course.get("id", ""))
        self.course_vars["title"].set(course.get("title", ""))
        self.course_vars["icon"].set(course.get("icon", ""))

    def clear_word_form(self):
        self.current_word_key = None
        for var in self.word_vars.values():
            var.set("")
        for var in self.word_set_vars.values():
            var.set(False)

    def clear_set_form(self):
        self.current_set_id = None
        for var in self.set_vars.values():
            var.set("")
        for var in self.set_word_vars.values():
            var.set(False)

    def clear_course_form(self):
        self.current_course_id = None
        for var in self.course_vars.values():
            var.set("")

    def get_word_payload_from_form(self):
        return {
            "definition": self.word_vars["definition"].get().strip(),
            "pos": self.word_vars["pos"].get().strip(),
            "pron": self.word_vars["pron"].get().strip(),
            "example": self.word_vars["example"].get().strip(),
            "vietnamese": self.word_vars["vietnamese"].get().strip(),
            "vietnamese_example": self.word_vars["vietnamese_example"].get().strip(),
            "cefr": self.word_vars["cefr"].get().strip(),
        }

    def get_selected_set_ids_for_word(self):
        return [set_id for set_id, var in self.word_set_vars.items() if var.get()]

    def get_selected_words_for_set(self):
        return [word for word, var in self.set_word_vars.items() if var.get()]

    def create_word_ui(self):
        try:
            word_key = self.word_vars["key"].get().strip()
            payload = self.get_word_payload_from_form()
            selected_set_ids = self.get_selected_set_ids_for_word()

            if not messagebox.askyesno("Confirm Create", f"Create word '{word_key}'?"):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            create_word(dictionary_copy, courses_copy, word_key, payload, selected_set_ids)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.dictionary = dictionary_copy
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", f"Created word '{word_key}'.")
        except Exception as e:
            messagebox.showerror("Create Word Error", str(e))

    def update_word_ui(self):
        try:
            if not self.current_word_key:
                raise ValueError("Select a word first.")

            new_word_key = self.word_vars["key"].get().strip()
            payload = self.get_word_payload_from_form()
            selected_set_ids = self.get_selected_set_ids_for_word()

            if not messagebox.askyesno("Confirm Update", f"Update word '{self.current_word_key}'?"):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            update_word(dictionary_copy, courses_copy, self.current_word_key, new_word_key, payload, selected_set_ids)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.dictionary = dictionary_copy
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", f"Updated word '{new_word_key}'.")
        except Exception as e:
            messagebox.showerror("Update Word Error", str(e))

    def delete_word_ui(self):
        try:
            if not self.current_word_key:
                raise ValueError("Select a word first.")

            if not messagebox.askyesno("Confirm Delete", f"Delete word '{self.current_word_key}'?"):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            delete_word(dictionary_copy, courses_copy, self.current_word_key)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.clear_word_form()
            self.dictionary = dictionary_copy
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", "Word deleted.")
        except Exception as e:
            messagebox.showerror("Delete Word Error", str(e))

    def create_set_ui(self):
        try:
            set_id = self.set_vars["id"].get().strip()
            title = self.set_vars["title"].get().strip()
            course_id = self.set_vars["course_id"].get().strip()
            words = self.get_selected_words_for_set()

            if not messagebox.askyesno("Confirm Create", f"Create set '{title}'?"):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            create_set(courses_copy, set_id, title, course_id, words)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", f"Created set '{title}'.")
        except Exception as e:
            messagebox.showerror("Create Set Error", str(e))

    def update_set_ui(self):
        try:
            if not self.current_set_id:
                raise ValueError("Select a set first.")

            set_id = self.set_vars["id"].get().strip()
            title = self.set_vars["title"].get().strip()
            course_id = self.set_vars["course_id"].get().strip()
            words = self.get_selected_words_for_set()

            if not messagebox.askyesno("Confirm Update", f"Update set '{self.current_set_id}'?"):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            update_set(courses_copy, self.current_set_id, set_id, title, course_id, words)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", f"Updated set '{title}'.")
        except Exception as e:
            messagebox.showerror("Update Set Error", str(e))

    def delete_set_ui(self):
        try:
            if not self.current_set_id:
                raise ValueError("Select a set first.")

            if not messagebox.askyesno(
                "Confirm Delete",
                f"Delete set '{self.current_set_id}'?\nThis will not delete dictionary words."
            ):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            delete_set(courses_copy, self.current_set_id)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.clear_set_form()
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", "Set deleted.")
        except Exception as e:
            messagebox.showerror("Delete Set Error", str(e))

    def create_course_ui(self):
        try:
            course_id = self.course_vars["id"].get().strip()
            title = self.course_vars["title"].get().strip()
            icon = self.course_vars["icon"].get().strip()

            if not messagebox.askyesno("Confirm Create", f"Create course '{title}'?"):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            create_course(courses_copy, course_id, title, icon)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", f"Created course '{title}'.")
        except Exception as e:
            messagebox.showerror("Create Course Error", str(e))

    def update_course_ui(self):
        try:
            if not self.current_course_id:
                raise ValueError("Select a course first.")

            new_course_id = self.course_vars["id"].get().strip()
            title = self.course_vars["title"].get().strip()
            icon = self.course_vars["icon"].get().strip()

            if not messagebox.askyesno("Confirm Update", f"Update course '{self.current_course_id}'?"):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            update_course(courses_copy, self.current_course_id, new_course_id, title, icon)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", f"Updated course '{title}'.")
        except Exception as e:
            messagebox.showerror("Update Course Error", str(e))

    def delete_course_ui(self):
        try:
            if not self.current_course_id:
                raise ValueError("Select a course first.")

            if not messagebox.askyesno(
                "Confirm Delete",
                f"Delete course '{self.current_course_id}'?\nIts sets will also be removed from coursesData, but dictionary words stay safe."
            ):
                return

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)
            delete_course(courses_copy, self.current_course_id)

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.clear_course_form()
            self.courses = courses_copy
            self.reload_data()
            messagebox.showinfo("Success", "Course deleted.")
        except Exception as e:
            messagebox.showerror("Delete Course Error", str(e))

    def validate_all_ui(self):
        errors = validate_all(self.dictionary, self.courses)
        if errors:
            messagebox.showerror("Validation Errors", "\n".join(errors))
        else:
            messagebox.showinfo("Validation", "Everything looks valid.")

    def process_bulk_add_ui(self):
        try:
            paste_text = self.bulk_text.get("1.0", "end").strip()
            if not paste_text:
                raise ValueError("Paste box is empty.")

            incoming_words = parse_bulk_words(paste_text)

            dictionary_copy = copy.deepcopy(self.dictionary)
            courses_copy = copy.deepcopy(self.courses)

            target_set_id = None

            if self.bulk_target_mode.get() == "existing":
                target_set_id = self.bulk_existing_set_var.get().strip()
                if not target_set_id:
                    raise ValueError("Choose an existing set.")
            else:
                new_set_title = self.bulk_new_set_title_var.get().strip()
                new_set_id = self.bulk_new_set_id_var.get().strip() or slugify(new_set_title)
                new_set_course = self.bulk_new_set_course_var.get().strip()

                if not new_set_title:
                    raise ValueError("New set title cannot be empty.")
                if not new_set_course:
                    raise ValueError("Choose a course for the new set.")

                create_set(courses_copy, new_set_id, new_set_title, new_set_course, [])
                target_set_id = new_set_id

            conflicts = detect_bulk_conflicts(dictionary_copy, incoming_words)
            action_map = {}

            if conflicts:
                for word in conflicts:
                    overwrite = messagebox.askyesno(
                        "Bulk Conflict",
                        f"Word '{word}' already exists.\n\nYes = overwrite\nNo = skip"
                    )
                    action_map[word] = "overwrite" if overwrite else "skip"

            new_count = len([w for w in incoming_words if w not in self.dictionary])
            overwrite_count = len([w for w, action in action_map.items() if action == "overwrite"])
            skip_count = len([w for w, action in action_map.items() if action == "skip"])

            confirm_msg = (
                f"Process bulk add?\n\n"
                f"New words: {new_count}\n"
                f"Overwrite existing: {overwrite_count}\n"
                f"Skip existing: {skip_count}\n"
                f"Target set: {target_set_id}"
            )

            if not messagebox.askyesno("Confirm Bulk Add", confirm_msg):
                return

            created, updated = apply_bulk_words(
                dictionary_copy,
                courses_copy,
                incoming_words,
                action_map,
                target_set_id,
            )

            errors = validate_all(dictionary_copy, courses_copy)
            if errors:
                raise ValueError("\n".join(errors))

            save_data(dictionary_copy, courses_copy)
            self.dictionary = dictionary_copy
            self.courses = courses_copy
            self.reload_data()

            messagebox.showinfo(
                "Bulk Add Complete",
                f"Created: {created}\nUpdated: {updated}\nSkipped: {skip_count}"
            )
        except Exception as e:
            messagebox.showerror("Bulk Add Error", str(e))