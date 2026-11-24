const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware parsing JSON

// Data in-memory (kembali ke data awal setiap server dijalankan ulang)
let items = [
  { id: 1, nama: "Laptop", harga: 8000000 },
  { id: 2, nama: "Mouse", harga: 150000 }
];
let nextId = 3;

// Validasi input. Mengembalikan pesan galat, atau null jika input benar.
// wajib = true: nama dan harga harus ada (dipakai POST).
function cekInput({ nama, harga }, wajib) {
  if (wajib && (nama === undefined || harga === undefined)) {
    return "nama dan harga wajib diisi";
  }
  if (nama !== undefined && (typeof nama !== "string" || !nama.trim())) {
    return "nama harus berupa teks tidak kosong";
  }
  if (harga !== undefined) {
    const angka = Number(harga);
    if (harga === "" || harga === null || !Number.isFinite(angka) || angka < 0) {
      return "harga harus berupa angka 0 atau lebih";
    }
  }
  return null;
}

// GET semua
app.get("/api/items", (req, res) => {
  res.json({ sukses: true, data: items });
});

// GET by id
app.get("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
  }
  res.json({ sukses: true, data: item });
});

// POST
app.post("/api/items", (req, res) => {
  const galat = cekInput(req.body, true);
  if (galat) {
    return res.status(400).json({ sukses: false, pesan: galat });
  }
  const { nama, harga } = req.body;
  const baru = { id: nextId++, nama: nama.trim(), harga: Number(harga) };
  items.push(baru);
  res.status(201).json({ sukses: true, data: baru });
});

// PUT
app.put("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
  }
  const galat = cekInput(req.body, false);
  if (galat) {
    return res.status(400).json({ sukses: false, pesan: galat });
  }
  const { nama, harga } = req.body;
  if (nama !== undefined) item.nama = nama.trim();
  if (harga !== undefined) item.harga = Number(harga);
  res.json({ sukses: true, data: item });
});

// DELETE
app.delete("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = items.some(i => i.id === id);
  if (!exists) {
    return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
  }
  items = items.filter(i => i.id !== id);
  res.json({ sukses: true, pesan: "Item berhasil dihapus" });
});

// Rute yang tidak ada -> 404
app.use((req, res) => {
  res.status(404).json({ sukses: false, pesan: "Rute tidak ditemukan" });
});

// Penanganan error (mis. body JSON rusak -> 400, selain itu -> 500)
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ sukses: false, pesan: "Body JSON tidak valid" });
  }
  console.error(err);
  res.status(500).json({ sukses: false, pesan: "Terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
