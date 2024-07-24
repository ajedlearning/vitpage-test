/*
  Warnings:

  - Added the required column `prodDriverCatId` to the `ProductDrivers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductDrivers" ADD COLUMN     "prodDriverCatId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_prodDriverCatId_fkey" FOREIGN KEY ("prodDriverCatId") REFERENCES "ProductsDriversCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
