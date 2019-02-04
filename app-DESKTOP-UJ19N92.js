const express = require("express");
const bodyparser = require("body-parser");
const request = require('request');

const app = express();
const port = 3000;


app.use(express.static("public"));

app.use(bodyparser.urlencoded({
  extended: true
}));

app.listen(port || process.env.PORT, () => {
  console.log("Server is running on port: " + port);
});

app.get("/", (req, res) => {
  var today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0){
    res.send("Weekend Saftey Brief;");
  } else {
    res.send("Work, work, work");
  }
});

// app.post("/failure", (req, res) => {
//   res.redirect("/");
// });
