import tkinter as tk
from tkinter import ttk
import locale

class KalkulatorKodeHarga:
    def __init__(self, root):
        self.root = root
        self.root.title("Kalkulator Kode Harga")
        self.root.geometry("500x400")
        self.root.resizable(False, False)
        
        # Set locale for Indonesian formatting
        try:
            locale.setlocale(locale.LC_ALL, 'id_ID.UTF-8')
        except:
            pass
        
        self.peta = {
            'C': '1', 'I': '2', 'N': '3', 'T': '4', 'A': '5',
            'R': '6', 'O': '7', 'S': '8', 'U': '9', 'L': '0'
        }
        
        self.setup_ui()
    
    def setup_ui(self):
        # Main frame
        main_frame = ttk.Frame(self.root, padding="20")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Title
        title = ttk.Label(main_frame, text="Kalkulator Kode Harga", font=("Arial", 16, "bold"))
        title.pack(pady=10)
        
        # Info
        info = ttk.Label(main_frame, text="CINTAROSUL = 1234567890", font=("Arial", 10))
        info.pack(pady=5)
        
        # Input
        input_frame = ttk.Frame(main_frame)
        input_frame.pack(fill=tk.X, pady=10)
        
        ttk.Label(input_frame, text="Kode:").pack(side=tk.LEFT, padx=5)
        self.input_var = tk.StringVar()
        self.input_var.trace("w", lambda *args: self.konversi())
        input_entry = ttk.Entry(input_frame, textvariable=self.input_var, font=("Arial", 14))
        input_entry.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=5)
        input_entry.focus()
        
        # Result frame
        result_frame = ttk.LabelFrame(main_frame, text="Hasil", padding="20")
        result_frame.pack(fill=tk.BOTH, expand=True, pady=20)
        
        # Result number
        self.angka_var = tk.StringVar(value="-")
        angka_label = ttk.Label(result_frame, textvariable=self.angka_var, font=("Arial", 32, "bold"))
        angka_label.pack(pady=10)
        
        # Result price
        self.harga_var = tk.StringVar(value="-")
        harga_label = ttk.Label(result_frame, textvariable=self.harga_var, font=("Arial", 20, "bold"), foreground="green")
        harga_label.pack(pady=10)
        
        # Info
        note = ttk.Label(main_frame, text="Ketik 2 atau 3 huruf, hasil langsung muncul otomatis.", font=("Arial", 9), foreground="gray")
        note.pack(pady=5)
    
    def konversi(self):
        kode = self.input_var.get().upper()
        hasil = ""
        
        for char in kode:
            if char in self.peta:
                hasil += self.peta[char]
        
        self.angka_var.set(hasil or "-")
        
        if hasil:
            try:
                harga = int(hasil) * 1000
                harga_text = f"Rp {harga:,.0f}"
            except:
                harga_text = "-"
        else:
            harga_text = "-"
        
        self.harga_var.set(harga_text)

if __name__ == "__main__":
    root = tk.Tk()
    app = KalkulatorKodeHarga(root)
    root.mainloop()
