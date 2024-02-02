// const calculate = require("./hisob.js");

// // Module package FILE
// const kupaytirish = calculate.kupaytirish(80, 20);
// console.log("kupaytirish", kupaytirish);

// console.log("----------------");

// const qushish = calculate.qushish(70, 20);
// console.log("qushish", qushish);

// console.log("----------------");

// const ayirish = calculate.ayirish(70, 20);
// console.log("ayirish", ayirish);

// console.log("----------------");

// const kvatrati = calculate.kvatrati(2);
// console.log("kvatrati", kvatrati);

const Account = require("./account");

Account.tellMeAboutClass();
Account.tellMeTime();

console.log("--------------------");

const myAccount = new Account("David", 200000, 95959512345);
myAccount.giveMeDetails();
myAccount.makeDeposit(100);

// tufli , narxi 1000000
myAccount.withdrawMoney(100000);
