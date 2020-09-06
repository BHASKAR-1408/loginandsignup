const mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "loginandsignup",
  multipleStatements: true,
});

con.connect((err) => {
  if (err) throw err;
  console.log("connected with database");
});

// let createTable =
//   "create table if not exists signup (firstname varchar(50) ,lastname varchar (20), dob varchar(100),age int,gender varchar(10),emailid varchar(30),password varchar(20))";
// con.query(createTable, (err, result) => {
//   if (err) throw err;
//   console.log("Table Created!");
// });

module.exports = con;
