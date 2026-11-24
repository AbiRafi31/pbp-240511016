# Laporan Praktikum 3 — Responsive Design

**Nama:** Abi Rafi
**NIM:** [isi NIM]
**Kelas:** [isi kelas]

## 1. Tujuan
Menerapkan teknik responsive design pada halaman profil pribadi.

## 2. Teknik yang Digunakan
1. **Meta viewport** — `width=device-width, initial-scale=1.0`
2. **Fluid typography** — `clamp()` untuk h1, h2, body, small
3. **Unit relatif** — `rem`, `em`, `%`, `vw`, `vh`
4. **CSS Grid auto-fit & minmax** — kartu keahlian & kontak
5. **Flexbox** — navbar, social links, contact item
6. **Media queries mobile-first** — 768px, 1024px, 360px, landscape
7. **Touch target ≥ 44px** — tombol sosial
8. **`prefers-reduced-motion`** — aksesibilitas animasi
9. **`hover: hover`** — hover hanya di perangkat pointer presisi
10. **`loading="lazy"`** — optimasi gambar

## 3. Breakpoint yang Diuji
| Perangkat | Lebar Layar | Hasil |
|---|---|---|
| Mobile (iPhone SE) | 375 × 667 | ✅ 1 kolom kartu, nav wrap |
| Mobile besar (Pixel) | 412 × 915 | ✅ 1 kolom kartu |
| Tablet (iPad) | 768 × 1024 | ✅ 2 kolom kartu |
| Desktop | 1366 × 768 | ✅ 4 kolom kartu |
| Layar kecil | 360 × 640 | ✅ layout tetap rapi |

## 4. Screenshot
- `screenshots/mobile.png`
- `screenshots/tablet.png`
- `screenshots/desktop.png`

## 5. Kesimpulan
Halaman profil kini responsif di semua ukuran layar, menggunakan pendekatan
mobile-first, unit fleksibel, dan aksesibilitas yang lebih baik.
