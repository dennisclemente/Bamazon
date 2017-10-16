
DROP TABLE if exists products;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) not NULL,
  departmentName VARCHAR(45) not NULL,
  price INT (20) NOT NULL,
  stockQuantity INT not NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Leonardo Da Vinci", "Books", 12.99, 500);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Amazon Echo", "Smart Home", 99.99, 300);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Macbook Pro", "Computers", 1500.99, 200);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("70-inch 4K HDTV", "TV", 1300.99, 100);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Hitchcock Blu-Ray Collection", "Movies", 200.99, 60);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Queen Bedsheets", "Home", 100.99, 1200);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Nike Shoes", "Men Shoes", 180.99, 100);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("White Sneakers", "Women Shoes", 70.99, 120);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Pet Leash", "Pets", 20.99, 3000);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Microwave Oven", "Appliances", 50.99, 400);


