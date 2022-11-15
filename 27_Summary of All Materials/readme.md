Nama : David Nasrulloh
Email : davidkrb52@gmail.com
Univ : Universitas Trunojoyo Madura
Prodi : Sistem Informasi

```

---

Dalam materi ini, mempelajari:

- Apa yang dimaksud dengan git versioning
- Setting git
- Saving changes (Git status, add, commit, diff, stash, ignore)
- Git log checkout dan reset
- Syncing (Remote, Fetch, Push dan Pull)
- Belajar mengenai branch
- Pull Request
- Serta penjelasan mengenai collaboration

---

## Resume

---

##### Apa yang dimaksud dengan versioning ?

mengatur versi dari source code program

##### Apa itu Git ?

Salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-bersama

##### Hal yang harus diperhatikan ketika Collaboration

The best way nya untuk susunan branch adalah

1. Master (hanya untuk production)
2. Branch develop (ketika development)
3. Dari develop buat branch baru seperti fitur a
4. Dari develop buat branch baru seperti fitur b

##### Code git yang penting untuk diingat

Salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-bersama

###### GIT INIT, CLONE, CONFIG

```

# git config

$ git config --global user.name “John Done”
$ git config --global user.email “johndoe@email.com”

# start with init

$ git init
$ git remote add <remote_name> <remote_repo_url>$ git push -u <remote_name> <local_branch_name>

# start with existing project, start working on the project

$ git clone ssh://john@example.com/path/to/my-project.git
$ cd my-project

```

###### GIT DIFF AND STASH

```

# git diff

# change file

# add staging area

$ git diff --staged

# stashing your work

$ git stash

# re-applying your stashed changes

$ git stash apply

```

###### GIT LOG, CHECKOUT

```

# viewing an old revision

$ git log --oneline

# b7119f2 Continue doing crazy things

# 872fa7e Try something crazy

# a1e8fb5 Make some important changes to hello.txt

$ git checkout a1e8fb5

```

###### GIT PUSH, FETCH & PULL

```

# git remote

$ git remote -v
$ git remote add origin http://dev.example.com/john.git

# fetch and pull

$ git fetch
$ git pull origin master

# push

$ git push origin master
$ git push origin feature/login-user

```

###### GIT BRANCHING

```

# show all branch

$ git branch --list

# create a new branch called <branch>

$ git branch <branch>

# force delete the specified branch

$ git branch -D <branch>

# list remote branch

$ git branch -a

```

###### GIT MERGE

```

# Start a new feature

$ git checkout -b new-feature master

# Edit some files

$ git add <file>
$ git commit -m "Start a feature"

# Edit some files

$ git add <file>
$ git commit -m "Finish a feature"

# Merge in the new-feature branch

$ git checkout master
$ git merge new-feature
$ git branch -d new-feature

```

---
- Introduction Figma
- How to Web Design with Figma
- How to Set Up a Frame and a Simple Grid in Figma
- How to Save a Color Style in Figma
- How to Import Photos in Figma
- How to Add Auto Layouts in Figma
- How to Create Components in Figma
- How to Create Scrolling Elements in Figma
- How to Create Fixed Elements in Figma
- How to Create Hover States in Figma
- How to Add Overlays in Figma
- How to Prototype in Figma

---

## Resume

---

##### Apa itu Figma ?

Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.

##### Keuntungan

- It’s free!!! (for up to two users and three projects per account)
- Runs on Mac and PC ( Sketch only on Mac)
- Real-time team collaboration,
- You can import Sketch files (but beware, you cannot export to Sketch!)
- Integrated Developers hand-off/Specs for Mac and PC 🥳
- Fantastic Team library/Design Systems, a single source of truth
- Integrated high-quality prototyping

##### Kekurangan

- You need to be online to

##### How to start and Whats point ?

```

- Dalam membuat sebuah design maka diperlukanlah sebuah frame dan grid dan layout yang simple
- Memperhatikan penggunaan auto layout menjadi hal yang sangat penting untuk diterapkan dalam proses desain
- Styling color, membuat typrografy dll atau dalam artian membuat sebuah design sistem diharapkan menggunakan proses design athomic (dari partikel yang paling kecil) hal ini bertujuan agar semua dapat terkontrol dan ter maintenance dengan baik
- Penggunaan component dan varian sangat lah penting untuk mempercepat proses pembuatan design dan membuat design yang ada konsisten secara keseluruhan
- Secara keseluruhan proses yang ada untuk pembuatan suatu design UI UX adalah
- 1. Empathize
- 2. Define
- 3. Ideate (incude pencarian moodboard)
- 4. Prototype (include pembuatan design system)
- 5. Testing

```

- Pengertian HTML
- Kegunaan HTML
- HTML Editor
- Struktur halaman pada file HTML
- Elemen dan tag yang ada pada HTML

---

## Resume

---

##### Apa itu HTMl ?

HTML (Hypertext Markup Language) adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web.

##### Kagunaan HTML ?

- Membuat struktur dari halaman website
- Mengatur tampilan dan isi dari halaman web
- Membuat tabel dengan tag HTML table
- Membuat form HTML.
- Membuat gambar dengan canvas
- Membuat gambar dengan canvas
- Mempublikasikan halaman website secara online

##### Struktur utama HTML

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    (ini difungsikan untuk mengisi content)
</body>
</html>
```

##### Catatan penting

```
* tag <div> untuk mengisi content HTML yang dimiliki
* tag heading menggunakan <h1> sampai dengan <h6>
* bisa menggunakan styling pada html seperti
* 1. <strong> membuat text lebih tebal
* 2. <em> penekanan pada text menjadi italic
* 3. <s> membuat text dengan garis tercoret
* 4. <br> line break, untuk membuat garis baru

Pada tag yang ada di html dapat diisikan dengan atribut dan style yang disesuaikan dengan kebutuhan, seperti tag a dapat diisi tag atribut href untuk melinkan ke link yang akan dituju
Contoh tag yang ada pada html
* 1. <a> tag a berfungsi untuk hyperlink
* 2. <img> tag img berfungsi untuk menambahkan gambar kedalam sebuah website
* 3. <ol> list terurut, <ul> list tidak terurut dan didalam kedua tag tersebut terdapat tag <li> list item yang berfungsi untuk mengisikan items yang ada pada tag <ol> dan <ul>
* Catatan : setiap tag memiliki atribut dengan value yang berbeda beda, berbeda kegunaan dan tujuannya

Tag yang ada pada tabel yaitu
* <table> tag yang berfungsi untuk membuat table pada HTML
* <tr> untuk mendeklarasikan setiap baris table
* <td> mendeklarasikan setiap kolom table
* <th> untuk kolom pada table header
```

- Cara menambahkan file CSS
- CSS Selector
- CSS Grouping
- CSS Font
- CSS Margin dan Padding
- CSS Backgroung
- CSS Link Event
- CSS Display
- CSS Table
- CSS Framework (Bootstrap)
- Penjelasan mengenai bootstrap dan penggunaan nya

---

## Resume

---

##### Apa itu CSS dan Frontend Framework? Bootstrap ?

CSS berfungsi untuk memperindah tampilan sebuah website agar lebih menarik dan enak dipandang.
Front End Framework adalah sekumpulan aturan kode ynag bisa kita gunakan untuk mempermudah dalam membuat suatu tampilan website, salah satunya adalah boorstrap.
Alasan menggunakan bootstrap adalah dapat diakses secara gratis, mudah dipelajari, cepat dan mendukung responsif pada website

