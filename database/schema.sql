DROP DATABASE IF EXISTS every3;

CREATE DATABASE every3;

USE every3;

CREATE TABLE sentences (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sentence VARCHAR(500)
);

INSERT INTO sentences (sentence) VALUE ('iamyourlyftdriver');
