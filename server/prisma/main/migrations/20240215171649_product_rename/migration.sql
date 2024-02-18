/*
  Warnings:

  - You are about to drop the column `victualId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Victual` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_victualId_fkey`;

-- DropForeignKey
ALTER TABLE `Victual` DROP FOREIGN KEY `Victual_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Victual` DROP FOREIGN KEY `Victual_restaurantId_fkey`;

-- DropIndex
DROP INDEX `Task_baseId_fkey` ON `Task`;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `victualId`,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Victual`;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `restaurantId` INTEGER NOT NULL,
    `categoryId` INTEGER NULL,

    UNIQUE INDEX `Product_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
