// for (let i = 1; i <= 10; i++) {
//   console.log("Hello", i);
// }
// for (let i = 1; i <= 100; i++) {
//   if (i == 49) {
//     break;
//   }
//   if (i == 3 || i == 5) {
//     continue;
//   }
//   console.log(i);
// }
// for (let i = 1; i <= 100; i *= 2) {
//   console.log(`${i} fs14`);
// }
// const n = prompt("enter number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
//   console.log(`sum: ${sum}`);
// }
// const adet = prompt("kac adet sayi uretmek istersiniz:?");
// for (let sayac = 1; sayac <= adet; sayac++) {
//   const rasgeleSayi = Math.round(Math.random() * 100);
//   //   rasgeleSayi++ //*!Uncaught TypeError: Assignment to constant variable.
//   console.log(`${sayac}. sayiniz : ${rasgeleSayi}`);
// }

// const deneme = [10];
// console.log(deneme);
// const colors = ["red", "green", "blue"];
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);

// array is array
// const colors = ["red", "green", "blue"];
// console.log(typeof colors);
// console.log(Array.isArray(colors)); //true
// console.log(colors instanceof Array); //true

// const veriable = "1";
// console.log(Array.isArray(veriable)); //false
// console.log(veriable instanceof Array);  //false

//change the value by using index

// const colors = ["red", "green", "blue"];
// colors[1] = "yellow";
// console.log(colors);

// //add a new item to array
// colors[3] = "white";
// console.log(colors);

// let c = "pink";
// colors[4] = c;
// console.log(colors);

const colors = ["red", "green", "blue", "yellow", "brown"];
const cls = colors.slice();
console.log(colors);
console.log(cls);
console.log(colors.slice(2, 4));
console.log(colors.slice(-2));
console.log(colors.slice(2));

// //push

// console.log(colors.length);
// let c = "white";
// const d = colors.push("blue", 2023, c);
// console.log(d);     //rakamasal değer cıkar

const car = ["audi", "bmw"];
const car2 = ["ford", "tesla"];
// car.push(car2);
// console.log(car); //array içine array atar.
// car.push(...car2);
// console.log(car);
// console.log(car.pop()); //sondan sildirir, bmw yi yazdırır. orjinal array değişir.
// car.unshift("tesla");
// console.log(car); //başa ekler, yeni arrayyi yazar.
// car.unshift(...car2);
// console.log(car);

// const colors = ["red", "green", "blue", "yellow", "brown"];
// // console.log(colors.shift());
// console.log(colors.splice(3, 1, "pink"));

// const text = "Clarusway";
// const arr = text.split("");
// console.log(arr);
// arr.reverse();
// console.log(arr);
// const reversedText = arr.join("");

// console.log(reversedText);

// const colors = ["red", "blue", "purple", "white", "yellow"];
// console.log(colors.splice(2, 3));
// console.log(colors);
