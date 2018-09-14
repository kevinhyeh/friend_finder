CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(45) NOT NULL,
    answers VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);
