var mysql = require("mysql");
var inquirer = require("inquirer");
// var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: //username from mysql workbench
  password:  //password from mysql workbench
  database: "bamazon"
  });

  connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
  pickItem();
  });

  function pickItem() {
    // var items = [];
    connection.query('SELECT * FROM products', function(err, res) {
       if(err) throw err;
        for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + ' | ' + res[i].productName + ' | ' + res[i].departmentName + ' | ' + res[i].price + ' | ' + res[i].stockQuantity); 
  }
        console.log("-----------------------------------"); 
  });        connection.end();

}
    //creates the function to be run when user is asked type of item and quantity to buy
  function pickItem() {
      inquirer.prompt([
    {
      type: 'input',
      message: "Enter ID for item you wish to buy",
      name: 'id'
    },
    {
      name: 'input',
      type: 'stockQuantity',
      message: "Interested? How many would you like to buy?"  
    }
    ]).then(function(orderItem) {
    var query = connection.query('SELECT * FROM products')
      itemId: orderItem.id
    }, function(err, res) {
       console.log('Place your order now');
       var quantity = res[0].stockQuantity - orderItem.stockQuantity;
     if (orderItem.id, order.stockQuantity - quantity <= res[0].stockQuantity) {            
        console.log("We have your item! I'll deliver it now!");
        update(quantity, orderItem.id);
        console.log("You will be charged: $" + orderItem.stockQuantity * res[0].price);
     } else {
        console.log("Insufficient quantity. However, we have ", order[0].stockQuantity)
        update(quantity, orderItem.id);
    } 
  });

      function update(quantity, id) {
      connection.query('UPDATE products WHERE id = ?, orderItem[0].stockQuantity - quantity[0]')
      if (err) {
        throw err;
      }
    }
  };
