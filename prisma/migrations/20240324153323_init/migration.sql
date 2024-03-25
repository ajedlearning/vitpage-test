-- AlterTable
ALTER TABLE "ProductsVersions" ADD COLUMN     "productId" INTEGER;

-- AddForeignKey
ALTER TABLE "ProductsVersions" ADD CONSTRAINT "ProductsVersions_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
