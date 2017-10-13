# Bamazon

A shopping storefront with node.js and MySQL skills. The app takes in orders from customers and deplete stock from the store's inventory. 
It has the MySQL and Inquirer npm packages for data input and storage.

The app prompts users with two messages.

   * The first asks them the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.
Once customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.
   * Otherwise, the app logs a phrase like `Insufficient quantity!`, and then prevent the order from going through.
   However, if the store _does_ have enough of the product, it fulfills the customer's order.
   * Once the update goes through, the customer gets the total cost of their purchase.





