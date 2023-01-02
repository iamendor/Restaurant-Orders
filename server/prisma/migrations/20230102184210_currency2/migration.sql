-- AlterTable
ALTER TABLE `Meal` ADD COLUMN `currencyId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_currencyId_fkey` FOREIGN KEY (`currencyId`) REFERENCES `Currency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
