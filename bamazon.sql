CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE items(
    item_id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
);