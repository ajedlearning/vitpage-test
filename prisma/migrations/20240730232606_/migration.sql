/*
  Warnings:

  - The primary key for the `DriverTypes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OperatingSystems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProductDrivers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProductsCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProductsVersions` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ProductDrivers" DROP CONSTRAINT "ProductDrivers_operatingSystemsId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDrivers" DROP CONSTRAINT "ProductDrivers_prodCatId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDrivers" DROP CONSTRAINT "ProductDrivers_prodId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDrivers" DROP CONSTRAINT "ProductDrivers_typeDriverId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsVersions" DROP CONSTRAINT "ProductsVersions_productId_fkey";

-- AlterTable
ALTER TABLE "DriverTypes" DROP CONSTRAINT "DriverTypes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DriverTypes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "DriverTypes_id_seq";

-- AlterTable
ALTER TABLE "OperatingSystems" DROP CONSTRAINT "OperatingSystems_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "OperatingSystems_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "OperatingSystems_id_seq";

-- AlterTable
ALTER TABLE "ProductDrivers" DROP CONSTRAINT "ProductDrivers_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "operatingSystemsId" SET DATA TYPE TEXT,
ALTER COLUMN "prodId" SET DATA TYPE TEXT,
ALTER COLUMN "typeDriverId" SET DATA TYPE TEXT,
ALTER COLUMN "prodCatId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductDrivers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProductDrivers_id_seq";

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "categoryId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Products_id_seq";

-- AlterTable
ALTER TABLE "ProductsCategories" DROP CONSTRAINT "ProductsCategories_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductsCategories_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProductsCategories_id_seq";

-- AlterTable
ALTER TABLE "ProductsVersions" DROP CONSTRAINT "ProductsVersions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductsVersions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProductsVersions_id_seq";

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_operatingSystemsId_fkey" FOREIGN KEY ("operatingSystemsId") REFERENCES "OperatingSystems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_prodCatId_fkey" FOREIGN KEY ("prodCatId") REFERENCES "ProductsCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_typeDriverId_fkey" FOREIGN KEY ("typeDriverId") REFERENCES "DriverTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductsCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsVersions" ADD CONSTRAINT "ProductsVersions_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