##### Menambahkan file CSS

3 Cara menambahkan file CSS ke dalam HTML :

```
1. External CSS (membuat file baru bernama CSS)
2. Internal CSS (di dalam tag head dengan membuat tag baru yaitu <style>)
3. Inline CSS (didalam tag html)
```

##### CSS Selector

1. ID -> (#)
2. Class -> (.)

##### CSS Grouping

contoh

```
h1,
h2,
judul,
#nama {
    color: blue;
}
```

##### CSS Font Properties

| Properties  | Penjelasan                                          |
| ----------- | --------------------------------------------------- |
| Font        | Menetapkan semua properti font dalam satu deklarasi |
| Font-family | Menentukan kelompok font teks                       |
| Font-size   | Menentukan ukuran font teks                         |
| Font-weight | Menentukan ketebalan untuk font teks                |
| Font-style  | Menentukan font teks menjadi miring                 |

##### CSS Margin dan Padding

Contoh CSS margin dan padding

```
header {
    padding: 4px 24px;
    margin: 20px;
}
```

##### Background

| Properties          | Penjelasan                                     |
| ------------------- | ---------------------------------------------- |
| Background-color    | Menetapkan warna background pada suatu elemen  |
| Background-image    | Menentukan gambar background pada suatu elemen |
| Background-repeat   | Menentukan gambar background untuk di ulang    |
| Background-size     | Menentukan ukuran gambar untuk background      |
| Background-position | Mengatur posisi awal gambar background         |

contoh

```
.judul {
    background-image: url(../img/sample-pattern.png);
    background-position: right top;
    background-repeat: no-repeat;
    background-color: #red;
    background-size: 100%;
}
```

##### CSS Link Event

| Properties | Penjelasan                                            |
| ---------- | ----------------------------------------------------- |
| :hover     | Kondisi style ketika mouse berada diatas elemen       |
| :active    | Style ketika link "a" ditekan                         |
| :visited   | Style dimana elemen link "a" telah dikunjungi di klik |

##### CSS Display

| Properties   | Penjelasan                                                               |
| ------------ | ------------------------------------------------------------------------ |
| block        | Elemen block selalu dimulai pada baris baru (dimulai dari kiri ke kanan) |
| inline-block | Elemen inline-block membutuhkan lebar sesuai yang diperlukan             |
| none         | menyembunyikan elemen untuk tidak ditampilkan                            |

##### CSS Table

| Properties       | Penjelasan                                |
| ---------------- | ----------------------------------------- |
| border           | menambahkan border pada table, th, dan td |
| border-collapse  | membuat border menjadi single border      |
| :nth-child(even) | membuat background stripe                 |

##### Catatan penting

Resource untuk memperdalam HTML dan CSS dasar
Fonts - https://fonts.google.com/
W3School css - https://www.w3schools.com/css/
Box Shadow css - https://www.cssmatic.com/box-shadow
Gradient css - https://www.cssmatic.com/gradient-generator
Color Picker - https://www.w3schools.com/colors/colors_picker.asp

```
# Catatan
Clas dan properti pada framework bootstrap ada pada halaman dokumentasi Bootstrap
https://getbootstrap.com/docs/5.0/getting-started/introduction/
```

- Cara menggunakan framework Bootstrap
- Menerapkan style yang ada pada bootstrap
- Menambahkan icon ke dalam project
- Praktik membuat tugas sederhana seperti pada hasil dibawah

---

## Resume

---

##### Apa itu Framework? Bootstrap ?

Front End Framework adalah sekumpulan aturan kode ynag bisa kita gunakan untuk mempermudah dalam membuat suatu tampilan website, salah satunya adalah boorstrap.
Alasan menggunakan bootstrap adalah dapat diakses secara gratis, mudah dipelajari, cepat dan mendukung responsif pada website

##### Hal hal penting yang harus diperhatikan

- Ketika menggunakan framework bootstrap haruslah memperhatikan dokumentasi yang ada
- Ketika style yang ada pada libray tidak bisa digunakan maka dapat membuat style manual dengan external file css
- Semua komponen sudah tersedia pada bootstrap dengan contoh seperti pada dokumentasi
- Menghubungkan bootstrap dengan project yang dibuat dapat menggunakan beberapa cara, seperti menambahkan file library bootstrap atau menggunkan link cdn
- Walaupun banyak kelebihan dan resource yang disediakan, namun terkadang harus bisa memanipulasi nya sendiri untuk membuat front end sesuai yang di inginkan.

```
# Catatan
Clas dan properti pada framework bootstrap ada pada halaman dokumentasi Bootstrap
https://getbootstrap.com/docs/5.0/getting-started/introduction/
```

- Pengertian Var, Let & Const
- Values & References
- Destructuring
- Method
- Control Flow
- Function
- Async - Await
- Clasess
- DOM

---

## Resume

---

##### Apa itu Declaration ?

proses pembuatan variabel untuk menyimpan data

```
// var
var num1;
console.log(num1);

// let
var num2;
console.log(num2);

// Const
const num3 = 3;
console.log(num3);
```

##### Apa itu Scoping ?

Scoping menentukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel.

```
// Global
var name = 'Bani';
let age = 23;
const isMarried = true;

// Function (Local)
function countAverage() {
    var num1 = 7;
    let num2 = 8;
    const num3 = 9;
}

// Block
if (true) {
    var num1 = 7;
    let num2 = 8;
    const num3 = 9;
    num4 = num1 + num2 + num3;
}
```

##### Apa itu Hoisting ?

Hoisting membuat beberapa jenis variabel atau fungsi dapat diakses / digunakan dalam kode sebelum dideklarasikan

```
b = 7;
var b;
console.log(b)

callMe()

function callMe() {
    console.log('Hello Bro!');
}
```

deklarasi var dan function adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi

##### Apa itu Value & Reference ?

value dan reference ada dua yaitu primitive dan object.
Sebelum dibahas lebih jauh, ada hal yang penting untuk dibahas, yang pertama adalah primitive dalam pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman.
Object adalah unit yang menyimpan properti dan fungsi (method) => {object, array, function, date, set, map, weak set, weak map}

Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam javascript diteruskan oleh nilai.

```
let a = 1;
let b = a;

const ar1 = [1];
const ar2 = [1];

console.log(ar1 === ar2);
console.log(ar1 === [1]);

const ar3 = ar1;

console.log(ar1 === ar3);
console.log(ar1 === ar1);
```

##### Apa itu Destructuring ?

Destructuring adalah ekspresi dari JavaScript yang memungkinkan untuk menyalin nilai dari array, atau properti dari objek, ke dalam variabel yang berbeda.

```
// Array
let a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);

const x = [1, 2, 3. 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);

let a, b;
[a = 5, b = 7] = [1];
console.log(a);
console.log(b);

// Object
const user = {
    id = 42,
    is_verified = true
};
const { id, is_verified } = user;
console.log(id);
console.log(is_verified);
```

##### Apa itu Spread ?

Spread syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar.

```
// Array
let a = [1, 2, 3];
let b = [...a];
console.log(b);
console.log(a === b);

// Object
const a = { p: 1, q: 2 };
let b = [...a];
console.log(b);
```

#### Method pada Array ?

Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing - masing

Contoh beberapa metode dalam array seperti :

##### Concat

Contoh

```
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array.concat(array2);

console.log(array3);
```

##### Map

Contoh

```
const array4 = [1, 4, 9, 16];
const map1 = array.map(x => x * 2);
console.log(map1);
```

##### Foreach

Contoh

```
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
```

##### Slice

Contoh

```
const Hewan = ['Semut', 'Kambing', 'Unta', 'Bebek', 'Gajah'];
console.log(Hewan.slice(2));
```

##### Filter

Contoh

```
const angka = [1, 2, 3, 4, 5, 6];
const result = angka.filter(nomor => nomor > 2);
console.log(result);
```

##### Reduce

Contoh

```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));
```

##### Apa itu Control Flow ?

- normal flow
  pengekseskusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan
- control flow
  mengatur alur eksekusi pada statement atau jalanan program sesuai keinginan kita

> Pengulangan (Loop / Iterasi)
> For, while, Do While

> Penkondisian (Percabangan)
> If...Else, Swith, Block, Try ... Catch, Break, Continue, Throw

##### Apa itu Function?

Function di dalam Javascript adalah sebuah objek. Karena memiliki properti dan juga method
Function digunakan untuk melakukan serangkaian komputasi / Procedur yang dapat digunakan berulang kali

```
//anonymous function expression
var a = function() {
    return 3;
}

//named function expression
var a = function bar() {
    return 3;
}

//self invoking function expression
(function sayHello() {
    alert("hello!");
})();

//Arrow Function
var multiplyES6 = (x, y) => x * y;
console.log(multiplyES6 (2,3));  // 6
```

##### Async - Await

- Synchronous
- Asynchronous
- Callback
- Promise
- Asynchronous Function
- Await

##### Synchronous

Synchronous mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan

##### Asynchronous

Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses

##### Callback

Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau
Callback adalah fungsi yang dieksekusi setelah fungsi lain selesai dijalankan

##### Promise

Promise adalah objek yang mempresentasikan keberhasilan atau kegagalan pada sebuah event yang asyncronous dimasa mendatang
Asynchronous Callback

1. Resolve (Promise terpenuhi) -> .then()
2. Reject (Promise tidak terpenuhi) -> .catch()
3. Finally (Promise proses selesai (optional))
   Asynchronous Function
   Fungsi Ashyncronous sebuah function yang berkerja secara asyncronous yang menghasilkan promise sebagai return value - nya, tetapi cara penulisan code-nya menggunakan penulisan syncronous (standar)

##### Await

Await adalah sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promise-nya selesai.

##### Classes

Hal hal yang penting dalam penerapan Classes, Constructor, Method, Attributes, Extend

```
class Dog extends Animal {
  // Tambahkan constructor
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    // Print 「Saya adalah seekor ____」
    console.log(`Saya adalah seekor ${this.breed}`);

    console.log(`Saya berusia ${this.age} tahun`);
    const humanAge = this.getHumanAge();
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// Tetapkan "Chihuahua" sebagai nilai argument
const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();
```

> Class adalah prototype dari suatu object yang akan kita buat
> Constructor adalah method didalam class yang akan selalu terpanggil pertama kali ketika membuat object
> Method adalah fungsi yang berada didalam class
> Atributes adalah kumpulan variabel yang membentuk objek yang memiliki oleh suatu class
> Extends digunakan untuk membuat kelas anak dari kelas induk. kelas anka mewarisi semua atribut dan metode dari kelas induk.
> DOM adalah adalah API untuk HTML yang mempresentasikan halaman web pada suatu dokumen menjadi sebuah object

Untuk detail dari DOM bisa di cek di website dibawah ini
https://www.w3schools.com/js/js_htmldom.asp

---

- Apa itu Clean Code ?
- Kenapa Clean Code ?
- 9 Karakteristik Clean Code
- KISS
- DRY
- Refactoring

---

## Resume

---

##### Apa itu Clean Code ?

Clean Code adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer

```
"Wroking code isn't neccessary good code. Your code alsi need to be easy to read, understand, and modify"
~ Brandon Gregory

"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
~ Martin Fowler
```

##### Kenapa "Clean Code" ?

Alasan nya adalah :

1. Work Collaboration
2. Feature Development
3. Faster Development

##### Karakteristik Clean Code

```
"There are only two hard things in Computer Science: cache invalidation and naming things"
~ Martin Fowler
```

1. Mudah difahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Good Function
8. Gunakan konvensi example style guide -> (airbnb, google)
9. Formating

##### Saran "Formating"

1. Lebar baris code 80 - 120 karakter
2. Satu class 300 - 500 baris
3. Baris code yang berhubungan saling berdekatan
4. Bekatkan fungsi dengan pemanggilnya
5. Deklarasi variabel berdekatan dengan penggunanya
6. Perhatikan indentasi
7. Menggunakan prettier dan formatter.

##### Clean Code Principle

> KISS = Keep it So Simple

```
Tips untuk selalu KISS
1. Fungsi atau class harus kecil
2. Fungsi dibuat untuk melakukan satu tugas saja
3. Jangan gunakan terlalu banyak argumen pada fungsi
4. Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal
```

> DRY = Dont Repeat Yourself
> Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.

> Refactoring
> Refactoring adalah proses retrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.
> Teknik Refactoring

1. Membuat sebuah abstraksi
2. Memecah kode dengan fungsi / class
3. Perbaiki penamaan dan lokasi kode
4. Deteksi kode yang memiliki duplikasi

- Apa itu Algoritma ?
- karakteristik Algoritma
- Algoritma dasar
- Pseudocode
- Flowchart

---

## Resume

---

##### Apa itu Algoritma

Input => Proses => Outputs
Algoritma adalah prosedur komputasi yang didefenisikan dengan baik yang mengambil beberapa nilai sebagai input dan menghasilkan beberapa nilai sebagai output

##### Contoh Algoritma

- Check Prime Number (pengecekan)
- Sorting (pengurutan)
- Searching (pencarian)

##### Karakteristik Algoritma

- Memiliki batas (Awal dan akhir)
- Instruksi terdefinisi dengan baik
- Efektif dan Efisien

##### Susunan Algoritma Dasar

- Sequential
- Branching
- Looping

##### Susunan Algoritma Dasar

Flowchart adalah suatu bagan dengan simbol tertentu yang menggambarkan urutan dan hubungan antar proses secara mendetail

- Introduction
- Javascript refreshment
- React Fungdamental
- Event Handling
- React hooks
- React routing
- Forms
- Global State Managemen & Data Fetching
- Testing & Deployment

---

## Resume

---

##### Apa itu React ?

- Library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile
- Open source yang di maintain oleh Facebook
- Library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile
- Open source yang di maintain oleh Facebook
- Pada arsitektur MVC (Model – View – Controller), Reactjs hanya akan mengambil peran pada layer View saja.

##### Library dan Framework untuk membuat UI

- Jquery (Library)
- React (Library)
- Angular (Framework)
- Vue (Framework)
- NextJS (Framework)

##### Kenapa menggunakan React

- Deklaratif
- Berbasis Komponen
- Belajar sekali, tulis dimana saja
- Sudah teruji
- Teknologi yang popular

##### Virtual DOM

> Kenapa virtual DOM = DOM manipulation is the heart of the modern interactive web

##### Masalah yang dihadapi dengan DOM manipulation

1. DOM manipulation secara manual dapat membuat code berantakan
2. Sulit untuk mengingat DOM state sebelumnya
3. Jauh lebih lambat daripada operasi javascript pada umumnya

##### Set up Development Environment

- Tools yang diperlukan
- Membuat aplikasi React menggunakan Create App

##### Tools yang diperlukan

- Browser (Google Chrome)
- Text Editor / IDE (Visual Studio Code)
- Command Line Shell (Git bash)
- Apa itu JSX
- Kenapa menggunakan JSX ?
- Jsx Vs React.createElement
- Spesifikasi Jenis Elemen React
- Menaruh Expresion pada JSX
- JSX Adalah Expression
- Menspesiifikasikan Elemen anak dengan JSX
- Apa itu Component ?
- Membagi UI menjadi beberapa komponen
- Function and class component
- Membuat dan Merender component
- Apa itu props ?
- One Way data flow pada react
- Komposisi komponen
- Render Bersyarat
- Render List
- Key
- Class dan CSS
- Atribut style
- Modul CSS

---

## Resume

---

##### Apa itu JSX ?

Singakatan dari Javascript JSX, Extensi pada Javascript

```
const element = <h1>Hello, World!</h1>
```

##### Kenapa menggunakan JSX ?

- JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
  Separation of TechnoloJSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
  > Separation of Technology -> Separation of Concerns

##### JSX vs React.createElement

- Kita tidak harus menggunakan JSX, tapi JSX memudahkan kita menulis aplikasi React
- Syntactic Sugar dari fungsi

```
React.createElement(component, prop, ...children)
```

##### Spesifikasi jenis Element React

- Kapitalisasi untuk komponen React
- Huruf kecil (lowercase) untuk komponen bawaan

##### Menaruh expression pada JSX

- Kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal.

##### JSX adalah expression

##### Menentukan atribut dengan JSX

- Tanda kutip untuk menentukan string literal
- Kurung kurawal untuk menyematkan ekspresi JavaScript
- React DOM menggunakan camelCase sebagai konvensi penamaan

##### Menspesifikasikan Elemen Anak dengan JSX

- Jika tag bersifat kosong (tidak memiliki elemen anak), kita bisa saja menutupnya secara langsung dengan />
- Tag JSX dimungkinkan untuk memiliki elemen anak

##### Apa itu component ?

> Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI

##### Membagi UI menjadi beberapa komponene

> Membagi UI menjadi dengan beberapa komponen yang lebih kecil

##### Apa itu props

1. Singkatan dari properties, membuat kita dapat memberikan argumen / data pada component.
2. Props membantu untuk membuat komponen menjadi lebih dinamis
3. Props dioper ke component sama seperti memberikan atribut pada tag HTML
4. Props pada component adalah read-only dan tidak dapat diubah.

Komposisi komponen adalah Kontainment, dan Spesialisasi

##### Livecycle method yang umum

1. render()
2. componentDidMount()
3. componentDidUpdate()
4. componentWillUnmount()
   Lifecycle method lainnya
5. shouldComponentUpdate()
6. static getDerivedStateFromProps()
7. getSnapshotBeforeUpdate()

```
render()
> Fungsi yang paling sering dipakai
> Required pada class component
> Pure function. Tidak boleh ada setState()
```

```
componentDidMount()
> Dipanggil ketika component sudah di render untuk pertama kali
> Tempat yang tepat untuk pemanggilan API
> Boleh ada setState()
```

```
componentDidUpdate()
> Dipanggil ketika terjadi update (props atau state berubah)
```

```
componentWillUnmount()
> Dipanggil ketika component akan dihancurkan
> Cocok untuk clean up actions
```

##### Render Bersyarat

Pada React, Kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, Kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi Anda.

- Menggunakan If
- Inline If dengan operator &&
- Inline If-Else dengan ternary conditional operator
- Mencegah komponen untuk rendering

##### Render List

Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}.

