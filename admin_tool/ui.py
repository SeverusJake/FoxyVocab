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
    move_course,
    move_set,
    detect_bulk_conflicts,
    apply_bulk_words,
    find_set,
    find_course,
)


class FoxyVocabAdminApp:
    ICON_CHOICES = [
        "🎓", "📘", "📚", "📖", "📝", "✍️", "🗣️", "🧠",
        "💼", "🏢", "🏦", "📈", "📊", "⚖️", "🛠️", "🔧",
        "💻", "⌨️", "🔬", "🧪", "⚙️", "🌐", "📡", "🤖",
        "🚚", "🚢", "✈️", "🚆", "📦", "🧾", "🏷️", "📬",
        "🌍", "🌎", "🌏", "🌿", "🍀", "🌱", "🌊", "🔥",
        "💡", "🎯", "⭐", "🏆", "🎵", "🎨", "📷", "🎬",
    ]

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

        self.word_list_keys = []
        self.set_list_ids = []
        self.course_list_ids = []

        self.word_set_states = {}
        self.set_word_states = {}
        self.course_set_ids = []
        self.bulk_target_mode = tk.StringVar(value="existing")

        self.word_filter_state = {
            "cefr": "All",
            "pos": "All",
            "course_id": "All",
            "set_id": "All",
        }
        self.word_filter_choices = {
            "cefr": ["All"],
            "pos": ["All"],
            "course": [("All", "All Courses")],
            "set": [("All", "All Sets")],
        }

        self._build_layout()
        self.reload_data()

    def _build_layout(self):
        self.root.columnconfigure(0, weight=0)
        self.root.columnconfigure(1, weight=1)
        self.root.columnconfigure(2, weight=1)
        self.root.rowconfigure(0, weight=1)
        self.root.rowconfigure(1, weight=0)

        self.left_panel = ttk.Frame(self.root)
        self.left_panel.grid(row=0, column=0, sticky="nsw")
        self.center_panel = ttk.Frame(self.root)
        self.center_panel.grid(row=0, column=1, sticky="nsew")
        self.right_panel = ttk.Frame(self.root)
        self.right_panel.grid(row=0, column=2, sticky="nsew")

        self.loading_frame = ttk.Frame(self.root)
        self.loading_frame.grid(row=1, column=0, columnspan=3, sticky="ew", padx=8, pady=(0, 8))
        self.loading_label = ttk.Label(self.loading_frame, text="Loading...")
        self.loading_progress = ttk.Progressbar(self.loading_frame, mode="indeterminate", length=160)
        self.loading_visible = False

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
        ttk.Button(word_search_frame, text="Search", command=self.refresh_word_list).pack(side="left", padx=(4, 0))
        ttk.Button(word_search_frame, text="Filter", command=self.open_word_filter_dialog).pack(side="left", padx=(4, 0))

        word_list_frame = ttk.Frame(frame)
        word_list_frame.pack(fill="both", expand=True, pady=(0, 10))
        self.word_listbox = tk.Listbox(word_list_frame, height=18)
        self.word_listbox.pack(side="left", fill="both", expand=True)
        self.word_list_scroll = ttk.Scrollbar(word_list_frame, orient="vertical", command=self.word_listbox.yview)
        self.word_list_scroll.pack(side="right", fill="y")
        self.word_listbox.configure(yscrollcommand=self.word_list_scroll.set)
        self.word_listbox.bind("<<ListboxSelect>>", self.on_word_select)

        ttk.Label(frame, text="Sets", style="Header.TLabel").pack(anchor="w")
        set_list_frame = ttk.Frame(frame)
        set_list_frame.pack(fill="both", expand=True, pady=(0, 10))
        self.set_listbox = tk.Listbox(set_list_frame, height=10)
        self.set_listbox.pack(side="left", fill="both", expand=True)
        self.set_list_scroll = ttk.Scrollbar(set_list_frame, orient="vertical", command=self.set_listbox.yview)
        self.set_list_scroll.pack(side="right", fill="y")
        self.set_listbox.configure(yscrollcommand=self.set_list_scroll.set)
        self.set_listbox.bind("<<ListboxSelect>>", self.on_set_select)

        ttk.Label(frame, text="Courses", style="Header.TLabel").pack(anchor="w")
        course_list_frame = ttk.Frame(frame)
        course_list_frame.pack(fill="both", expand=True)
        self.course_listbox = tk.Listbox(course_list_frame, height=8)
        self.course_listbox.pack(side="left", fill="both", expand=True)
        self.course_list_scroll = ttk.Scrollbar(course_list_frame, orient="vertical", command=self.course_listbox.yview)
        self.course_list_scroll.pack(side="right", fill="y")
        self.course_listbox.configure(yscrollcommand=self.course_list_scroll.set)
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
            "pos": tk.StringVar(),
            "pron": tk.StringVar(),
            "vietnamese": tk.StringVar(),
            "cefr": tk.StringVar(),
        }
        self.word_text_fields = {}

        row = 0
        for label, key in [
            ("Word", "key"),
            ("Part of Speech", "pos"),
            ("Pronunciation", "pron"),
            ("Vietnamese", "vietnamese"),
            ("CEFR", "cefr"),
        ]:
            ttk.Label(form, text=label).grid(row=row, column=0, sticky="nw", padx=6, pady=6)
            entry = ttk.Entry(form, textvariable=self.word_vars[key], width=48)
            entry.grid(row=row, column=1, sticky="ew", padx=6, pady=6)
            row += 1

        for label, key in [
            ("Definition", "definition"),
            ("Example", "example"),
            ("Vietnamese Example", "vietnamese_example"),
        ]:
            ttk.Label(form, text=label).grid(row=row, column=0, sticky="nw", padx=6, pady=6)
            text = tk.Text(form, width=48, height=4, wrap="word")
            text.grid(row=row, column=1, sticky="ew", padx=6, pady=6)
            self.word_text_fields[key] = text
            row += 1

        form.columnconfigure(1, weight=1)

        set_frame = ttk.LabelFrame(form, text="Sets for this word", style="Section.TLabelframe")
        set_frame.grid(row=0, column=2, rowspan=8, sticky="nsew", padx=10, pady=6)

        self.word_set_tree = ttk.Treeview(
            set_frame,
            columns=("set", "course"),
            show="tree headings",
            selectmode="browse",
            height=16,
        )
        self.word_set_tree.heading("#0", text="In")
        self.word_set_tree.heading("set", text="Set")
        self.word_set_tree.heading("course", text="Course")
        self.word_set_tree.column("#0", width=50, minwidth=50, stretch=False, anchor="center")
        self.word_set_tree.column("set", width=220, minwidth=160, stretch=True)
        self.word_set_tree.column("course", width=140, minwidth=120, stretch=True)

        self.word_set_scroll = ttk.Scrollbar(set_frame, orient="vertical", command=self.word_set_tree.yview)
        self.word_set_tree.configure(yscrollcommand=self.word_set_scroll.set)
        self.word_set_tree.pack(side="left", fill="both", expand=True)
        self.word_set_scroll.pack(side="right", fill="y")
        self.word_set_tree.bind("<Button-1>", self.on_word_set_tree_click)
        self.word_set_tree.bind("<<TreeviewSelect>>", self.on_word_set_tree_select)
        self.word_set_tree.bind("<Double-1>", self.on_word_set_tree_double_click)
        self.word_set_tree.bind("<MouseWheel>", self.on_word_set_mousewheel)
        self.word_set_tree.bind("<Button-4>", self.on_word_set_mousewheel)
        self.word_set_tree.bind("<Button-5>", self.on_word_set_mousewheel)

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

        self.set_word_tree = ttk.Treeview(
            words_frame,
            columns=("word", "vietnamese", "pos", "cefr"),
            show="tree headings",
            selectmode="browse",
            height=18,
        )
        self.set_word_tree.heading("#0", text="In")
        self.set_word_tree.heading("word", text="Word")
        self.set_word_tree.heading("vietnamese", text="Vietnamese")
        self.set_word_tree.heading("pos", text="POS")
        self.set_word_tree.heading("cefr", text="CEFR")
        self.set_word_tree.column("#0", width=50, minwidth=50, stretch=False, anchor="center")
        self.set_word_tree.column("word", width=220, minwidth=160, stretch=True)
        self.set_word_tree.column("vietnamese", width=220, minwidth=160, stretch=True)
        self.set_word_tree.column("pos", width=90, minwidth=70, stretch=False)
        self.set_word_tree.column("cefr", width=70, minwidth=60, stretch=False, anchor="center")

        self.set_word_scroll = ttk.Scrollbar(words_frame, orient="vertical", command=self.set_word_tree.yview)
        self.set_word_tree.configure(yscrollcommand=self.set_word_scroll.set)
        self.set_word_tree.pack(side="left", fill="both", expand=True)
        self.set_word_scroll.pack(side="right", fill="y")
        self.set_word_tree.bind("<Button-1>", self.on_set_word_tree_click)
        self.set_word_tree.bind("<<TreeviewSelect>>", self.on_set_word_tree_select)
        self.set_word_tree.bind("<Double-1>", self.on_set_word_tree_double_click)
        self.set_word_tree.bind("<MouseWheel>", self.on_set_word_tree_mousewheel)
        self.set_word_tree.bind("<Button-4>", self.on_set_word_tree_mousewheel)
        self.set_word_tree.bind("<Button-5>", self.on_set_word_tree_mousewheel)

        form.columnconfigure(1, weight=1)
        form.columnconfigure(2, weight=1)
        form.rowconfigure(5, weight=1)

        btn_frame = ttk.Frame(form)
        btn_frame.grid(row=6, column=0, columnspan=3, sticky="ew", padx=6, pady=(8, 6))

        ttk.Button(btn_frame, text="New Set", command=self.clear_set_form).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Create Set", command=self.create_set_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Update Set", command=self.update_set_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Delete Set", command=self.delete_set_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Up", command=lambda: self.move_set_ui(-1)).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Down", command=lambda: self.move_set_ui(1)).pack(side="left", padx=4)

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
        icon_frame = ttk.Frame(form)
        icon_frame.grid(row=2, column=1, sticky="ew", padx=6, pady=6)
        ttk.Entry(icon_frame, textvariable=self.course_vars["icon"]).pack(side="left", fill="x", expand=True)
        ttk.Button(icon_frame, text="Add Icon", command=self.open_icon_picker).pack(side="left", padx=(6, 0))

        course_sets_frame = ttk.LabelFrame(form, text="Sets in this course", style="Section.TLabelframe")
        course_sets_frame.grid(row=0, column=2, rowspan=4, sticky="nsew", padx=10, pady=6)

        course_sets_list_frame = ttk.Frame(course_sets_frame)
        course_sets_list_frame.pack(fill="both", expand=True, padx=4, pady=4)
        self.course_set_tree = ttk.Treeview(
            course_sets_list_frame,
            columns=("set", "words"),
            show="headings",
            selectmode="browse",
            height=12,
        )
        self.course_set_tree.heading("set", text="Set")
        self.course_set_tree.heading("words", text="Words")
        self.course_set_tree.column("set", width=220, minwidth=160, stretch=True)
        self.course_set_tree.column("words", width=80, minwidth=70, stretch=False, anchor="center")
        self.course_set_tree.pack(side="left", fill="both", expand=True)
        self.course_set_scroll = ttk.Scrollbar(course_sets_list_frame, orient="vertical", command=self.course_set_tree.yview)
        self.course_set_scroll.pack(side="right", fill="y")
        self.course_set_tree.configure(yscrollcommand=self.course_set_scroll.set)
        self.course_set_tree.bind("<Double-1>", self.on_course_set_tree_double_click)
        self.course_set_tree.bind("<MouseWheel>", self.on_course_set_mousewheel)
        self.course_set_tree.bind("<Button-4>", self.on_course_set_mousewheel)
        self.course_set_tree.bind("<Button-5>", self.on_course_set_mousewheel)

        form.columnconfigure(1, weight=1)
        form.columnconfigure(2, weight=1)
        form.rowconfigure(3, weight=1)

        btn_frame = ttk.Frame(form)
        btn_frame.grid(row=4, column=0, columnspan=3, sticky="ew", padx=6, pady=(8, 6))

        ttk.Button(btn_frame, text="New Course", command=self.clear_course_form).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Create Course", command=self.create_course_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Update Course", command=self.update_course_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Delete Course", command=self.delete_course_ui).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Up", command=lambda: self.move_course_ui(-1)).pack(side="left", padx=4)
        ttk.Button(btn_frame, text="Down", command=lambda: self.move_course_ui(1)).pack(side="left", padx=4)

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

    def show_loading(self, message="Loading..."):
        self.loading_label.configure(text=message)
        if not self.loading_visible:
            self.loading_label.pack(side="left", padx=(0, 8))
            self.loading_progress.pack(side="left")
            self.loading_progress.start(10)
            self.loading_visible = True
        self.root.update_idletasks()

    def hide_loading(self):
        if self.loading_visible:
            self.loading_progress.stop()
            self.loading_progress.pack_forget()
            self.loading_label.pack_forget()
            self.loading_visible = False
        self.root.update_idletasks()

    def center_toplevel(self, dialog, width=None, height=None):
        dialog.update_idletasks()
        width = width or dialog.winfo_width()
        height = height or dialog.winfo_height()
        root_x = self.root.winfo_rootx()
        root_y = self.root.winfo_rooty()
        root_w = self.root.winfo_width()
        root_h = self.root.winfo_height()
        x = root_x + max((root_w - width) // 2, 0)
        y = root_y + max((root_h - height) // 2, 0)
        dialog.geometry(f"{width}x{height}+{x}+{y}")

    def on_word_set_mousewheel(self, event):
        if hasattr(event, "delta") and event.delta:
            direction = -1 if event.delta > 0 else 1
        elif getattr(event, "num", None) == 4:
            direction = -1
        elif getattr(event, "num", None) == 5:
            direction = 1
        else:
            direction = 0

        if direction:
            self.word_set_tree.yview_scroll(direction, "units")
            return "break"

    def on_course_set_mousewheel(self, event):
        if hasattr(event, "delta") and event.delta:
            direction = -1 if event.delta > 0 else 1
        elif getattr(event, "num", None) == 4:
            direction = -1
        elif getattr(event, "num", None) == 5:
            direction = 1
        else:
            direction = 0

        if direction:
            self.course_set_tree.yview_scroll(direction, "units")
            return "break"

    def reload_data(self):
        try:
            self.show_loading("Loading...")
            self.dictionary, self.courses = load_data()
            self.refresh_word_filter_choices()
            self.refresh_word_list()
            self.refresh_set_list()
            self.refresh_course_list()
            self.refresh_set_checkboxes()
            self.refresh_set_word_checkboxes()
            self.refresh_course_sets_list()
            self.refresh_course_dropdowns()
            self.refresh_bulk_target_options()
        except Exception as e:
            messagebox.showerror("Load Error", str(e))
        finally:
            self.hide_loading()

    def refresh_word_list(self):
        self.word_listbox.delete(0, "end")
        self.word_list_keys = []
        search = self.word_search_var.get().strip().lower()
        cefr_filter = self.word_filter_state["cefr"]
        pos_filter = self.word_filter_state["pos"]
        course_filter = self.word_filter_state["course_id"]
        set_filter = self.word_filter_state["set_id"]
        all_sets = get_all_sets(self.courses)
        set_course_map = {item["id"]: item["course_id"] for item in all_sets}

        for word in sorted(self.dictionary.keys()):
            payload = self.dictionary.get(word, {})
            if search and search not in word.lower():
                continue

            if cefr_filter != "All" and payload.get("cefr", "").strip() != cefr_filter:
                continue

            if pos_filter != "All" and payload.get("pos", "").strip() != pos_filter:
                continue

            word_set_ids = set(get_word_set_ids(self.courses, word))
            if set_filter != "All" and set_filter not in word_set_ids:
                continue

            if course_filter != "All":
                matches_course = any(
                    set_course_map.get(set_id) == course_filter
                    for set_id in word_set_ids
                )
                if not matches_course:
                    continue

            if (
                set_filter != "All"
                and course_filter != "All"
                and set_course_map.get(set_filter) != course_filter
            ):
                continue

            cefr = payload.get("cefr", "").strip() or "-"
            self.word_list_keys.append(word)
            self.word_listbox.insert("end", f"[{cefr}] {word}")

    def refresh_set_list(self):
        self.set_listbox.delete(0, "end")
        self.set_list_ids = []
        for item in get_all_sets(self.courses):
            self.set_list_ids.append(item["id"])
            self.set_listbox.insert("end", f"{item['title']} ({item['course_title']})")

    def refresh_course_list(self):
        self.course_listbox.delete(0, "end")
        self.course_list_ids = []
        for course in get_all_courses(self.courses):
            self.course_list_ids.append(course["id"])
            title = course["title"]
            icon = course["icon"].strip()
            label = f"{title} [{icon}]" if icon else title
            self.course_listbox.insert("end", label)

    def refresh_word_filter_choices(self):
        cefr_options = sorted(
            {
                (payload.get("cefr") or "").strip()
                for payload in self.dictionary.values()
                if (payload.get("cefr") or "").strip()
            }
        )
        pos_options = sorted(
            {
                (payload.get("pos") or "").strip()
                for payload in self.dictionary.values()
                if (payload.get("pos") or "").strip()
            }
        )
        course_options = [("All", "All Courses")] + [
            (course["id"], course["title"])
            for course in get_all_courses(self.courses)
        ]
        set_options = [("All", "All Sets")] + [
            (item["id"], f"{item['title']} ({item['course_title']})")
            for item in get_all_sets(self.courses)
        ]

        self.word_filter_choices = {
            "cefr": ["All"] + cefr_options,
            "pos": ["All"] + pos_options,
            "course": course_options,
            "set": set_options,
        }

        valid_course_ids = {value for value, _ in course_options}
        valid_set_ids = {value for value, _ in set_options}

        if self.word_filter_state["cefr"] not in self.word_filter_choices["cefr"]:
            self.word_filter_state["cefr"] = "All"
        if self.word_filter_state["pos"] not in self.word_filter_choices["pos"]:
            self.word_filter_state["pos"] = "All"
        if self.word_filter_state["course_id"] not in valid_course_ids:
            self.word_filter_state["course_id"] = "All"
        if self.word_filter_state["set_id"] not in valid_set_ids:
            self.word_filter_state["set_id"] = "All"

    def open_word_filter_dialog(self):
        dialog = tk.Toplevel(self.root)
        dialog.title("Word Filters")
        dialog.transient(self.root)
        dialog.grab_set()
        dialog.resizable(True, True)

        frame = ttk.Frame(dialog, padding=12)
        frame.pack(fill="both", expand=True)

        cefr_var = tk.StringVar(value=self.word_filter_state["cefr"])
        pos_var = tk.StringVar(value=self.word_filter_state["pos"])
        course_var = tk.StringVar(value=self.word_filter_state["course_id"])
        set_var = tk.StringVar(value=self.word_filter_state["set_id"])

        course_labels = {value: label for value, label in self.word_filter_choices["course"]}
        set_labels = {value: label for value, label in self.word_filter_choices["set"]}

        ttk.Label(frame, text="CEFR").grid(row=0, column=0, sticky="w", padx=(0, 8), pady=4)
        ttk.Combobox(
            frame,
            textvariable=cefr_var,
            values=self.word_filter_choices["cefr"],
            state="readonly",
            width=26,
        ).grid(row=0, column=1, sticky="ew", pady=4)

        ttk.Label(frame, text="Part of Speech").grid(row=1, column=0, sticky="w", padx=(0, 8), pady=4)
        ttk.Combobox(
            frame,
            textvariable=pos_var,
            values=self.word_filter_choices["pos"],
            state="readonly",
            width=26,
        ).grid(row=1, column=1, sticky="ew", pady=4)

        ttk.Label(frame, text="Course").grid(row=2, column=0, sticky="w", padx=(0, 8), pady=4)
        course_combo = ttk.Combobox(
            frame,
            state="readonly",
            values=[label for _, label in self.word_filter_choices["course"]],
            width=26,
        )
        course_combo.grid(row=2, column=1, sticky="ew", pady=4)
        course_combo.set(course_labels.get(course_var.get(), "All Courses"))

        ttk.Label(frame, text="Set").grid(row=3, column=0, sticky="w", padx=(0, 8), pady=4)
        set_combo = ttk.Combobox(
            frame,
            state="readonly",
            values=[label for _, label in self.word_filter_choices["set"]],
            width=26,
        )
        set_combo.grid(row=3, column=1, sticky="ew", pady=4)
        set_combo.set(set_labels.get(set_var.get(), "All Sets"))

        def apply_filters():
            selected_course_label = course_combo.get()
            selected_set_label = set_combo.get()

            course_id = next(
                (value for value, label in self.word_filter_choices["course"] if label == selected_course_label),
                "All",
            )
            set_id = next(
                (value for value, label in self.word_filter_choices["set"] if label == selected_set_label),
                "All",
            )

            self.word_filter_state = {
                "cefr": cefr_var.get(),
                "pos": pos_var.get(),
                "course_id": course_id,
                "set_id": set_id,
            }
            self.refresh_word_list()
            dialog.destroy()

        def clear_filters():
            cefr_var.set("All")
            pos_var.set("All")
            course_combo.set("All Courses")
            set_combo.set("All Sets")

        button_frame = ttk.Frame(frame)
        button_frame.grid(row=4, column=0, columnspan=2, sticky="e", pady=(10, 0))
        ttk.Button(button_frame, text="Clear", command=clear_filters).pack(side="left", padx=(0, 6))
        ttk.Button(button_frame, text="Apply", command=apply_filters).pack(side="left")

        frame.columnconfigure(1, weight=1)
        self.center_toplevel(dialog, width=360, height=220)
        dialog.bind("<Return>", lambda _event: apply_filters())
        dialog.bind("<Escape>", lambda _event: dialog.destroy())

    def open_icon_picker(self):
        dialog = tk.Toplevel(self.root)
        dialog.title("Choose Icon")
        dialog.transient(self.root)
        dialog.grab_set()
        dialog.resizable(True, True)

        frame = ttk.Frame(dialog, padding=12)
        frame.pack(fill="both", expand=True)

        ttk.Label(
            frame,
            text="Pick an icon or keep typing manually in the field.",
        ).grid(row=0, column=0, columnspan=2, pady=(0, 8))

        icon_var = tk.StringVar(value=self.course_vars["icon"].get())
        ttk.Label(frame, textvariable=icon_var, font=("Segoe UI Emoji", 50)).grid(
            row=1, column=0, columnspan=2, pady=(0, 8)
        )

        list_frame = ttk.Frame(frame)
        list_frame.grid(row=2, column=0, columnspan=2, sticky="nsew")

        icon_listbox = tk.Listbox(list_frame, height=14, font=("Segoe UI Emoji", 12), justify="center")
        icon_listbox.pack(side="left", fill="both", expand=True)
        icon_scroll = ttk.Scrollbar(list_frame, orient="vertical", command=icon_listbox.yview)
        icon_scroll.pack(side="right", fill="y")
        icon_listbox.configure(yscrollcommand=icon_scroll.set)

        for icon in self.ICON_CHOICES:
            icon_listbox.insert("end", f"{icon}")

        current_icon = self.course_vars["icon"].get()
        if current_icon in self.ICON_CHOICES:
            current_index = self.ICON_CHOICES.index(current_icon)
            icon_listbox.selection_set(current_index)
            icon_listbox.see(current_index)

        def update_preview(_event=None):
            selection = icon_listbox.curselection()
            if selection:
                icon_var.set(self.ICON_CHOICES[selection[0]])

        icon_listbox.bind("<<ListboxSelect>>", update_preview)
        icon_listbox.bind("<Double-1>", lambda _event: apply_icon())

        def apply_icon():
            self.course_vars["icon"].set(icon_var.get())
            dialog.destroy()

        button_frame = ttk.Frame(frame)
        button_frame.grid(row=3, column=0, columnspan=2, sticky="e", pady=(10, 0))
        ttk.Button(button_frame, text="Cancel", command=dialog.destroy).pack(side="left", padx=(0, 6))
        ttk.Button(button_frame, text="Use Icon", command=apply_icon).pack(side="left")

        frame.columnconfigure(0, weight=1)
        frame.columnconfigure(1, weight=0)
        frame.rowconfigure(2, weight=1)

        self.center_toplevel(dialog, width=320, height=420)

    def refresh_set_checkboxes(self):
        self.word_set_states = {}
        selected_set_ids = set(get_word_set_ids(self.courses, self.current_word_key)) if self.current_word_key else set()
        all_sets = get_all_sets(self.courses)
        for item in all_sets:
            self.word_set_states[item["id"]] = item["id"] in selected_set_ids
        self.render_word_set_tree()

    def render_word_set_tree(self):
        self.word_set_tree.delete(*self.word_set_tree.get_children())
        all_sets = get_all_sets(self.courses)
        sorted_sets = sorted(
            all_sets,
            key=lambda item: (not self.word_set_states.get(item["id"], False),),
        )

        for item in sorted_sets:
            marker = "[x]" if self.word_set_states.get(item["id"], False) else "[ ]"
            self.word_set_tree.insert(
                "",
                "end",
                iid=item["id"],
                text=marker,
                values=(item["title"], item["course_title"]),
            )

    def refresh_set_word_checkboxes(self):
        selected_words = set()
        if self.current_set_id:
            selected_set, _ = find_set(self.courses, self.current_set_id)
            if selected_set:
                selected_words = set(selected_set.get("words", []))

        self.set_word_states = {
            word: word in selected_words
            for word in self.dictionary.keys()
        }
        self.render_set_word_tree()

    def render_set_word_tree(self):
        self.set_word_tree.delete(*self.set_word_tree.get_children())
        sorted_words = sorted(
            self.dictionary.keys(),
            key=lambda word: (not self.set_word_states.get(word, False), word.lower()),
        )

        for word in sorted_words:
            payload = self.dictionary.get(word, {})
            marker = "[x]" if self.set_word_states.get(word, False) else "[ ]"
            self.set_word_tree.insert(
                "",
                "end",
                iid=word,
                text=marker,
                values=(
                    word,
                    payload.get("vietnamese", ""),
                    payload.get("pos", ""),
                    payload.get("cefr", ""),
                ),
            )

    def refresh_course_sets_list(self):
        self.course_set_tree.delete(*self.course_set_tree.get_children())
        self.course_set_ids = []

        if not self.current_course_id:
            return

        course = find_course(self.courses, self.current_course_id)
        if not course:
            return

        sets = course.get("sets", [])
        for item in sets:
            self.course_set_ids.append(item.get("id", ""))
            self.course_set_tree.insert(
                "",
                "end",
                iid=item.get("id", ""),
                values=(item.get("title", ""), len(item.get("words", []))),
            )

    def refresh_course_dropdowns(self):
        course_values = [c["id"] for c in get_all_courses(self.courses)]
        self.set_course_combo["values"] = course_values
        self.bulk_new_set_course_combo["values"] = course_values

    def refresh_bulk_target_options(self):
        set_values = [item["id"] for item in get_all_sets(self.courses)]
        self.bulk_existing_set_combo["values"] = set_values

    def on_word_set_tree_click(self, event):
        row_id = self.word_set_tree.identify_row(event.y)
        column_id = self.word_set_tree.identify_column(event.x)
        if not row_id:
            return
        self.word_set_tree.selection_set(row_id)
        self.word_set_tree.focus(row_id)
        if column_id == "#0":
            self.word_set_states[row_id] = not self.word_set_states.get(row_id, False)
            self.render_word_set_tree()
            self.word_set_tree.selection_set(row_id)
            self.word_set_tree.focus(row_id)
            self.word_set_tree.see(row_id)
            return "break"

    def on_word_set_tree_select(self, event=None):
        selection = self.word_set_tree.selection()
        if selection:
            self.word_set_tree.focus(selection[0])

    def on_word_set_tree_double_click(self, event):
        row_id = self.word_set_tree.identify_row(event.y)
        if not row_id:
            return

        if row_id in self.set_list_ids:
            index = self.set_list_ids.index(row_id)
            self.set_listbox.selection_clear(0, "end")
            self.set_listbox.selection_set(index)
            self.set_listbox.see(index)
        self.finish_set_selection(row_id)
        return "break"

    def on_set_word_tree_click(self, event):
        row_id = self.set_word_tree.identify_row(event.y)
        column_id = self.set_word_tree.identify_column(event.x)
        if not row_id:
            return
        self.set_word_tree.selection_set(row_id)
        self.set_word_tree.focus(row_id)
        if column_id == "#0":
            self.set_word_states[row_id] = not self.set_word_states.get(row_id, False)
            self.render_set_word_tree()
            self.set_word_tree.selection_set(row_id)
            self.set_word_tree.focus(row_id)
            self.set_word_tree.see(row_id)
            return "break"

    def on_set_word_tree_select(self, event=None):
        selection = self.set_word_tree.selection()
        if selection:
            self.set_word_tree.focus(selection[0])

    def on_set_word_tree_double_click(self, event):
        row_id = self.set_word_tree.identify_row(event.y)
        if not row_id:
            return

        if row_id in self.word_list_keys:
            index = self.word_list_keys.index(row_id)
            self.word_listbox.selection_clear(0, "end")
            self.word_listbox.selection_set(index)
            self.word_listbox.see(index)
        self.on_word_select_from_key(row_id)
        return "break"

    def on_course_set_tree_double_click(self, event):
        row_id = self.course_set_tree.identify_row(event.y)
        if not row_id:
            return

        if row_id in self.set_list_ids:
            index = self.set_list_ids.index(row_id)
            self.set_listbox.selection_clear(0, "end")
            self.set_listbox.selection_set(index)
            self.set_listbox.see(index)
        self.finish_set_selection(row_id)
        return "break"

    def on_set_word_tree_mousewheel(self, event):
        if hasattr(event, "delta") and event.delta:
            direction = -1 if event.delta > 0 else 1
        elif getattr(event, "num", None) == 4:
            direction = -1
        elif getattr(event, "num", None) == 5:
            direction = 1
        else:
            direction = 0

        if direction:
            self.set_word_tree.yview_scroll(direction, "units")
            return "break"

    def on_word_select(self, event=None):
        selection = self.word_listbox.curselection()
        if not selection:
            return

        word_key = self.word_list_keys[selection[0]]
        self.on_word_select_from_key(word_key)

    def on_word_select_from_key(self, word_key):
        payload = self.dictionary.get(word_key, {})
        self.current_word_key = word_key
        self.center_notebook.select(self.word_tab)

        self.word_vars["key"].set(word_key)
        self.word_vars["pos"].set(payload.get("pos", ""))
        self.word_vars["pron"].set(payload.get("pron", ""))
        self.word_vars["vietnamese"].set(payload.get("vietnamese", ""))
        self.word_vars["cefr"].set(payload.get("cefr", ""))
        for key in ["definition", "example", "vietnamese_example"]:
            self.word_text_fields[key].delete("1.0", "end")
            self.word_text_fields[key].insert("1.0", payload.get(key, ""))

        self.refresh_set_checkboxes()

    def on_set_select(self, event=None):
        selection = self.set_listbox.curselection()
        if not selection:
            return

        set_id = self.set_list_ids[selection[0]]
        self.show_loading("Loading...")
        self.root.after(10, lambda: self.finish_set_selection(set_id))

    def finish_set_selection(self, set_id):
        try:
            s, course = find_set(self.courses, set_id)
            if not s or not course:
                return

            self.current_set_id = set_id
            self.center_notebook.select(self.set_tab)

            self.set_vars["id"].set(s.get("id", ""))
            self.set_vars["title"].set(s.get("title", ""))
            self.set_vars["course_id"].set(course.get("id", ""))

            self.refresh_set_word_checkboxes()
        finally:
            self.hide_loading()

    def on_course_select(self, event=None):
        selection = self.course_listbox.curselection()
        if not selection:
            return

        course_id = self.course_list_ids[selection[0]]
        course = find_course(self.courses, course_id)
        if not course:
            return

        self.current_course_id = course_id
        self.center_notebook.select(self.course_tab)

        self.course_vars["id"].set(course.get("id", ""))
        self.course_vars["title"].set(course.get("title", ""))
        self.course_vars["icon"].set(course.get("icon", ""))
        self.refresh_course_sets_list()

    def clear_word_form(self):
        self.current_word_key = None
        for var in self.word_vars.values():
            var.set("")
        for text in self.word_text_fields.values():
            text.delete("1.0", "end")
        self.word_set_states = {item["id"]: False for item in get_all_sets(self.courses)}
        self.render_word_set_tree()

    def clear_set_form(self):
        self.current_set_id = None
        for var in self.set_vars.values():
            var.set("")
        self.set_word_states = {word: False for word in self.dictionary.keys()}
        self.render_set_word_tree()

    def clear_course_form(self):
        self.current_course_id = None
        for var in self.course_vars.values():
            var.set("")
        self.refresh_course_sets_list()

    def move_set_ui(self, direction: int):
        try:
            if not self.current_set_id:
                raise ValueError("Select a set first.")

            courses_copy = copy.deepcopy(self.courses)
            move_set(courses_copy, self.current_set_id, direction)
            save_data(self.dictionary, courses_copy)
            self.courses = courses_copy
            selected_set_id = self.current_set_id
            self.reload_data()
            if selected_set_id in self.set_list_ids:
                index = self.set_list_ids.index(selected_set_id)
                self.set_listbox.selection_clear(0, "end")
                self.set_listbox.selection_set(index)
                self.set_listbox.see(index)
                self.on_set_select()
        except Exception as e:
            messagebox.showerror("Move Set Error", str(e))

    def move_course_ui(self, direction: int):
        try:
            if not self.current_course_id:
                raise ValueError("Select a course first.")

            courses_copy = copy.deepcopy(self.courses)
            move_course(courses_copy, self.current_course_id, direction)
            save_data(self.dictionary, courses_copy)
            self.courses = courses_copy
            selected_course_id = self.current_course_id
            self.reload_data()
            if selected_course_id in self.course_list_ids:
                index = self.course_list_ids.index(selected_course_id)
                self.course_listbox.selection_clear(0, "end")
                self.course_listbox.selection_set(index)
                self.course_listbox.see(index)
                self.on_course_select()
        except Exception as e:
            messagebox.showerror("Move Course Error", str(e))

    def get_word_payload_from_form(self):
        return {
            "definition": self.word_text_fields["definition"].get("1.0", "end").strip(),
            "pos": self.word_vars["pos"].get().strip(),
            "pron": self.word_vars["pron"].get().strip(),
            "example": self.word_text_fields["example"].get("1.0", "end").strip(),
            "vietnamese": self.word_vars["vietnamese"].get().strip(),
            "vietnamese_example": self.word_text_fields["vietnamese_example"].get("1.0", "end").strip(),
            "cefr": self.word_vars["cefr"].get().strip(),
        }

    def get_selected_set_ids_for_word(self):
        return [set_id for set_id, selected in self.word_set_states.items() if selected]

    def get_selected_words_for_set(self):
        return [word for word, selected in self.set_word_states.items() if selected]

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
