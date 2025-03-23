const express = require("express");
const app = express();
app.get("/", (req, res) =>{
  res.send("bhadve ye home page hai")
})
app.get("/about", (req, res) =>{
  res.send("bhadve ye about page hai")})
app.listen(8000,() => {
  console.log("Badve server start ho gya")
})