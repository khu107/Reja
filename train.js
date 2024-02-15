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