##### Key

Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.

##### Dalam membuat Struktur Direcctory

React tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder
namun dapat dihindari terlalu banyak nya nesting

##### Class CSS

layaknya mengakses file CSS dalam native, dapat dilakukan dengan 3 cara (internal, line, dan eksternal)

- Apa itu State ?
- Stateless dan Statefull
- Handling Events

---

## Resume

---

##### Apa itu State ?

State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses dari component lain.
Ciri Ciri State

1. Data yang bisa di modifikasi menggunakan setState
2. Setiap terjadi modifikasi akan terjadi render ulang
3. Bersifat Asynchronous
4. Diapakai dalam class

Perbedaan Props vs State
Props = read only, can not be modified
State = can be asynchronous, Can be modified using this.setState

##### Statefull Component dan Stateless Componenent

> Statefull Component adalah memiliki state, Component ini dibuat dengan class. kelebihan dari class component adalah memiliki lifecycle
> Stateless Component adalah tidak memiliki state hanya props. Umumnya component ini dibuat dengan function karena codenya lebih ringkas.

Komponen statefull dan stateless memiliki banyak nama berbeda
Mereke juga dikenal sebagai:

1. Smart component & Dump component
2. Container component & Presentational component

##### Perbedaan dari komponen statefull dan komponen stateless

