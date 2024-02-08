-- AlterTable
ALTER TABLE `Order` MODIFY `description` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `isReady` BOOLEAN NOT NULL DEFAULT false;
