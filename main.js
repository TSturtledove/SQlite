"use strict";



const sqlite3 = require("sqlite3").verbose(); //verbose method helps you track errors down a little better
const db = new sqlite3.Database("example.sqlite");

const dropEmployees = () => {
  db.run(`DROP TABLE employees`);
};
// dropEmployees();//this lets us clear the table
// console.log(db);

db.run("CREATE TABLE IF NOT EXISTS employees (id INT, firstname TEXT, lastname TEXT, salary INT, dept TEXT)");//could do stuff like this id INT AUTO INCREMINT

const populateEmployees = () => {

  const {list} = require("./employees.json");//need the "./" to tell it to look for the file.
  // console.log(list);

  list.forEach(each => {
    db.run(`INSERT INTO employees VALUES (
      ${each.id},
      "${each.firstName}",
      "${each.lastName}",
      ${each.salary},
      "${each.dept}"
    )`)
  })

};
populateEmployees();