// Stateless Component

1. Tidak tahu tentang aplikasi
2. Tidak melakukan data fetching (Pengambilan Data)
3. Tujuan utamanya adalah visualisasi
4. Dapat digunakan kembali
5. Hanya berkomunikasi dengan induk langsungnya

// Statefull Component

1. Mengerti tentang aplikasi
2. Melakukan data fetching (pengambilan data)
3. Berinteraksi dengan aplikasi
4. Tidak dapat digunakan kembali
5. Meneruskan status dan data ke anak - anaknya

##### Apa itu Handling Event

> Handling Event adalah suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen
> Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan

Beberapa contoh list Event

1. Clipboard Events (Promise terpenuhi)
2. Form Events (onChange, onSubmit)
3. Mouse Event (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError, onLoad)

- React Hooks
- Motivasi menggunakan Hooks
- Hook pada react
- Hooks dasar dan Hooks Tambahan
- Aturan pada Hooks

---

## Resume

---

##### Apa itu React Hooks ?

Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

##### Motivasi menggunakan hooks

- Kesulitan untuk menggunakan kembali stateful logic antar komponen
- Komponen kompleks menjadi sulit untuk dimengerti
- Kelas membingungkan manusia dan mesin

##### Hook pada react

// Hooks Dasar

1. useState
2. useEffect
3. useContext

// Hooks Tambahan

1. useReducer
2. useCallback
3. useMemo
4. useRef
5. useImperativeHandle
6. useLayoutEffect
7. useDebugValue

##### Aturan pada hooks

> Hanya Panggil Hooks di Tingkat Atas : Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions

> Hanya Panggil Hooks dari Fungsi-Fungsi React : Jangan memanggil Hooks dari fungsi-fungsi JavaScript biasa.Kita dapat:, Memanggil Hooks dari komponen-komponen fungsi React, Memanggil Hooks dari custom Hooks

##### Implementasi useState dan useEffect di Component

- Menggunakan useState
- Menggunakan useEffect

##### Menggunakan useEffect

- Effect Hook memungkinkan kita melakukan efek samping (side effects) di dalam function component
- componentDidMount, componentDidUpdate, dan componentWillUnmount ≈ useEffect
- Ada dua jenis : Butuh pembersihan dan tidak butuh pembersihan

