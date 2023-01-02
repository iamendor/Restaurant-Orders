-- DropForeignKey
ALTER TABLE `Currency` DROP FOREIGN KEY `Currency_restaurantId_fkey`;

-- AddForeignKey
ALTER TABLE `Currency` ADD CONSTRAINT `Currency_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
