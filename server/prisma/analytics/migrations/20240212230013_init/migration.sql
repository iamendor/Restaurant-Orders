-- CreateTable
CREATE TABLE `Analytics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Income` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `total` DOUBLE NOT NULL,
    `analyticsId` INTEGER NOT NULL,

    UNIQUE INDEX `Income_analyticsId_key`(`analyticsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PopularProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `numberOne` INTEGER NOT NULL,
    `numberTwo` INTEGER NULL,
    `numberThree` INTEGER NULL,
    `analyticsId` INTEGER NOT NULL,

    UNIQUE INDEX `PopularProduct_analyticsId_key`(`analyticsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WaiterOfTheDay` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `waiterId` INTEGER NOT NULL,
    `analyticsId` INTEGER NOT NULL,

    UNIQUE INDEX `WaiterOfTheDay_analyticsId_key`(`analyticsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Income` ADD CONSTRAINT `Income_analyticsId_fkey` FOREIGN KEY (`analyticsId`) REFERENCES `Analytics`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PopularProduct` ADD CONSTRAINT `PopularProduct_analyticsId_fkey` FOREIGN KEY (`analyticsId`) REFERENCES `Analytics`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WaiterOfTheDay` ADD CONSTRAINT `WaiterOfTheDay_analyticsId_fkey` FOREIGN KEY (`analyticsId`) REFERENCES `Analytics`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