##### Membuat Custom Hooks

Membuat Hook Kita sendiri memungkinkan Kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.

- Apa itu Routes
- Perbedaan Multi dan Single Page Application
- URL Parameter

---

## Resume

---

##### Apa itu Routes ?

Routes merupakan modul Dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single page application)

##### Apa itu Multi Page Application

Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru

##### Apa itu Single Page Application

Single Page Application (SPA) salah satu jenis aplikasi website dimana hanya 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

##### Keunggulan SPA dan MPA

| Single Page Application                            | Multi Page Application                                                                              |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Waktu loading website jauh lebih cepat             | SEO website akan lebih mudah dioptimasi                                                             |
| Tidak ada query tambahan ke server                 | Mmeudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda                      |
| Front end yang cepat dan responsif                 | Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna (user experience) | -                                                                                                   |

##### Kekurangan SPA dan MPA

| Single Page Application                       | Multi Page Application                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Tidak bagus dalam hal SEO                     | Kecepatan download website jauh lebih lama jika dibandingkan dengan single page application |
| Berat saat di load atau buka pertama kali     | Kemu perlu mengintegrasikan antara front end dengan back end                                |
| Kurang aman dibandingkan dengan website biasa | Lebih sering membutuhkan maintenance dan update                                             |
| Masalah kompatibilitas browser                | Mungkin akna lebih sering menemukan masalah performa pada website                           |

React Router :
`npm install react-router-dom --save`

1. Browser Router : digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinronkan UI dengan url, Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang
2. Switch : digunakan untuk membungkus kumpulan beberapa component Route
   Exact bertugas untuk memastikan route hanya merender component yang memiliki path yang cocok. Jika tidak ada yang cocok, maka route yang akan di render yaitu route terakhir dengan component Notfound.
3. Route : Route digunakan sebagai pengarah jalan nya lalu lintas suatu aplikasi web
   Attribute path merupakan url pada browser pada proses routng
   Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan
4. Link : Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju.
   Element kosong <></> tersebut adalah shorthand dari <React.Fragment></React.Fragment> yang mana bisa untuk membungkus child element tanpa menambahkan node kedalam DOM.

##### Apa itu URL Parameter

Parameter URMl adalah sesuatu parameter yang dinilai ditetapkan secara dinamis di URL halaman.
== URL Param ==

```
/movie/titanic
/moview/spiderman
/movie/batman

<Route exact path="/moview/:id" component={MovieDetailsContainer} />
```

##### Perbedaan Link dan Redirect

| Link                                 | Redirect                               |
| ------------------------------------ | -------------------------------------- |
| Dapat digunakan pada kondisi apapun  | Lebih sering diguakan pada halaman 404 |
| Memberikan history baru pada browser | Menimpa history pada browser           |
| Bereaksi dengan click seperti a href | Bereaksi dengan suatu kondisi          |

### Hook Routing React

- useHistory
- useLocation
- useParams
- useRouteMatch

##### useHistory

useHistory memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi
Contoh

1. length
2. go
3. goBack
4. goForward
5. Push

| Property  | Kegunaan                                                           |
| --------- | ------------------------------------------------------------------ |
| length    | (angka) Jumlah entri dalam tumpukan riwayat                        |
| go        | (fungsi) Memindahkan penunjuk di tumpukan riwayat sebanyak n entri |
| goBack    | (fungsi) Setara dengan go(-1)                                      |
| goForward | (fungsi) Setara dengan go(1)                                       |
| push      | (fungsi) Mendorong entri baru ke tumpukan riwayat)                 |
| replace   | (fungsi) Mengganti entri saat ini ditumpukan riwayat history       |

##### useParams

```
Mengembalikan objek pasangan kunci / nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.
```

##### useRouteMatch

```
useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.
```

- Penggunaan Form
- Macam Form
- Apa itu Conctrolled Component
- Tag Textarea
- Tag Select
- Handle Banyak Input
- Apa itu Uncontrolled Component
- Nilai Default
- Tag File Input
- Uncontrolled Component
- Controlled Component
- Apa yang membuat element Controlled
- Kesimpulan
- Kenapa perlu validasi
- Tipe validasi data formulir
- Built-in form validation
- Menggunakan javascript

---

## Resume

---

##### Penggunaan Form

Form meruapakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan unruk menghandle inpputan user.
Form banyak kita jumpai saat login, mendaftar sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.
Dalam react akan ada banyak hal kita pelajari dari Form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi inputan dsb.

##### Macam Form

1. Elemen input

```
<input name="" />
```

2. Elemen TextArea

```
<textarea name="" />
```

3. Elemen Select

```
<select >
   <option>Pilihan 1</option>
   <option>Pilihan 2</option>
   <option>Pilihan 3</option>
</select >
```

4. Elemen Radio Button

```
<input type="radio">
```

5. Elemen Checkbox

```
<input type="checkbox">
```

6. Type elemen input lainnya
   | Element | Value Property | Element |
   | ------ | ------ | ------ |
   | text(default) | image | submit |
   | button | month | tel |
   | color | number | time |
   | checkbox | password | url |
   | date | radio | week |
   | datetime-local | range |
   | enail | reset | - |
   | file | search | - |
   | hidden | - | - |

##### Apa itu Controlled Component

Sebuah masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component"

##### Text Area

Pada react text area menggunakan atribut value. Dengan cara ini, sebuah form yang mengunakan textarea dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris.

##### Tag select pada HTML vs React

Pada html select membuat sebuah daftar dropdown, DI react, alih-alih menggunakan atribut selected kita menggunakan atribut value di tag select. Hal
Catatan : kita bisa memasukkan array ke atribut value, yang memungkinkan kita memilih beberapa opsi dalam tag select

##### Handle banyak input

Atribut yang membutuhkan penanganan banyak elemen pada controlled component, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name

##### Uncontrolled Component

Uncontrolled component adalah alternatif lain dari contrlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM. Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan ncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.

##### Atribut defaultValue

Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.

##### Tag File Input

```
Pada HTML, sebuah <input type="file"> memungkinkan pengguna untuk memilih satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan JavaScript lewat File API.
Dalam React, sebuah <input type="file" /> merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.
```

##### Uncontrolled Component?

Input yang tidak terkontrol seperti input formulir HTML tradisional.

```
export default function Form {
    return <div>
        <input type="text"
    </div>
    );
}
```

Kita kemudian bisa mendapatkan nilainya menggunakan ref. Misalnya, di tombol ditambahkan onClickhandler.

##### Uncontrolled Component

Dengan kata lain, kita harus 'menarik' nilai dari field saat kita membutuhkannya. In' bisa terjadi ketika formulir di submit.
Itu adalah cara paling sederhana untuk mengimplementasikan input formulir. Tentu saja ada kasus yang valid untuk menggunakannya: dalam form sederhana dan saat belajar React.
Namun, uncontrolled input tidak powerful. Jadi selanjutnya kita akan mempelajari controlled input.

Controlled Component? Sebuah controlled input menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. Kita bisa mengatakan ini adalah cara yang lebih "React way" untuk pendekatan ini (yang tidak berarti harus selalu menggunakannya).

```
<input value={someValue} onChange={handleChange} />
```

