CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE products (
  itemId INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) NULL,
  departmentName DECIMAL(10,2) NULL,
  price DECIMAL (5,2) NOT NULL,
  stockQuantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00001, Leonardo_Da_Vinci, Books, $12.99, 500);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00002, Amazon Echo, Smart Home, $99.99, 300);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00003, Macbook Pro, Computers, $1500.99, 200);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00004, Seventy-inch 4K HDTV, TV, $1300.99, 100);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00005, Hitchcock Blu-Ray Collection, Movies, $200.99, 60);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00006, Queen Bedsheets, Home, $100.99, 1200);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00007, Nike Shoes, Men Shoes, $180.99, 100);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00008, White Sneakers, Women Shoes, $70.99, 120);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (00009, Pet Leash, Pets, $20.99, 3000);

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES (000010, Microwave Oven, Appliances, $50.99, 400);


