var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  GetAllItems();
});

function GetAllItems() {
  console.log("Available Items:");
  connection.query("SELECT * FROM items", function(err, res) {
    if (err) throw err;
    console.log(res);
    Start(res)
  });
}

function UpdateInventory(amount, id) {
  var sqlString = `UPDATE items
                  SET stock_quantity = stock_quantity - ?
                  WHERE item_id = ?`

  connection.query(sqlString, [amount, id], function(err, res){
    if (err) throw err
   GetAllItems();
  })
}

function FindItem(dbData, chosenId){
  for(var i = 0; i < dbData.length; i++){
    if(chosenId == dbData[i].item_id){
      return dbData[i]
    }
  }
  return null
}

function Start(dbData) {
  inquirer.prompt([
    {
      name: "item",
      type: "input",
      message: "What is the ID of the item you would like to buy?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    },
    {
      name: "quantity",
      type: "input",
      message: "How many would you like to buy?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
  ])
    .then(function (answer) {
      var item = FindItem(dbData, answer.item)
      if(item.stock_quantity < answer.quantity){
        console.log("Insufficient Supply!")
        Start();
      } else {
        UpdateInventory(answer.quantity, item.item_id)
        console.log("Total Cost: $" + answer.item*answer.quantity)
      }
    })
}