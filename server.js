const express = require("express");
const app = express();
const PORT = 3000;
const api = require("./api/index.js");

app.use("/api", api)

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `);
});