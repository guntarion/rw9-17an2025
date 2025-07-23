# Konsep Website: Semarak Kemerdekaan RW IX Rewwin 2025

Dokumen ini menguraikan konsep, struktur, fitur, dan desain untuk website resmi perayaan HUT Kemerdekaan RI ke-80 di lingkungan RW IX, Perumahan Rewwin, Sidoarjo.

Platform: Next.js

Tema Utama: Lingkungan Hidup dan Penghijauan

Panitia Pelaksana: RT 11 didukung oleh Pengurus RW IX

### 1. Filosofi & Tujuan Desain

Website ini bertujuan menjadi pusat informasi, media publikasi, dan kenang-kenangan digital bagi seluruh warga RW IX.

- **Nama Domain/Judul Website (Saran):** `rewwinmerdeka.id` atau `semarakrewix.com`
- **Palet Warna:** Mengambil inspirasi dari tema "Lingkungan Hidup" dan bendera Merah Putih.
  - **Primer:** Hijau daun (`#4CAF50`), Hijau tua (`#2E7D32`)
  - **Sekunder:** Putih (`#FFFFFF`), Krem/Warna kertas daur ulang (`#F5F5DC`)
  - **Aksen:** Merah (`#E53935`) untuk elemen penting seperti countdown atau notifikasi.
- **Tipografi:**
  - **Judul:** Font yang tegas namun ramah, contoh: "Poppins" atau "Montserrat".
  - **Isi Teks:** Font yang sangat mudah dibaca, contoh: "Inter" atau "Lato".
- **Nuansa Umum:** Bersih, modern, informatif, dan penuh semangat kebersamaan. Menggunakan ikon-ikon bertema lingkungan (daun, tunas, ikon daur ulang) untuk memperkuat visual.

### 2. Struktur Website (Sitemap)

Berikut adalah struktur halaman yang direkomendasikan untuk navigasi yang jelas dan mudah.

1. **Beranda (Home Page)**
   - Halaman utama yang paling strategis. Menampilkan ringkasan dari semua informasi penting.
2. **Jadwal & Acara**
   - Halaman detail yang memuat semua informasi tentang lomba dan kegiatan.
3. **Galeri Kemerdekaan**
   - Fitur "Instagram-like" untuk memajang foto-foto kegiatan.
4. **Panitia Pelaksana**
   - Halaman khusus untuk memperkenalkan tim panitia dari RT 11 dan pengurus RW IX.
5. **FAQ (Tanya Jawab)**
   - Berisi jawaban atas pertanyaan-pertanyaan yang sering muncul dari warga.

### 3. Rincian Konten Setiap Halaman

#### **Halaman 1: Beranda**

Ini adalah "wajah" dari website. Tujuannya adalah menangkap perhatian pengunjung dan mengarahkan mereka ke informasi yang paling relevan.

- **Bagian Atas (Hero Section):**
  - Judul besar: "Semarak Kemerdekaan RI ke-80 RW IX Rewwin!"
  - Sub-judul: "Dengan Semangat Penghijauan, Kita Bangun Lingkungan yang Asri dan Guyub."
  - **COUNTDOWN TIMER:** Tampilan live countdown menuju **30 Agustus 2025, Pukul 07:00 WIB**.
- **Highlight Acara Puncak (Dibawah Countdown):**
  - Sebuah _card_ khusus yang menonjolkan jadwal **Malam Puncak & Panggung Hiburan (31 Agustus 2025)**.
  - Menampilkan info: Penampilan Angklung PKK, Pentas Seni dari tiap RT, dan **DOORPRIZE UTAMA**.
- **Ringkasan Lomba (Grid 4 Kolom):**
  - Setiap kolom merepresentasikan satu lomba dengan ikon unik:
    1. **Hias Kampung:** Ikon rumah & daun.
    2. **Bulu Tangkis Keluarga:** Ikon shuttlecock.
    3. **Jalan Sehat:** Ikon jejak kaki.
    4. **Bazar Kreatif:** Ikon tenda/toko.
  - Setiap kolom berisi judul lomba, tanggal penting, dan tombol "Lihat Detail" yang mengarah ke halaman **Jadwal & Acara**.
- **Galeri Terbaru (Pratinjau):**
  - Menampilkan 6-8 foto terbaru dari halaman Galeri untuk menunjukkan aktivitas terkini (misal: foto rapat panitia, persiapan hias kampung).
- **Sambutan Singkat:**
  - Foto dan kutipan singkat dari Ketua RW IX dan Ketua Panitia (Ketua RT 11).

#### **Halaman 2: Jadwal & Acara**

Halaman ini berfungsi sebagai buku panduan digital.

