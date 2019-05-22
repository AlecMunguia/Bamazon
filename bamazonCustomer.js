var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3030,
    user: "root",
    password: "password",
    database: "greatBay_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    Start();
});

function start() {
    inquirer.prompt([
        name: "item",
        type: "input",
        message: "What is the ID of the item you would like to buy?"
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?"
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
    ])
    .then(function(answer) {
         
    })
}