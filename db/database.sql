
--DATABASE CREADA EN planetscale y en railway (El Back está desplegado en railway):
-- https://app.planetscale.com/jcantero1998/setcounterdb
-- https://railway.app/project/d291fdce-e33f-47f8-8cb2-f6324f75ce11/plugin/e2722933-f107-4a10-a92e-8673669b5f3b/data

-- CREATE DATABASE IF NOT EXISTS setcounterdb;

-- USE setcounterdb;

CREATE TABLE rutinas (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(255) DEFAULT NULL,
  color VARCHAR(45) DEFAULT NULL,
  archivado VARCHAR(45) DEFAULT NULL,
  creador VARCHAR(45) NOT NULL,
  PRIMARY KEY(id)
);
DESCRIBE rutinas;

CREATE TABLE ejercicios (
  id INT(11) NOT NULL AUTO_INCREMENT,
  rutina INT(11) NOT NULL,
  nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(255) DEFAULT NULL,
  color VARCHAR(45) DEFAULT NULL,
  archivado VARCHAR(45) DEFAULT NULL,
  creador VARCHAR(45) NOT NULL,
  series VARCHAR(45) DEFAULT NULL,
  repeticiones VARCHAR(45) DEFAULT NULL,
  peso VARCHAR(45) DEFAULT NULL,
  totaloporlado VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY(id)
);
DESCRIBE ejercicios;


-- INSERT INTO employee values 
--   (1, 'Ryan Ray', 20000),
--   (2, 'Joe McMillan', 40000),
--   (3, 'John Carter', 50000);

SELECT * FROM rutinas;
