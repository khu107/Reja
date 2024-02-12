// synchronous callback
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba buling", // 0-20
//   "tugri boshliq tanlang va kuproq hato qiling ", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bulgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yuq endi", // 60
// ];

const { text } = require("express");

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("error", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba buling", // 0-20
//   "tugri boshliq tanlang va kuproq hato qiling ", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bulgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yuq endi", // 60
// ];

// async function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("err".err);
//   });

// console.log("passed here 1");

// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
// }
// run();

// A - Task

// array method dan foydalangan holda
// function countLetter(target, str) {
//   let count = 0;
//   str.split("").forEach((v) => {
//     if (v === target) count++;
//   });
//   return `forEach: ${count}`;
// }

// console.log(countLetter("e", "engineer"));

// // for dan foydalangan holda

// function countLetter1(target, str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === target) count++;
//   }
//   return `for: ${count}`;
// }

// console.log(countLetter1("e", "engineer"));

// const animals_list = [
//   "fox",
//   "ant",
//   "bird",
//   "lion",
//   "wolf",
//   "deer",
//   "bear",
//   "frog",
//   "hen",
//   "mole",
//   "duck",
//   "goat",
//   "dog",
//   "bat",
//   "cock",
//   "cow",
// ];

// let txt = "foxdeer";
// const animals = animals_list.filter((animal) => {
//   return txt.includes(animal);
// });

// function hayvon(txt) {
//   const possibleAnimals = animals_list.filter((animal) => {
//     const animalLetters = animal.split("");
//     let txtCopy = txt;

//     for (const letter of animalLetters) {
//       const index = txtCopy.indexOf(letter);

//       if (index !== -1) {
//         txtCopy = txtCopy.slice(0, index) + txtCopy.slice(index + 1);
//       } else {
//         return false;
//       }
//     }

//     return true;
//   });
//   return possibleAnimals;
// }
// console.log(hayvon("dgolfwat"));

// function sonlar(son) {
//   let count = 0;
//   const sonlar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//   for (let i = 0; i < son.length; i++) {
//     if (sonlar.indexOf(son[i]) !== -1) {
//       count++;
//     } else {
//       false;
//     }
//   }
//   return count;
// }
// console.log(sonlar("1a1a5a1a1"));

// function sonlar(son) {
//   let count = 0;
//   const s = [];
//   const sonlar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//   son.split("").forEach((element) => {
//     if (sonlar.indexOf(element) !== -1) {
//       s.push(element);
//       count++;
//     } else {
//       false;
//     }
//   });

//   return count, s;
// }

// console.log(sonlar("1a1a5a1a16"));

// function sonlar(son) {
//   const sonlar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//   const re = son
//     .split("")
//     .filter((element) => sonlar.indexOf(element) !== -1).length;

//   return re;
// }
// console.log(sonlar("1a1a5a1a16"));

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function sonlar(str) {
//   let regex = /[^0-9]/g;
//   return str.replace(regex, "").length;
// }

// console.log(sonlar("1a2aaa0aaas35"));
