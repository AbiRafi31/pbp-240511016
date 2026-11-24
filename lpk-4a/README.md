# LKP 4A – RESTful API Sederhana dengan Express

Nama: Abi Rafi Firdaus Al Ghozali — NIM: 240511016

CRUD sederhana untuk resource `items` dengan data in-memory (array). Data kembali ke kondisi awal setiap server dijalankan ulang.

## Menjalankan
```bash
npm install
npm run dev     # dengan nodemon
# atau
npm start
```
Server berjalan di http://localhost:3000

## Endpoint

| Method | URL | Body (JSON) | Status code |
|---|---|---|---|
| GET | `/api/items` | – | 200 |
| GET | `/api/items/:id` | – | 200, 404 |
| POST | `/api/items` | `nama` (teks), `harga` (angka ≥ 0) – keduanya wajib | 201, 400 |
| PUT | `/api/items/:id` | `nama` dan/atau `harga` | 200, 400, 404 |
| DELETE | `/api/items/:id` | – | 200, 404 |

Rute lain dibalas 404. Body JSON yang rusak dibalas 400.

### Format respons
```json
{ "sukses": true, "data": { "id": 3, "nama": "Keyboard", "harga": 300000 } }
```
```json
{ "sukses": false, "pesan": "Item tidak ditemukan" }
```

### Contoh request
```text
POST http://localhost:3000/api/items
Content-Type: application/json

{ "nama": "Keyboard", "harga": 300000 }
```

### Validasi
- `nama` harus teks tidak kosong.
- `harga` harus angka 0 atau lebih.
- Pelanggaran dibalas `400` dengan pesan yang menjelaskan kesalahan.

## Bukti pengujian
Folder `screenshots/` berisi hasil pengujian: GET semua (200), GET by id (200), POST (201), PUT (200), DELETE (200), GET id tidak ada (404), dan POST input salah (400).