Tetapi nilai input ini harus ada di state yang disimpan di suatu tempat. Biasanya, komponen yang merender input (alias form component) menyimpannya di state-nya. Tentu saja, itu bisa dalam state komponen lain, atau bahkan di penyimpanan state terpisah (separate state store), seperti Redux .

##### Flow Controlled Component

Setiap kali kita mengetik karakter baru, handleNameChange dipanggil. Dibutuhkan nilai baru dari input dan mengaturnya di state.

##### Controlled Component

lni juga berarti bahwa komponen form dapat merespon perubahan input dengan segera, misalnya oleh
• umpan balik di tempat, seperti validasi
• menonaktifkan tombol kecuali semua field memiliki data yang valid
• mengimplementasi format input tertentu, seperti nomor kartu kredit
Tetapi jika tidak memerlukan semua itu dan menganggap uncontrolled lebih sederhana, lakukanlah.

Menjadi 'Controlled' Selain input, ada elemen bentuk lain, seperti checkboxes, radios, selects and textareas. Elemen formulir menjadi "controlled" jika kita menetapkan nilainya melalui prop.
Namun, masing-masing elemen formulir memiliki prop yang berbeda untuk menetapkan nilai itu.

| Element                 | Value Property       | Change Callback | New value in callback |
| ----------------------- | -------------------- | --------------- | --------------------- |
| <input type="text">     | value="string"       | onChange        | event.target.value    |
| <input type="checkbox"> | checked={boolean}    | onChange        | event.taget.checked   |
| <input type="radio">    | checked={boolean}    | onChange        | event.taget.checked   |
| <textarea>              | value="string"       | onChange        | event.taget.value     |
| <select>                | value="option value" | onChange        | event.taget.value     |

##### Kesimpulan

Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita.
Jika formulir sangat sederhana dalam hal umpan batik UI, uncontrolled dengan refs sepenuhnya balk-balk saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk". Lagipula kita selalu dapat bermigrasi ke controlled input.

| FItur                                    | uncontrolled | controlled |
| ---------------------------------------- | ------------ | ---------- |
| one-time value retrieval (e.g on submit) | v            | v          |
| validating on submit                     | v            | v          |
| instant field validation                 | x            | v          |
| conditionally disabling submit button    | x            | v          |
| enforcing input format                   | x            | v          |
| several input format                     | x            | v          |
| several inputs for one piece of data     | x            | v          |
| dynamic inputs                           | x            | v          |

##### Kenapa perlu validasi

Buat apa? Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :

- Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
- Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman
- Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

##### Tipe validasi data formulir

