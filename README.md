# Belajar Fundamental Aplikasi Web dengan React
Pelajari penerapan validasi props, client routing, transaksi RESTful API, hingga React Hooks sebagai fondasi dalam membangun aplikasi React.

Kembangkan aplikasi catatan pribadi dengan kriteria berikut ini.

### Kriteria Utama 1: Memanfaatkan RESTful API sebagai sumber data
Aplikasi harus memanfaatkan RESTful API sebagai sumber data dengan detail berikut.

- RESTful API yang digunakan adalah https://notes-api.dicoding.dev/v1. Dokumentasi API bisa Anda akses pada tautan tersebut.
- Harus menggunakan RESTful API sebagai sumber data dalam berbagai fitur di aplikasi catatan, seperti:
  - registrasi dan autentikasi,
  - daftar catatan,
  - daftar catatan terarsip (opsional),
  - detil catatan,
  - arsip/batal arsip catatan (opsional), dan
  - hapus catatan.
- Karena kelas ini fokus membahas React, bukan penggunaan Fetch API, kami telah menyediakan fungsi dalam bertransaksi dengan API. Anda bisa melihatnya pada bilah Referensi.

### Kriteria Utama 2: Registrasi dan Autentikasi Pengguna
Aplikasi memiliki fitur registrasi dan autentikasi (login) pengguna dengan detail berikut.

- Membuat halaman baru untuk registrasi pengguna dengan input:
  - nama,
  - email,
  - password, dan
  - confirm password (opsional)
- Membuat halaman baru untuk autentikasi (login) pengguna dengan input email dan password.
- Menyimpan access token dari proses autentikasi di local storage (Anda bisa gunakan fungsi yang telah kami sediakan).
- Simpan data pengguna yang terautentikasi pada komponen state untuk mengetahui pengguna telah terautentikasi atau belum.
- Menyediakan tombol logout (keluar aplikasi) untuk menghapus autentikasi pengguna yang tersimpan.

### Kriteria Utama 3: Memproteksi Fitur Catatan
Fitur catatan hanya dapat diakses oleh pengguna yang telah terautentikasi. Berikut detailnya.

- Fitur catatan seperti daftar catatan, detail catatan, dan hapus catatan hanya dapat diakses bila pengguna telah melakukan autentikasi. Bila belum, pengguna hanya dapat mengakses halaman login atau registrasi saja.
- Menampilkan resource catatan yang hanya dimiliki oleh pengguna yang terautentikasi.

### Kriteria Utama 4: Ubah Tema
Aplikasi harus memiliki fitur ubah tema. Berikut detailnya:

- Menyediakan tombol untuk mengubah tema gelap/terang.
- Memanfaatkan React Context dalam membangun fitur ubah tema.
- Menyimpan perubahan tema ke local storage agar perubahannya persisten.

### Kriteria Utama 5: Menggunakan Hooks
Aplikasi menerapkan Hooks setidaknya untuk fitur/kode baru. Berikut detailnya:

- Menerapkan Hooks dalam pengelolaan state setidaknya untuk fitur/kode pada halaman registrasi dan autentikasi pengguna.

### Kriteria Utama 6: Memenuhi seluruh kriteria utama submission sebelumnya
Aplikasi harus dapat mempertahankan kriteria utama dari submission sebelumnya. Berikut detailnya.

- Minimal terdapat 2 halaman yang berbeda.
- Daftar catatan.
- Detail catatan.
- Menambahkan catatan baru.
- Menghapus catatan.
- Memvalidasi properti.

Selain kriteria utama, terdapat kriteria opsional yang yang dapat Anda penuhi agar mendapat nilai yang lebih tinggi.

### Kriteria Opsional 1: Menampilkan indikasi loading
Berikut detailnya:

- Aplikasi harus menampilkan indikasi loading ketika memuat data dari RESTful API sedang berlangsung.
- Indikasi loading bisa apa pun, yang penting tidak mengganggu pengalaman pengguna. Gunakanlah kreativitas Anda.

### Kriteria Opsional 2: Fitur ubah bahasa
Aplikasi harus memiliki fitur ubah bahasa. Berikut detailnya:

- Menyediakan tombol untuk mengubah bahasa Indonesia ke Inggris, atau sebaliknya.
- Memanfaatkan React Context dalam membangun fitur ubah bahasa.
- Menyimpan perubahan bahasa ke local storage agar perubahannya persisten.
