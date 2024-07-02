/*
  Warnings:

  - You are about to drop the column `imageProduct` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "imageProduct",
ADD COLUMN     "productImage" TEXT NOT NULL DEFAULT 'default-image.jpg';
