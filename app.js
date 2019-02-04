//jshint esversion:6
const express = require("express");
const parser = require("body-parser");
const date = require(__dirname + "/date.js");

const port = 3000;
const app = express();
app.use(parser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(port || process.env.PORT, () => {
  console.log("Server running on port " + port);
});

var items = [];
var workItems = [];

app.get("/", (req, res) => {
  var day = date.getDay();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", (req, res) => {
  if (req.body.list === "Work") {
    workItems.push(req.body.newItem)
    res.redirect("/work");
  } else {
    items.push(req.body.newItem);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", {
    listTitle: "WorkList",
    newListItems: workItems
  });
});

app.post("/work", (req, res) => {
  workItems.push(req.body.newItem);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about");
});
