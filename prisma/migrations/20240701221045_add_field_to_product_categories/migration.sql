/*
  Warnings:

  - Added the required column `categoryImage` to the `ProductsCategories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductsCategories" ADD COLUMN     "categoryImage" TEXT NOT NULL;
