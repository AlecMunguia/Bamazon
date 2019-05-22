CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE items (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Shiba Inu", "Dogs", 1200, 12);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Husky", "Dogs", 800, 10);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Corgie", "Dogs", 1100, 13);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Siamese", "Cats", 500, 8);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Tabby", "Cats", 50, 60);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Scottish Fold", "Cats", 1000, 9);