/*
  Warnings:

  - You are about to drop the `Currency` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `currencyId` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Restaurant` DROP FOREIGN KEY `Restaurant_currencyId_fkey`;

-- AlterTable
ALTER TABLE `Restaurant` MODIFY `currencyId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Currency`;