- **Struktur:** Gunakan format _accordion_ atau tab, di mana setiap tab mewakili satu lomba.
- **Konten Setiap Lomba:**
  - **Lomba Hias Kampung:**
    - **Koordinator:** H. Suleman
    - **Tema:** Lingkungan Hidup
    - **Periode Lomba:** 1 Juli - 24 Agustus 2025
    - **Kriteria Penilaian:** Penghijauan, Kebersihan, Kreativitas Hiasan.
    - **Catatan:** "Juri berasal dari luar lingkungan RW IX untuk menjaga objektivitas."
  - **Lomba Bulu Tangkis Keluarga:**
    - **Koordinator:** Bpk. Yusri
    - **Jadwal:** Malam Sabtu & Minggu (detail menyusul).
    - **Konsep:** Bukan mencari prestasi, tapi kemeriahan dan kekompakan.
    - **Kriteria Penilaian:** Skor Pertandingan, Kostum Unik, Sportivitas Suporter.
    - **Aturan Khusus:** "Peserta adalah pasangan campuran (pria & wanita) dari satu keluarga."
  - **Parade Jalan Sehat:**
    - **Koordinator:** dr. Edi Subagyo
    - **Hari-H:** 30 Agustus 2025
    - **Tema Kostum:** Lingkungan Hidup (diperbolehkan kombinasi dengan kaos tim RT).
    - **Kriteria Penilaian:** Kekompakan, Keserasian, Kreativitas Kostum, Spanduk/Yel-yel.
  - **Lomba Bazar:**
    - **Koordinator:** Ibu Titik W. P.
    - **Hari-H:** 30 - 31 Agustus 2025
    - **Kriteria Penilaian:** Edukasi Lingkungan Hidup, Kreativitas Dekorasi Stand, Kostum Penjaga.

#### **Halaman 3: Galeri Kemerdekaan**

Mirip feed Instagram sederhana, fokus pada visual.

- **Layout:** Grid foto responsif (kotak-kotak).
- **Fitur:**
  - Saat foto di-klik, akan muncul _popup/modal_ dengan gambar lebih besar beserta **caption** singkat.
  - Panitia bisa mengunggah foto dan menulis caption melalui sistem pengelolaan konten (CMS).
- **Filter/Kategori (Penting untuk Organisasi):**
  - `Semua Foto`
  - `Pra-Acara (Rapat & Persiapan)`
  - `Lomba Hias Kampung`
  - `Lomba Bulu Tangkis`
  - `Jalan Sehat`
  - `Bazar`
  - `Panggung Hiburan`

#### **Halaman 4: Panitia Pelaksana**

Menunjukkan apresiasi dan transparansi.

- **Judul:** "Tim Sukses di Balik Layar"
- **Bagian 1: Panitia Inti (RT 11):**
  - Tampilkan foto (jika ada), nama, dan jabatan (Ketua, Sekretaris, Bendahara, Koordinator Lomba).
  - Tuliskan narasi singkat: "Sebagai panitia pelaksana HUT RI ke-80, kami dari RT 11 berkomitmen untuk menyelenggarakan acara yang meriah, bermakna, dan guyub bagi seluruh warga RW IX."
- **Bagian 2: Pengurus RW IX:**
  - Tampilkan foto dan nama Ketua RW IX beserta jajarannya sebagai pendukung dan penasihat acara.

#### **Halaman 5: FAQ (Tanya Jawab)**

Mengurangi pertanyaan berulang via WhatsApp.

- **Contoh Pertanyaan (berdasarkan notulen & antisipasi):**

  - Q: Bagaimana aturan kostum untuk Jalan Sehat?

    A: Sesuai tema Lingkungan Hidup. Boleh dikreasikan dengan kostum/kaos seragam per RT. Utamakan kreativitas dan kekompakan!

  - Q: Siapa saja yang boleh ikut Lomba Bulu Tangkis Keluarga?

    A: Peserta adalah pasangan campuran (pria & wanita) yang berasal dari satu keluarga (misal: suami-istri, ayah-anak perempuan, dll) dan merupakan warga RT setempat.

  - Q: Di mana lokasi panggung hiburan dan bazar?

    A: (Isi dengan lokasi, misal: "Area Fasum depan Balai RW IX").

  - Q: Bagaimana cara mendaftarkan tim untuk lomba?

    A: Pendaftaran kolektif melalui Ketua RT masing-masing. Ketua RT akan berkoordinasi langsung dengan koordinator lomba.

  - Q: Apakah ada biaya pendaftaran?

    A: Tidak ada biaya pendaftaran per individu. Semua didanai secara kolektif melalui kas RT dan sponsor.

### 4. Fitur Teknis & Pengembangan (Untuk Developer)

- **Content Management System (CMS):**
  - Untuk memudahkan panitia (khususnya tim dokumentasi) mengunggah foto ke Galeri dan mengupdate pengumuman.
  - **Rekomendasi:** Gunakan _headless CMS_ seperti **Strapi** atau **Sanity.io**. Ini sangat cocok dengan Next.js. Opsi yang lebih sederhana adalah menggunakan **Google Sheets sebagai database** jika panitia lebih familiar dengannya.
- **Responsif (Mobile-First):**
  - Desain wajib dioptimalkan untuk tampilan di HP, karena mayoritas warga akan mengakses dari perangkat mobile.
- **Deployment:**
  - Gunakan platform seperti **Vercel** atau **Netlify** yang memiliki integrasi sempurna dengan Next.js dan gratis untuk proyek skala kecil.
- **Fase 2: Sistem Skoring Juri (Menyusul):**
  - Buat halaman terpisah yang dilindungi password (`/login-juri`).
  - Setelah login, juri akan melihat form untuk memasukkan skor per RT/peserta sesuai kriteria lomba.
  - Data dikirim ke database, dan halaman rekap (juga terproteksi) akan menampilkan total skor secara _real-time_.

Semoga konsep ini memberikan gambaran yang jelas dan komprehensif. Ini adalah fondasi yang kuat untuk membangun website yang tidak hanya fungsional tapi juga menjadi kebanggaan warga RW IX Rewwin.
