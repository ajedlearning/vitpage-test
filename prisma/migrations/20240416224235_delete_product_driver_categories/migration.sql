/*
  Warnings:

  - You are about to drop the column `prodDriverCatId` on the `ProductDrivers` table. All the data in the column will be lost.
  - You are about to drop the column `proDriverCatId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the `ProductsDriversCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductDrivers" DROP CONSTRAINT "ProductDrivers_prodDriverCatId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_proDriverCatId_fkey";

-- AlterTable
ALTER TABLE "ProductDrivers" DROP COLUMN "prodDriverCatId";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "proDriverCatId";

-- DropTable
DROP TABLE "ProductsDriversCategories";
