/*
  Warnings:

  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `categoria`;

-- CreateTable
CREATE TABLE `Categorias` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` BOOLEAN NOT NULL,
    `nombre_categoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `noticias` (
    `id_noticia` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` BOOLEAN NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `introduccion` VARCHAR(191) NOT NULL,
    `contenido` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `categoria_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_noticia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `noticias` ADD CONSTRAINT `noticias_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `Categorias`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
