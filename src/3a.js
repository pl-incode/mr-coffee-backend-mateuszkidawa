const express = require("express");
const bodyParser = require("body-parser");
const myData = require("./data");
const app = express();
const sha256 = require("js-sha256");
const mustacheExpress = require("mustache-express");

app.set("views", `${__dirname}/../views`);
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("welcome", {
    Welcome: "Welcome on our website",
    title: "Project 3a",
  });
});

app.get("/users", (req, res) => {
  const usersNumber = [...myData.users];
  for (let i = 0; i < usersNumber.length; i++) {
    usersNumber[i].idNumber = i;
  }
  res.json(myData.users);
});

app.get("/schedules", (req, res) => {
  res.json(myData.schedules); 
});

app.get("/users/:id", (req, res) => {
  const idNumber = req.params.id;
  if (idNumber >= myData.users.length) {
    res.json("No such a user");
    return;
  }
  res.json(myData.users[idNumber]);
});

app.get("/users/:id/schedules", (req, res) => {
  const idNumber = req.params.id;
  if (idNumber >= myData.users.length) {
    res.json("No such a user");
    return;
  }
  const arr = [];
  for (let i = 0; i < myData.schedules.length; i++) {
    if (idNumber == myData.schedules[i].user_id) {
      arr.push(myData.schedules[i]);
    }
  }
  if (arr.length < 1) {
    res.json("zapisz się na termin");
    return;
  }
  res.json(arr);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  const b = {
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    email: newUser.email,
    password: sha256(newUser.password),
  };
  myData.users.push(b);
  res.json(b);
});

app.post("/schedules", (req, res) => {
  const newSchedule = req.body;
  const b = {
    user_id: parseInt(newSchedule.user_id),
    day: parseInt(newSchedule.day),
    start_at: newSchedule.start_at,
    end_at: newSchedule.end_at,
  };
  myData.schedules.push(b);
  res.json(b);
});

app.listen(3000, () => {
  console.log(`http://localhost:3000/ is waiting for requests.`);
});

