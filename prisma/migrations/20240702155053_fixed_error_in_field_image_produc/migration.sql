/*
  Warnings:

  - You are about to drop the column `imageProdut` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "imageProdut",
ADD COLUMN     "imageProduct" TEXT NOT NULL DEFAULT 'default-image.jpg';
