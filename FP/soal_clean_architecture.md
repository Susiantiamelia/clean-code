Anda diminta untuk mengimplementasikan aplikasi penjadwalan kegiatan dengan menggunakan arsitektur **Clean Architecture**. Fokuskan pada pemisahan logika bisnis, penggunaan use case, entitas, serta adapter yang menangani komunikasi dengan framework (seperti server HTTP).

Kebutuhan Aplikasi:

- Aplikasi harus bisa menambah, mengedit, menghapus, dan menandai kegiatan sebagai selesai.
    Setiap kegiatan memiliki:
      - ID (dibuat otomatis)
      - Judul kegiatan
      - Tanggal kegiatan
      - Status (apakah kegiatan sudah selesai atau belum)
- Aplikasi harus memiliki struktur clean architecture, dengan pemisahan pada:
    - Entity Layer: Berisi entitas domain bisnis, seperti kegiatan (Activity).
    - Use Case Layer: Berisi logika aplikasi untuk menambah, mengedit, menghapus, dan menandai kegiatan.
    - Adapters Layer: Berisi controllers untuk menangani input dari framework (misalnya REST API) dan repositories untuk menyimpan data.
    - Framework Layer: Menyediakan server HTTP untuk menerima permintaan dari klien (gunakan Express.js).

Fitur yang Harus Diimplementasikan:
- **Menambah Kegiatan**:

  Fungsi ini menerima input judul dan tanggal kegiatan.
  Jika input tidak valid (judul atau tanggal kosong), tampilkan error.

- **Mengedit Kegiatan**:

  Fungsi ini menerima ID kegiatan yang ingin diubah, beserta judul dan/atau tanggal baru.
  Jika ID kegiatan tidak ditemukan, tampilkan pesan error.

- **Menghapus Kegiatan**:

  Fungsi ini menerima ID kegiatan yang ingin dihapus.
  Jika ID kegiatan tidak ditemukan, tampilkan pesan error.

- **Menandai Kegiatan Sebagai Selesai**:

  Fungsi ini menerima ID kegiatan yang ingin ditandai selesai.
  Jika ID kegiatan tidak ditemukan, tampilkan pesan error.
  
- **Log Aktivitas**:

  Setiap kali kegiatan ditambah, diedit, dihapus, atau ditandai selesai, tampilkan pesan di log.
