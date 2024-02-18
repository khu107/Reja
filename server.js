const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://khusan:khusan@cluster0.8mnw2t4.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("db connect ERROR:", err);
    else {
      console.log("run MongoDB");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 7006;
      server.listen(PORT, function () {
        console.log(
          `This server is running seccessfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
