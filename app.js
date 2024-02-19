import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let newItems = [];
app.get("/", (req, res) => {
  res.status(200);
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date();
  let currentDate = today.toLocaleDateString("en-US", options);
  res.render("list", { dayotday: currentDate, newListItems: newItems });
});

app.post("/", (req, res) => {
  let newItem = req.body.newItem;
  newItems.push(newItem);
  res.redirect("/");
});
app.listen(3001, () => {
  console.log("Port is working fine ");
});
