Kamu diminta untuk mengimplementasikan sebuah aplikasi sederhana untuk penjadwalan kegiatan (activity scheduler) dengan menerapkan prinsip clean code. Pastikan kode yang kamu tulis mudah dipahami, modular, dan mengikuti prinsip clean code seperti **Single Responsibility Principle (SRP)** dan **DRY (Don't Repeat Yourself)**.

Kebutuhan Aplikasi:

Aplikasi harus bisa menambah, mengedit, menghapus, dan menandai kegiatan sebagai selesai.
Setiap kegiatan memiliki:

    - ID (dibuat otomatis)
    - Judul kegiatan
    - Tanggal kegiatan
    - Status (apakah kegiatan sudah selesai atau belum)
    - Pastikan aplikasi memberikan pesan log setiap kali ada perubahan pada data kegiatan.

Fitur yang Harus Diimplementasikan:
- Menambah Kegiatan:

  Fungsi ini menerima input judul dan tanggal kegiatan.
  Jika input tidak valid (judul atau tanggal kosong), tampilkan error.
  
- Mengedit Kegiatan:

  Fungsi ini menerima ID kegiatan yang ingin diubah, beserta judul dan/atau tanggal baru.
  Jika ID kegiatan tidak ditemukan, tampilkan pesan error.
  
- Menghapus Kegiatan:

  Fungsi ini menerima ID kegiatan yang ingin dihapus.
  Jika ID kegiatan tidak ditemukan, tampilkan pesan error.
  
- Menandai Kegiatan Sebagai Selesai:

  Fungsi ini menerima ID kegiatan yang ingin ditandai selesai.
  Jika ID kegiatan tidak ditemukan, tampilkan pesan error.
  
- Log Aktivitas:

Setiap kali kegiatan ditambah, diedit, dihapus, atau ditandai selesai, tampilkan pesan di log (misalnya: "Kegiatan 'Meeting' ditambahkan").
