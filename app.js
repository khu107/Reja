const express = require("express");
const app = express();
const fs = require("fs");
const db = require("./server").db();

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("err:", err);
  } else {
    user = JSON.parse(data);
  }
});
// 1. express ga kirib kelayotgan malumotlarga bogliq bulgan kodlar.
app.use(express.static("public")); // harqanday  browserdan kirib kelgan request uchun public fulderi ochiq degan manoni anglatadi.
app.use(express.json()); // kirib kelayotgan json formatdagi datani object formtga uzgartirib beradi.
app.use(express.urlencoded({ extended: true })); // html da form request ni qabul qilishda ishlatiladi.

// 2. Session code

// 3. BSSR (backend server side rendering) - backend da view yasash backend da html yasab browser ga yuboriladi.
app.set("views", "views");
app.set("view engine", "ejs"); // ejs engine template

// 4. router lar
app.post("/create-item", function (req, res) {});

app.get("/", (req, res) => {
  res.render("reja");
});

module.exports = app;
