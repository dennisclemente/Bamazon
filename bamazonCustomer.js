
var mysql = require('mysql');
var inquirer = require('inquirer');

//connection to mysql workbench
  var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "", //username from mysql workbench
  password: "", //password from mysql workbench
  database: "bamazon"
  });

  connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
  showCatalog();
  });

  function showCatalog() {
    connection.query('SELECT * FROM products', function(err, res) {
       if(err) throw err;
        for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + ' | ' + res[i].productName + ' | ' + res[i].departmentName + ' | ' + res[i].price + ' | ' + res[i].stockQuantity); 
  }
        console.log("-----------------------------------"); 
  });
}
    //creates the function to be run when user is asked type of item and quantity to buy
  inquirer.prompt([{
      type: 'input',
      message: "Enter ID for item you wish to buy",
      name: 'id'
    },
    {
      name: 'input',
      type: 'stockQuantity',
      message: "Interested? How many would you like to buy?"  
  
    }])
    .then(function (order) {
    var quantity = order.quantity;
    var id = order.id;
    connection.query("SELECT * FROM products = id", function(err, chosenItem) {
    if (chosenItem[0].stockQuantity - quantity >= 0) {           
        console.log("We have your item! I'll deliver it now!(chosenItem[0].productName");
        // console.log(" Availability: " chosenItem[0].stockQuantity + " order: " quantity);
        console.log("You will be charged "(order.quantity * chosenItem[0].price) +  " dollars. Thank you.");
          connection.query('UPDATE products =' WHERE id=?, chosenItem[0].stockQuantity - quantity[0]),

    function(showCatalog) {
      if (err) throw err;
      //    showCatalog();
      // };  
    } 
      else {
      console.log("Insufficient quantity. However, we have " chosenItem[0].stockQuantity);
      showCatalog();
    }
  };

showCatalog();
}
