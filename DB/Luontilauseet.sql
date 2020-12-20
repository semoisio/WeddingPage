
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema moisiot2022
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `moisiot2022` ;

-- -----------------------------------------------------
-- Schema moisiot2022
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `moisiot2022` DEFAULT CHARACTER SET utf8 ;
USE `moisiot2022` ;

-- -----------------------------------------------------
-- Table `moisiot2022`.`ilmoittautuneet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moisiot2022`.`ilmoittautuneet` (
  `idvieraat` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Etunimi` VARCHAR(45) NOT NULL,
  `Sukunimi` VARCHAR(45) NOT NULL,
  `sposti` VARCHAR(45) NULL DEFAULT NULL,
  `allergiat` VARCHAR(150) NULL DEFAULT NULL,
  `aikuinen` TINYINT NULL default NULL,
  PRIMARY KEY (`idvieraat`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8;
-- -----------------------------------------------------
-- Data to ilmoittautuneet
-- -----------------------------------------------------

INSERT INTO `ilmoittautuneet` (`Etunimi`,`Sukunimi`,`sposti`,`allergiat`, `aikuinen`) VALUES
('Severi', 'Moisio','severi.moisio@hotmail.fi','muna', true),
('Severi', 'Moisio','severi.moisio@gmail.fi','muna', true),
('Susanna', 'Heinonen','severi.moisio@hotmail.fi','-', false); 
-- -----------------------------------------------------
-- Table `moisiot2022`.`kirjautuminen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moisiot2022`.`kirjautuminen`(
`kayttajatunnus` varchar(45) NOT NULL,
`salasana` varchar(45) NOT NULL,
primary key (`kayttajatunnus`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Data to kirjautuminen
-- -----------------------------------------------------
INSERT INTO `kirjautuminen`(`kayttajatunnus`,`salasana`) VALUES
('Moisiot2022', 'ebksnznf1');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
