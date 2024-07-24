-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "proDriverCatId" INTEGER;

-- CreateTable
CREATE TABLE "ProductsDriversCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductsDriversCategories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductsDriversCategories_name_key" ON "ProductsDriversCategories"("name");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_proDriverCatId_fkey" FOREIGN KEY ("proDriverCatId") REFERENCES "ProductsDriversCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
