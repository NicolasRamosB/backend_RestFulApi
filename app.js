const express = require("express");
const app = express();
require("dotenv").config();
const indexRouter = require("./src/router/index");
app.get("/", (_req, res) => {
  res.status(200).json({
    message: "This is a list of server endpoints",
    endpoints: [
      {
        method: "GET",
        url: "/public/index.html",
      },
    ],
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(__dirname + "/public"));

app.use("/api", indexRouter);

module.exports = app;
