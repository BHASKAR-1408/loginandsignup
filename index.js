const express = require("express");
const app = express();
const con = require("./connection");
app.use(express.json());

// end point for getting data from the database

// http://localhost:4000/login

app.post("/login", (req, res) => {
  let emailAndPass = req.body;
  let emailid = emailAndPass.emailid;
  let password = emailAndPass.password;

  con.query(
    "select * from signup where emailid = ? and password = ?",
    [emailid, password],
    (err, result) => {
      if (err) throw err;
      res.send(result);
      console.log("you are succesfully login into your account");
    }
  );
});

//endpoint for signup

// http://localhost:4000/signup

app.post("/signup", (req, res) => {
  let accountData = req.body;
  let firstname = accountData.firstname;
  let lastname = accountData.lastname;
  let age = accountData.age;
  let dob = accountData.dob;
  let gender = accountData.gender;
  let emailid = accountData.emailid;
  let password = accountData.password;

  con.query(
    "insert into signup(firstname,lastname,dob,age,gender,emailid,password) values(?,?,?,?,?,?,?)",
    [firstname, lastname, dob, age, gender, emailid, password],
    (err, result) => {
      if (err) throw err;
      res.send("sucessfully created your account");
      console.log("sucessfully created your account");
    }
  );
});

app.listen(4000, (err) => {
  if (err) throw err;
  console.log("hello world");
});
