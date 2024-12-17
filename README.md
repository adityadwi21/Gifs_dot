# React GIF Search App (Next.js)

Aplikasi React sederhana yang dibuat menggunakan Next.js yang memungkinkan pengguna mencari GIF dari API Giphy. Aplikasi ini mencakup halaman login, dasbor dengan fungsi pencarian GIF, dan autentikasi dasar menggunakan `localStorage`.

## Fitur
- **Login Form**: Pengguna dapat login menggunakan email dan password.
- **Dashboard**: Setelah login, pengguna dapat mencari GIF menggunakan Giphy API.
- **Search GIFs**: Pengguna dapat mencari GIFs berdasarkan kata kunci dan menampilkan hasil pencarian.
- **Logout**: Pengguna dapat keluar dari aplikasi dan kembali ke halaman login.

## Teknologi yang Digunakan
- **React.js** - Untuk pengembangan komponen UI.
- **Next.js** - Untuk server-side rendering dan routing.
- **CSS Modules** - Untuk styling komponen.
- **Giphy API** - Untuk pencarian GIFs.

## Prasyarat
- Node.js (LTS version)
- npm atau yarn sebagai package manager

## Cara Instalasi

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/adityadwi21/Gifs_dot.git
   ```

2. **Masuk ke direktori proyek**:
   ```bash
   cd your-repo-name
   ```

3. **Install dependensi**:
   Jika menggunakan npm:
   ```bash
   npm install
   ```
   Jika menggunakan yarn:
   ```bash
   yarn install
   ```

4. **Jalankan aplikasi**:
   ```bash
   npm run dev
   ```
   Atau jika menggunakan yarn:
   ```bash
   yarn dev
   ```

   Aplikasi akan berjalan di `http://localhost:3000`.

## Penggunaan

1. **Login**: Masukkan email dan password untuk login. Setelah berhasil login, Anda akan diarahkan ke halaman dashboard.
   
2. **Dashboard**: Ketik kata kunci di input form untuk mencari GIF. Hasil pencarian akan ditampilkan di bawah form.

3. **Logout**: Klik tombol "Logout" di halaman dashboard untuk keluar dan kembali ke halaman login.

## Catatan
- Giphy API Key digunakan di aplikasi ini untuk mengakses data GIF. Pastikan untuk mengganti API key nya.
