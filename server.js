const express = require("express");
const app = express();
const http = require("http");

// 1. express ga kirib kelayotgan malumotlarga bogliq bulgan kodlar.
app.use(express.static("public")); // harqanday  browserdan kirib kelgan request uchun public fulderi ochiq degan manoni anglatadi.
app.use(express.json()); // kirib kelayotgan json formatdagi datani object formtga uzgartirib beradi.
app.use(express.urlencoded({ extended: true })); // html da form request ni qabul qilishda ishlatiladi.

// 2. Session code

// 3. BSSR (backend server side rendering) - backend da view yasash backend da html yasab browser ga yuboriladi.
app.set("views", "views");
app.set("view engine", "ejs"); // ejs engine template

// 4. router lar
app.get("/hello", function (req, res) {
  res.end("<h1>Hello World</h1>");
});

app.get("/gift", function (req, res) {
  res.end("<h1>Siz sovgalar sahifasidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`This server is running seccessfully on port: ${PORT}`);
});
