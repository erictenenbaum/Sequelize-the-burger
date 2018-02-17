CREATE database burgers_db;
USE burgers_db;

CREATE table burgers (
id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured INTEGER NOT NULL
);

