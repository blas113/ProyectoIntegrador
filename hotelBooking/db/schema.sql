-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hotelbooking
-- -----------------------------------------------------
-- CREATE SCHEMA IF NOT EXISTS `hotelbooking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `0223TDPROM1C2LAED0522FT_GRUPO3` ;

-- -----------------------------------------------------
-- Table `caracteristicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `caracteristicas` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `paises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `paises` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `codigo` VARCHAR(2) NULL DEFAULT NULL,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ciudades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ciudades` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  `pais_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK4p6rph0gj1s70nntpch75tob4` (`pais_id` ASC) VISIBLE,
  CONSTRAINT `FK4p6rph0gj1s70nntpch75tob4`
    FOREIGN KEY (`pais_id`)
    REFERENCES `paises` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `direcciones` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(100) NULL DEFAULT NULL,
  `nro_puerta` VARCHAR(10) NULL DEFAULT NULL,
  `ciudad_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK2v221eyetogmaqm4olx4pj4lj` (`ciudad_id` ASC) VISIBLE,
  CONSTRAINT `FK2v221eyetogmaqm4olx4pj4lj`
    FOREIGN KEY (`ciudad_id`)
    REFERENCES `ciudades` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `productos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(1250) NULL DEFAULT NULL,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  `precio_noche` DOUBLE NULL DEFAULT NULL,
  `valoracion` DOUBLE NULL DEFAULT NULL,
  `categoria_id` BIGINT NULL DEFAULT NULL,
  `direccion_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK2fwq10nwymfv7fumctxt9vpgb` (`categoria_id` ASC) VISIBLE,
  INDEX `FK6vp6jy1fkxspaykvcvvx0ydey` (`direccion_id` ASC) VISIBLE,
  CONSTRAINT `FK2fwq10nwymfv7fumctxt9vpgb`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `categorias` (`id`),
  CONSTRAINT `FK6vp6jy1fkxspaykvcvvx0ydey`
    FOREIGN KEY (`direccion_id`)
    REFERENCES `direcciones` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `imagenes` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  `producto_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKhylof04iou23s0pb9ab6pbd4j` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `FKhylof04iou23s0pb9ab6pbd4j`
    FOREIGN KEY (`producto_id`)
    REFERENCES `productos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `producto_has_caracteristica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `producto_has_caracteristica` (
  `producto_id` BIGINT NOT NULL,
  `caracteristica_id` BIGINT NOT NULL,
  INDEX `FKenkwmp8vrntp5og14rcobp04t` (`caracteristica_id` ASC) VISIBLE,
  INDEX `FKm6nbigkx0dd39bbottxhminh3` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `FKenkwmp8vrntp5og14rcobp04t`
    FOREIGN KEY (`caracteristica_id`)
    REFERENCES `caracteristicas` (`id`),
  CONSTRAINT `FKm6nbigkx0dd39bbottxhminh3`
    FOREIGN KEY (`producto_id`)
    REFERENCES `productos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `roles` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `apellido` VARCHAR(50) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `role_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKp56c1712k691lhsyewcssf40f` (`role_id` ASC) VISIBLE,
  CONSTRAINT `FKp56c1712k691lhsyewcssf40f`
    FOREIGN KEY (`role_id`)
    REFERENCES `roles` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hotelbooking`.`reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservas` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `check_in` DATE NULL DEFAULT NULL,
  `check_out` DATE NULL DEFAULT NULL,
  `hora_llegada` TIME NULL DEFAULT NULL,
  `producto_id` BIGINT NULL DEFAULT NULL,
  `usuario_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKemr5mamcwq9ui20y08devm32q` (`producto_id` ASC) VISIBLE,
  INDEX `FKt0eya03ir29m1fdwqqti8xq2v` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `FKemr5mamcwq9ui20y08devm32q`
    FOREIGN KEY (`producto_id`)
    REFERENCES `productos` (`id`),
  CONSTRAINT `FKt0eya03ir29m1fdwqqti8xq2v`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;