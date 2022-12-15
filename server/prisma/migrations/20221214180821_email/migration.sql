/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Waiter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Waiter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Restaurant` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Waiter` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Restaurant_email_key` ON `Restaurant`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Waiter_email_key` ON `Waiter`(`email`);
