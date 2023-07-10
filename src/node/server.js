const express = require("express");
const app = express();
const { version } = require("../../package.json");

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Ok");
});

app.get("/version", (req, res) => {
  res.send(version);
});

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(5000, () => {
  console.log("listening on " + 5000);
});
