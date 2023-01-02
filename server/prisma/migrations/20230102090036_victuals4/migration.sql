/*
  Warnings:

  - You are about to drop the column `mealId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `victualId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_mealId_fkey`;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `mealId`,
    ADD COLUMN `victualId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_victualId_fkey` FOREIGN KEY (`victualId`) REFERENCES `Victual`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
