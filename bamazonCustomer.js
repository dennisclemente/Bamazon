
var mysql = require('mysql');
var inquirer = require('inquirer');

//connection to mysql workbench
  var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "", //username from mysql workbench
  password: "", //password from mysql workbench
  database: "Bamazon"
  });

  connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  });

  // connection.query("SELECT id, productName," price FROM products", function(ee, results, fields) {
  connection.query('SELECT itemId, productName, price, stockQuantity FROM PRODUCTS', function(err, res){
  if(err) throw err;
  console.log('Check out our selection...\n');
  console.log("\n //========================================================\\ \n");
    console.log(result);
    console.log("\n \\=======================================================//");
    query();
  });
            
  //creates the function to be run when user is asked type of item and quantity to buy
function query() {
  inquirer.prompt([
    {
      name: "id",
      message: "Enter ID number for item you wish to buy",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
        }
      },
    {
      name: "quantity",
      message: "Interested? How many would you like to buy?"  
    }

]).then(function (items) {
    var quantity = items.quantity;
    var idInput = items.id;
    purchase(idInput, quantity);  
  });
}

function purchase(id, quantity) {
 //connects to the mysql database and picks item user selected above based on the item id number entered
  connection.query('SELECT * FROM products WHERE ItemId = ' + id, function(error, response) {
    if (error) { console.log(error) };

    
    if (quantity <= response[0].stock_quantity) {
       
        var totalCost = response[0].price * quantity;
        
        console.log("\n We have what you need! I'll have your order right out!");
        console.log("Your total cost for " + quantity + " " + response[0].product_name + " is $" + totalCost + ". Hehehe Thaank You! \n");
        
        connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quantity + ' WHERE id = ' + id);
        
        process.exit()
    } else 
        console.log("Insufficient quantity" + response[0].product_name + " \n ");
        
        process.exit()
    };        
});
};