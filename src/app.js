const express = require("express");

const app = express();

const VERSION = "1.0.0";

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    application: "Node.js DevSecOps Demo",
    message: "Application is running successfully",
    version: VERSION
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/version", (req, res) => {
  res.status(200).json({
    version: VERSION
  });
});

module.exports = app;