const express = require("express");
const app = new express();
app.get("/", (req, res) => {
  res.send("Hello there");
});
app.listen(8080, () => {
  console.log("listening on port 8080");
});
