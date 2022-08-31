var a = 5;
let b = "kampus merdeka";
const nama = "David Nasrulloh";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = "kampus merdeka"; // merubah nilai b menjadi kampus merdeka
// nama = b; akan eror karena deklarasi variabel pada const bersifat tidak dapat dirubah

console.log("array = " + lengkap_arr[2]);
// console.log("asal diakses " + asal); //error karena asal adalah variable function
console.log("a diakses " + a);
console.log("b diakses " + b);
perkenalan();

// Menjawab soal nomor dua
// 1. Baris 21, 22, 23 tidak bisa tampil, karena variabel terdaftar masih berisi nilai boolean false
// 2. Karena pada variabel nama sudah dideklarasikan dengan keyword const sehingga tidak dapat dirubah
// 3. Dengan melakukan komen pada baris 26 tidak akan berpengaruh terhadap baris 28, karena pada baris ini mendeklarasikan variable yang berada pada variable scope function local perkenalan, maka pada baris 28 harus juga dilakukan komen agar baris tersebut tidak dijalankan dan menyebabkan error