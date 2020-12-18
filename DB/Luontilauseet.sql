-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Moisiot2022
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Moisiot2022` ;

-- -----------------------------------------------------
-- Schema Moisiot2022
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Moisiot2022` DEFAULT CHARACTER SET utf8 ;
USE `Moisiot2022` ;

-- -----------------------------------------------------
-- Table `Moisiot2022`.`ilmoittautuneet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Moisiot2022`.`ilmoittautuneet` (
  `idvieraat` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Etunimi` VARCHAR(45) NOT NULL,
  `Sukunimi` VARCHAR(45) NOT NULL,
  `sposti` VARCHAR(45) NULL,
  `allergiat` VARCHAR(150) NULL,
  PRIMARY KEY (`idvieraat`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;