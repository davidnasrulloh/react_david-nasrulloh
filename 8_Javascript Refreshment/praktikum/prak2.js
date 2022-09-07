// Soal 3
const foo = ["Budi", "Sita", "Ayu"];
let [a, b, c] = foo;
console.log(a);
console.log(b);
console.log(c);

// Soal 4
let bdays = ["10-17", "05-19", "20-19"];
let bdayreplaced = [];
bdays.forEach((word) => {
    bdayreplaced.push(word.replace("-", "/"));
});
console.log(bdayreplaced);

// Soal 5
let value = [1, 2, 3, 4, 5, 6];
let map1 = value.map((x) => x * 2);
console.log("Dikali dua = " + map1);

// Soal 6
let arr = [1.5, 2.56, 5.1, 12.33];
let map2 = arr.map((x) => Math.ceil(x));
console.log("pembualatan keatas = " + map2);