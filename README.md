# Find Your Dresscode — BEM ITS Kabinet Titik Bangkit

Website statis (HTML/CSS/JS, tanpa framework) untuk staff cari dresscode besok berdasarkan nama.

## Cara Deploy ke Vercel

**Opsi 1 — Drag & drop (paling cepat)**
1. Buka https://vercel.com/new
2. Pilih "Deploy" lalu drag folder ini (atau upload sebagai zip lalu extract dulu di komputer)
3. Vercel otomatis detect sebagai static site. Klik Deploy.

**Opsi 2 — Lewat GitHub (recommended kalau mau update terus)**
1. Push folder ini ke repo GitHub baru
2. Buka https://vercel.com/new, pilih "Import Git Repository"
3. Pilih repo-nya, framework preset = "Other", klik Deploy

**Opsi 3 — Vercel CLI**
```bash
npm i -g vercel
cd find-dresscode-bem
vercel
```

## Cara Update Data Staff

Semua data staff & mapping dresscode ada di file `data.js`:

- `STAFF_DATA` = daftar staff (nama, kode divisi)
- `DRESSCODE_MAP` = mapping kode divisi ke nama divisi lengkap + warna dresscode

Kalau ada staff baru / pindah divisi, tinggal edit array `STAFF_DATA` di `data.js`, lalu redeploy (kalau lewat GitHub, cukup push, Vercel auto-redeploy).

## Dresscode saat ini

| Kode | Divisi | Warna |
|---|---|---|
| MEDSI | Multimedia & Informasi | Putih |
| AKSPRO | Aksi & Propaganda | Hitam |
| KP | Kebijakan Publik | Hitam |
| AIK | Advokasi Isu Kampus | Hitam |
| SOSMAS | Sosial Masyarakat | Cream |
| LHK | Lingkungan Hidup & Kebencanaan | Cream |
| DAGRI | Dalam Negeri | Coklat |
| LUGRI | Luar Negeri | Coklat |
| KESMA | Kesejahteraan Mahasiswa | Coklat |
| PSDM | Pengembangan Sumber Daya Mahasiswa | Biru |
| RISTEK | Riset & Teknologi | Biru |

## Struktur File

```
index.html   -> halaman utama
style.css    -> styling
script.js    -> logic search & reveal
data.js      -> data staff + mapping dresscode
vercel.json  -> config vercel
assets/      -> banner header
```
