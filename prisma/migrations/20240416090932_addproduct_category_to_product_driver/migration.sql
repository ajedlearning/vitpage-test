/*
  Warnings:

  - You are about to drop the column `prodDriverCatId` on the `ProductDrivers` table. All the data in the column will be lost.
  - You are about to drop the `ProductsDriversCategories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `prodCatId` to the `ProductDrivers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductDrivers" DROP CONSTRAINT "ProductDrivers_prodDriverCatId_fkey";

-- AlterTable
ALTER TABLE "ProductDrivers" DROP COLUMN "prodDriverCatId",
ADD COLUMN     "prodCatId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ProductsDriversCategories";

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_prodCatId_fkey" FOREIGN KEY ("prodCatId") REFERENCES "ProductsCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
