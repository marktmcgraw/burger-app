DROP DATABASE IF EXISTS burgers_DB;
CREATE database burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)


);

