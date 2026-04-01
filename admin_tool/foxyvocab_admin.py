import tkinter as tk
from ui import FoxyVocabAdminApp


def main():
    root = tk.Tk()
    app = FoxyVocabAdminApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()