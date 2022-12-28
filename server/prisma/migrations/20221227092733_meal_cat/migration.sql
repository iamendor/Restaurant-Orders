-- DropForeignKey
ALTER TABLE `Meal` DROP FOREIGN KEY `Meal_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Meal` MODIFY `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
