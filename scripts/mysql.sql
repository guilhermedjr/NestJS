--SCRIPTS PARA RODAR NO WORKBENCH

CREATE SCHEMA `petshop`;

CREATE TABLE `petshop`. `product` (
    `id` INT NOT NULL,
    `title` VARCHAR(80) NULL,
    `description` TEXT(4000) NULL
    PRIMARY KEY(`id`)
);