# 18 \_ React Testing

```
Nama  : David Nasrulloh
Email : davidkrb52@gmail.com
Univ  : Universitas Trunojoyo Madura
Prodi : Sistem Informasi
```

---

Dalam materi ini, mempelajari:

- Apa itu testing
- Pertimbangan Memilih Tools
- Rekomendasi Tools
- Rendering Koponen
- Memilih Element
- Handle Event
- Handle Asynchronous
- Library yang digunakan
- Implementasi

---

## Resume

---

##### Apa itu testing

Testing adalah proses memverifikasi bahwa test assetions kita benar dan bahwa code kita benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

##### Manfaat Testing

Walaupun menambahkan waktu dan code dalam membuat testing, testing memiliki manfaat sebagai berikut:

- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

##### Kategori Testing

Secara umum cara mengetes di React terbagi meniadi dua kategori:

1. Rendering component trees di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
2. Menjalankan aplikasi Iengkap di dalam environment peramban (browser) asli. In' dikenal sebagai tes "end-to-end".

##### Pertimbangan memilih perkakas Kecepatan iterasi vs environment yang realistis

Beberapa kakas menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lain mungkin menggunakan environment peramban yang asli, tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.

##### Seberapa Banyak Mock

Dengan komponen, perbedaan antara tes "unit" dan tes "integrasi" bisa tidak sesuai. Jika kita mengetes sebuah form, haruskah tes yang dilakukan juga menguji tombol yang ada di dalamnya? Atau haruskah komponen memiliki rangkaian tes sendiri? Haruskah refactoring pada tombol merusak tes pada form?
Pertimbangan pemilihan perkakas untuk testing tentu saja dikembalikan kepada kebutuhan masing-masing.

##### Rekomendasi Tools

1. Jest
   Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui Jsdom. Sementara Jsdom hanyalah perkiraan cara kerja browser, seringkali cukup balk mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang diJalankan.
   2.React Testing Library
   Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara "dangkal" pada sebuah komponen tanpa anak, test runner seperti Jest yang memungkinkan kita melakukan mocking.
2. Install
   Jika kita menginstall React menggunakan create-react-app, Jest (dan React Testing Library) akan secara default sudah terinstall. Tetapi Jika kita, menggunakan custom React setup, kita perlu menginstall dan men set up Jest (dan React Testing Library).

##### Rendering Komponen (Render dan Debug)

Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.
React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

##### Memilih Elemen

React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL.
Salah satu contohnya ialah getByText untuk memilih teks dari elemen yang sudah dipilih.

##### Kategori Testing

Contoh lain yang bisa digunakan.

- LabelText: getByLabelText: <label for="search" I>
- PlaceholderText: getByPlaceholderText: <input placeholder="Search" I>
- AltText: getByAltText: <img alt="profile" I>
- DisplayValue: getByDisplayValue: <input value="JavaScript" I>

##### Handle Asynchronous

Untuk Kasus Apa? Ini digunakan ketika hendak mengetes fetch sebuah API. Pada kasus ini kita perlu membuat mock untuk axios (atau yang lain). Selanjutnya kita perlu membuat mock promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.

##### Library yang digunakan

Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.

```
npm install -D @testing-library/react-hooks

Dokumentasi React Hooks Testing Library
https://react-hooks-testing-library.com/
```

---

### output praktikum:

##### Tampilan FormCoding.test.js

![file1](./screenshots/prak1.png)

##### Tampilan Home.test.js

![file2](./screenshots/prak2.png)

##### Tampilan Search.test.js

![file3](./screenshots/prak3.png)

##### Hasil Testing

![file4](./screenshots/prak4.png)

---

12 Oktober 2022 | David Nasrulloh
