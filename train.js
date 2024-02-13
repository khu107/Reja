// // 1 . for dan foydalangan usuli
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

// // 2. Array ning filter methodi dan foydalangan usuli
// function sonlar(son) {
//   const sonlar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//   const re = son
//     .split("")
//     .filter((element) => sonlar.indexOf(element) !== -1).length;

//   return re;
// }
// console.log(sonlar("1a1a5a1a16"));

// // 2. regex - dan foydalangan usuli
// function sonlar(str) {
//   let regex = /[^0-9]/g;
//   return str.replace(regex, "").length;
// }

// console.log(sonlar("1a2aaa0aaas35"));

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// SHOP class da 3 ta method
// qabul
// sotish
// qoldiq

class Shop {
  constructor(non, cola, lagmon) {
    this.non = non;
    this.cola = cola;
    this.lagmon = lagmon;
  }

  qabul(type, num) {
    if (type === "non") {
      this.non = this.non + num;
    } else if (type === "cola") {
      this.cola = this.cola + num;
    } else {
      this.lagmon = this.lagmon + num;
    }
  }
  sotish(type, num) {
    if (type === "non") {
      this.non = this.non - num;
    } else if (type === "cola") {
      this.cola = this.cola - num;
    } else {
      this.lagmon = this.lagmon - num;
    }
  }
  qoldiq() {
    return `hozir ${new Date().getHours()} : ${new Date().getMinutes()} da ${
      this.non
    } ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`;
  }
}

const shop = new Shop(4, 5, 2);
console.log(shop);
shop.qabul("cola", 2);
shop.qabul("lagmon", 5);
console.log(shop);
console.log(shop.qoldiq());
shop.sotish("cola", 1);
shop.sotish("lagmon", 1);

console.log(shop.qoldiq());
