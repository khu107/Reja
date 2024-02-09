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
function countLetter(target, str) {
  let count = 0;
  str.split("").forEach((v) => {
    if (v === target) count++;
  });
  return `forEach: ${count}`;
}

console.log(countLetter("e", "engineer"));

// for dan foydalangan holda

function countLetter1(target, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) count++;
  }
  return `for: ${count}`;
}

console.log(countLetter1("e", "engineer"));
