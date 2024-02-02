// File module

let hisob = {
  kvatrati: (a) => {
    return a * a;
  },
};

hisob.kupaytirish = (a, b) => {
  return a * b;
};

hisob.bulish = (a, b) => {
  return a / b;
};

hisob.qushish = (a, b) => {
  return a + b;
};

hisob.ayirish = (a, b) => {
  return a - b;
};

module.exports = hisob;

// console.log(arguments);
