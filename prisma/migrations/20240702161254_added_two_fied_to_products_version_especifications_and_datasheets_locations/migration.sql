-- AlterTable
ALTER TABLE "ProductsVersions" ADD COLUMN     "datasheetsLocation" TEXT NOT NULL DEFAULT 'datasheetdefault.pdf',
ADD COLUMN     "espeficications" TEXT NOT NULL DEFAULT 'procesador, discoduro, memoria ram';
