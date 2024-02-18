/*
  Warnings:

  - You are about to drop the `BaseTask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_baseId_fkey`;

-- DropIndex
DROP INDEX `Restaurant_currencyId_fkey` ON `Restaurant`;

-- DropTable
DROP TABLE `BaseTask`;