1. Client-side Validation
   Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server. Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi.
   Validasi sisi klien, terbagi atas dua bagian • Built-in form validation, yaitu menggunakan fitur validasi langsung dari HTML5. Biasanya, validasi ini tidak membutuhkan Javascript dan memiliki performa yang lebih balk. Tapi tidak dapat dikostumisasi. Kadang pesan errornya cukup `kaku'. Contohnya : required, minlength, maxlength, min, max, type dan patten • Menggunakan Javascript. In' membuat validasi form dapat dikostumisasi. Tetapi kita perlu membuatnya sendiri.
2. Server-side validation
   Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.
   Berbeda dengan validasi sisi klien, validasi ini tidak user-friendly. Karena, koreksi kesalahan akan dikirimkan, setelah form di-submit.

Catatan :
Javascript bisa kapan? Bisa kapan saja melakukan validasi? • Ketika ada perubahan di form. Ketika ada perubahan, akan mentrigger event onChange. Kkup real-time berdasarkan perubahan data, namun fungsi akaelebihannya validasi akan can terus dipanggil selama ada perubahan. Bisa dikombinasikan dengan disable button. • Ketika menekan tombol submit. Ketika menekan tombol submit, akan mentrigger event onSubmit. Kelebihannya validasi cukup sekali, namun tidak akan real-time memvalidasi form.

- Global State Manajemen
- Redux Thunk
- Menyimpan State ke storage
- Introduction Hasura
- Postman
- Instalation
- Implementation RESTAPI at React Js

---

## Resume

---

##### Kapan saat yang tepat untuk menggunakan Redux

1. Banyak state yang perlu di taruh dibanyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

##### Redux Library dan Tools

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

##### Redux Library dan Tools

1. Actions
2. Reducer
3. Store

##### Memakai dan mengubah state

1. Hooks
2. Connect

##### Redux Thunk

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action

##### Kenapa perlu Redux Thunk

Untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data

##### Menyimpan State ke storage

perlu isntall github.com/rt2zz/redux-persist

```
npm install redux-persist
```

##### What is Hasura ?

The Hasura GraphQL Engine is a blazing fast GraphQL server that gives you instant, realtime GraphQL APIs over Postgres, with webhook triggers on database events, and remote schemas for bussiness logic.

##### What is Postman ?

Postman is an API platform for developers to design, build, test and iterate their APIs

##### Why use POSTMAN

- Easy for collaborate with auto sync with other member
- Simple interface
- POSTMAN is free upto 3 member and unlimited collection

##### Install Axios

```
npm install axios
```

##### Rangkuman

Catatan :

1. Redux adalah library untuk manajemen state global
2. Redux menggunakan struktur "one-way data flow"
3. Redux menggunakan beberapa tipe code

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

- GraphQL Overview
- Hasura & Heroku
- Apollo Setup
- Query
- Mutation
- Subscription

---

## Resume

---

##### Apa itu GrpahQL

GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL minimizes the amount of data that needs to be transferred over the network. With graphQL we can use one single endpoint ( /graphQL ) for any requests needed.

##### GrpahQL Core Feature

Before we can do GraphQL then we need to setup GraphQL Server (Backend), you can use Hasura, Apollo Server or others to do that. Then we can use GraphQL on client either using Prisma, Apollo Client, Postman, etc.

There are 3 main features in GraphQL client:

1. Query, get data based on specific query that we define
2. Mutation, insert, update, delete data
3. Subscription, get updated date realtime / based on events

##### Query Basic

With graphQL we can get data exactly what we need. We define what fields that we want to get and graphQL will give us data based on what we define. For example, imagine there is one collection in database that holds movies data. All unneeded data like director, created_at and updated_at can will not be included in the result.

##### Query Multiple related data source / Collections

We can also use query to get data from multiple related collections. In the example below, if we want to get director data we need to use director.id to get data from other endpoint, but with graphql we can also define needed fields directly as long as it’s available on GraphQL server.

##### Query Multiple unrelated data source / Collections

We can also use query to get data from multiple unrelated collections for minimizing network request. Image if we want movies data and books data. With REST we need to do at least 2 request to 2 different endpoints. With GraphQL we can do 1 request to get those data.

##### Query Fragment

A GraphQL fragment is a piece of logic that can be shared between multiple queries and mutations. We can use fragment to simplify query or mutation

##### Mutation

Mutation is basically functionality to update, insert and delete data. We need to define what operation that we want to do (based on available operation on your graphql server) and then define what data GraphQL need to return.

##### Subcription

Subscriptions are a GraphQL feature that allows a server to send data to its clients when a specific event happens. Subscriptions are usually implemented with WebSockets. In that setup, the server maintains a steady connection to its subscribed client.
When data is modified then client will get updated data directly in real-time. In example below, if we do subscription on person collection then everytime new person is added or when data is deleted or modified then we will get updated data real-time directly to our client. Subscription will only happen on client side not server side.

##### Hasura & Heroku

1. Pastikan menggunakan versi Node yang terbaru
2. Install Surge di terminal

Hasura is a service provide graphql and rest api. Full managed on hasura cloud or self-hosted. Open https://hasura.io/ and create new your own graphql server

Heroku is a cloud platform as a service supporting several programming languages. Heroku also provide free postgres database. Open https://heroku.com/ and create your own service

##### Setting hasura and heroku

After finish register hasura and heroku, open hasuran and create new project. When finish launch console and setting database server. Click tab data and create heroku database. When it’s done create database, you can configure your database.

##### Apollo Setup

Apollo Client is a comprehensive state management library for JavaScript that enables us to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating UI. The core @apollo/client library provides built-in integration with React. We an use Apollo client to do any GraphQL operations (query, mutation and subscription) inside our React or Next JS app. Apollo client works well with any GraphQL server (Hasura, Apollo Server, etc)

##### Apollo Client Next JS Setup - Installation

1. Create new React JS project

```
npx create-react-app react-graphql
```

2. Install GraphQL and apollo client

```
yarn add graphql @apollo/client
```

3. Don’t forget to commit changes to track progress

##### Query with Apollo Client - lazy query

When React renders a component that calls useQuery, Apollo Client automatically executes the corresponding query. But what if you want to execute a query in response to a different event, such as a user clicking a button?
The useLazyQuery hook is perfect for executing queries in response to events besides component rendering. Unlike with useQuery, when you call useLazyQuery, it does not immediately execute its associated query. Instead, it returns a query function in its result tuple that you call whenever you're ready to execute the query.

##### Query with Apollo Client - refetching

Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval. You can optionally provide a new variables object to the refetch function. If you don't, the query uses the same variables that it used in its previous execution.

##### Subscription

1. Install subscriptions-transport-ws to enable websocket connection

```
yarn add @apollo/client subscriptions-transport-ws
```

2. Import all needed modules and separate between http and websocket link
3. Create httpLink for query and mutation. And wsLink for subscription. Add header for authentication. Get this link from your hasura console. WsLink use wss:// instead of https:// because wsLink use websocket.. Note that wss is more secure than ws, just like https is more secure than http.
4. Add split function and use as link when create client. Split function used to combine those two Links into a single Link that uses one or the other according to the type of operation being executed . When operation is equal subscription then use wsLink, if not then use httpLink for query and mutation
5. Import useSubscription from apollo client and define subscription
6. Invoke subscription and consume data, in this example we will remove query from previous code and change it to subscription. In jsx code just like before

##### Subscription using subscribeToMore

subscribeToMore is a function that enables you to execute a subscription, usually to subscribe to specific fields that were included in the query. Or when server return only 1 updated data instead of all data, then we need to update previous data in prev variable and return updated data

- Introduction Database
- Relational Database
- Entity Relationship Diagram
- SQL Statement

---

## Resume

---

##### Jenis Database Relationship

- One To One
  Contoh = satu user hanya memiliki 1 foto profil
- One To Many
  Contoh = satu user bisa memiliki banyak tweets
- Many To Many
  Contoh = satu user bisa memiliki banyak follower user, 1 user bisa di follow banyak user
  Contoh = 1 mahasiswa bisa memiliki banyak mata kuliah, 1 mata kuliah bisa oleh banyak mahasiswa

##### Relational Database Management System

Software untuk memanage database contoh software RDBMS adalah MySQL

Jenis - jenis perintah SQL

1. Data Definition Language
2. Data Manipulation Language
3. Data Control Language

##### DDL Statement

CREATE DATABASE database_name;
USE database_name;
CREATE TABLE ...
DROP TABLE ...
RENAME TABLE ...

##### Create Table With Is Schema

CREATE TABLE table name( column1 data type PRIMARY KEY, column2 data type FOREIGN KEY,
column data type, PRIMARY KEY( one or more columns ) );

##### Modify Table Schema

ALTER TABLE table name
ADD COLUMN column name data type;

##### Tipe Data MySQL

- NUM
- Huruf
- Date

##### DML Data Manipulation Language

Statement Operation

- Insert
- Select
- Update
- Delete

##### DML Statement

- Like / Beetween
- And / Or
- Order By
- Limit

##### Join

Sebuah klausa untuk mengkombinasikan record diri dua atau tabel
Join Standar SQL Ansi

1. Inner
   Inner Join akan mengembalikan baris-baris dari dua tabel atau lebih yang memenuhi syarat
2. Left
   Left Join akan mengembalikan seluruh baris dari tabel disebelah kiri yang dikenai kondisi ON dan hanya baris dari tabel disebelah kanan yang memenuhi kondisi join
3. Right
   Right Join akan mengembalikan semua baris dari tabel sebelah kanan yang dikenai kondisi ON dengan data dari tabel sebelah kiri yang memenuhi kondisi join. Teknik ini merupakan kebalikan dari left join.

##### Union

Hal yang perlu diperhatikan dari union adalah jumlah field yang dikeluarkan / dipanggil harus sama

##### Aggregate

Fungsi di mana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal

##### Fungsi Agregasi SQL

- Min
  fungsi di mana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal.

```
SELECT MIN(id) AS id FROM users
SELECT MIN(created_at) AS created FROM users
```

- Max
  Digunakan untuk mendapatkan nilai maximum atau nilai terbesar dari sebuah data record di tabel.

```
SELECT MAX(id) FROM users
SELECT MAX(created_at) FROM users
```

- SUM
  Digunakan untuk mendapatkan jumlah total nilai dari sebuah data atau record di tabel.

```
SELECT SUM favourite_count FROM tweets WHERE user_id-1
```

- AVG
  AVG Digunakan untuk mencari nilai rata-rata (average) dari sebuah data atau record di tabel.

```
SELECT AVG(favourite_count) FROM tweets WHERE user_id=1
```

- COUNT
  COUNT Digunakan untuk mencari jumlah dari sebuah data atau record di tabel.

```
SELECT COUNT(1) FROM tweets WHERE user_id=1
```

- HAVING
  Digunakan untuk menyeleksi data berdasarkan kriteria tertentu, dimana kriteria berupa fungsi aggregat.

```
SELECT user_id FROM tweets GROUP BY user_id HAVING SUM(favourite_count): 2
```

##### SubQuerry

Subquery atau Inner cuery atau Nested query acalah query di dalam query SQL lain
SEBUAH SUBQUERY digunakan untuk mengembalikan data yang akan digunakan dalam query utama sebagai syarat untuk Iebih membatasi data yang akan diambil.
SUBQUERY DAPAT DIGUNAKAN dengan SELECT, INSERT, UPDATE, dan DELETE statements bersama dengan operator seperti IN, BEETWEEN dll

PERATURAN
• Harus tertutup dalam tanda kurung.
• Sebuah subquery hanya dapat memiliki satu kolom pada klausa SELECT, kecuali beberapa kolom yang di query utama untuk subquery untuk membandingkan kolom yang dipilih.
• Subqueries yang kembali lebih dari satu baris hanya dapat digunakan dengan beberapa value operator, seperti operator IN.
• Daftar SELECT tidak bisa menyertakan referensi ke nilai-nilai yang mengevaluasi ke BLOB, ARRAY, CLOB, atau NCLOB.
• Sebuah subquery tidak dapat segera tertutup dalam fungsi set.

##### Query with Apollo Client - lazy query

When React renders a component that calls useQuery, Apollo Client automatically executes the corresponding query. But what if you want to execute a query in response to a different event, such as a user clicking a button?
The useLazyQuery hook is perfect for executing queries in response to events besides component rendering. Unlike with useQuery, when you call useLazyQuery, it does not immediately execute its associated query. Instead, it returns a query function in its result tuple that you call whenever you're ready to execute the query.

##### Function

FUNCTION sebuah kumpulan statement yang akan mengembalikan sebuah nilai balik pada pemanggilnya

- GraphQL Overview
- Hasura & Heroku
- Apollo setup
- Query
- Mutation
- Subscription

---

## Resume

---

##### GraphQL Overview

GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL minimizes the amount of data that needs to be transferred over the network. With graphQL we can use one single endpoint ( /graphQL ) for any requests needed.

##### GraphQL Core Features

Before we can do GraphQL then we need to setup GraphQL Server (Backend), you can use Hasura, Apollo Server or others to do that. Then we can use GraphQL on client either using Prisma, Apollo Client, Postman, etc.

There are 3 main features in GraphQL client:

1. Query, get data based on specific query that we define
2. Mutation, insert, update, delete data
3. Subscription, get updated date realtime / based on events

##### Query Basic

With graphQL we can get data exactly what we need. We define what fields that we want to get and graphQL will give us data based on what we define. For example, imagine there is one collection in database that holds movies data. All unneeded data like director, created_at and updated_at can will not be included in the result.

##### Query - multiple related data sources / collections

We can also use query to get data from multiple related collections. In the example below, if we want to get director data we need to use director.id to get data from other endpoint, but with graphql we can also define needed fields directly as long as it’s available on GraphQL server.

##### Query - multiple unrelated data sources / collections

We can also use query to get data from multiple unrelated collections for minimizing network request. Image if we want movies data and books data. With REST we need to do at least 2 request to 2 different endpoints. With GraphQL we can do 1 request to get those data.

##### Query - fragments

A GraphQL fragment is a piece of logic that can be shared between multiple queries and mutations. We can use fragment to simplify query or mutation

##### Mutation

Mutation is basically functionality to update, insert and delete data. We need to define what operation that we want to do (based on available operation on your graphql server) and then define what data GraphQL need to return.

##### Subscription

Subscriptions are a GraphQL feature that allows a server to send data to its clients when a specific event happens. Subscriptions are usually implemented with WebSockets. In that setup, the server maintains a steady connection to its subscribed client.
When data is modified then client will get updated data directly in real-time. In example below, if we do subscription on person collection then everytime new person is added or when data is deleted or modified then we will get updated data real-time directly to our client. Subscription will only happen on client side not server side.

##### What is Hasura & Heroku

Hasura is a service provide graphql and rest api. Full managed on hasura cloud or self-hosted. Open https://hasura.io/ and create new your own graphql server
Heroku is a cloud platform as a service supporting several programming languages. Heroku also provide free postgres database. Open https://heroku.com/ and create your own service

##### Setting hasura and heroku

After finish register hasura and heroku, open hasuran and create new project. When finish launch console and setting database server. Click tab data and create heroku database. When it’s done create database, you can configure your database.

##### Apollo Setup

Apollo Client is a comprehensive state management library for JavaScript that enables us to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating UI. The core @apollo/client library provides built-in integration with React. We an use Apollo client to do any GraphQL operations (query, mutation and subscription) inside our React or Next JS app. Apollo client works well with any GraphQL server (Hasura, Apollo Server, etc)

##### Apollo Client Next JS Setup - Installation

1. Create new React JS project

```
npx create-react-app react-graphql
```

2. Install GraphQL and apollo client

```
yarn add graphql @apollo/client
```

3. Don’t forget to commit changes to track progress

##### Query with Apollo Client - lazy query

When React renders a component that calls useQuery, Apollo Client automatically executes the corresponding query. But what if you want to execute a query in response to a different event, such as a user clicking a button?
The useLazyQuery hook is perfect for executing queries in response to events besides component rendering. Unlike with useQuery, when you call useLazyQuery, it does not immediately execute its associated query. Instead, it returns a query function in its result tuple that you call whenever you're ready to execute the query.

##### Query with Apollo Client - refetching

Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval. You can optionally provide a new variables object to the refetch function. If you don't, the query uses the same variables that it used in its previous execution.

##### Subscription using subscribeToMore

subscribeToMore is a function that enables you to execute a subscription, usually to subscribe to specific fields that were included in the query. Or when server return only 1 updated data instead of all data, then we need to update previous data in prev variable and return updated data

- GraphQL Overview
- Hasura & Heroku
- Apollo setup
- Query
- Mutation
- Subscription

---

## Resume

---

##### Mutation

Mutation is basically functionality to update, insert and delete data. We need to define what operation that we want to do (based on available operation on your graphql server) and then define what data GraphQL need to return.

##### Component Mutation

1. Insert
2. Update
3. Delete

---

- GraphQL Overview
- Hasura & Heroku
- Apollo setup
- Query
- Mutation
- Subscription

---

## Resume

---

##### Subscription

Subscriptions are a GraphQL feature that allows a server to send data to its clients when a specific event happens. Subscriptions are usually implemented with WebSockets. In that setup, the server maintains a steady connection to its subscribed client.
When data is modified then client will get updated data directly in real-time. In example below, if we do subscription on person collection then everytime new person is added or when data is deleted or modified then we will get updated data real-time directly to our client. Subscription will only happen on client side not server side.

##### What is Hasura & Heroku

Hasura is a service provide graphql and rest api. Full managed on hasura cloud or self-hosted. Open https://hasura.io/ and create new your own graphql server
Heroku is a cloud platform as a service supporting several programming languages. Heroku also provide free postgres database. Open https://heroku.com/ and create your own service

##### Setting hasura and heroku

After finish register hasura and heroku, open hasuran and create new project. When finish launch console and setting database server. Click tab data and create heroku database. When it’s done create database, you can configure your database.

##### Apollo Setup

Apollo Client is a comprehensive state management library for JavaScript that enables us to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating UI. The core @apollo/client library provides built-in integration with React. We an use Apollo client to do any GraphQL operations (query, mutation and subscription) inside our React or Next JS app. Apollo client works well with any GraphQL server (Hasura, Apollo Server, etc)

##### Apollo Client Next JS Setup - Installation

1. Create new React JS project

```
npx create-react-app react-graphql
```

2. Install GraphQL and apollo client

```
yarn add graphql @apollo/client
```

3. Don’t forget to commit changes to track progress

##### Query with Apollo Client - lazy query

When React renders a component that calls useQuery, Apollo Client automatically executes the corresponding query. But what if you want to execute a query in response to a different event, such as a user clicking a button?
The useLazyQuery hook is perfect for executing queries in response to events besides component rendering. Unlike with useQuery, when you call useLazyQuery, it does not immediately execute its associated query. Instead, it returns a query function in its result tuple that you call whenever you're ready to execute the query.

##### Query with Apollo Client - refetching

Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval. You can optionally provide a new variables object to the refetch function. If you don't, the query uses the same variables that it used in its previous execution.

##### Subscription using subscribeToMore

subscribeToMore is a function that enables you to execute a subscription, usually to subscribe to specific fields that were included in the query. Or when server return only 1 updated data instead of all data, then we need to update previous data in prev variable and return updated data
