-- CreateTable
CREATE TABLE "ProductsDriversCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductsDriversCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductDrivers" (
    "id" SERIAL NOT NULL,
    "operatingSystemsId" INTEGER,
    "prodDriverCatId" INTEGER NOT NULL,
    "prodId" INTEGER NOT NULL,
    "typeDriverId" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductDrivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DriverTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DriverTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperatingSystems" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OperatingSystems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductsDriversCategories_name_key" ON "ProductsDriversCategories"("name");

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_operatingSystemsId_fkey" FOREIGN KEY ("operatingSystemsId") REFERENCES "OperatingSystems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_prodDriverCatId_fkey" FOREIGN KEY ("prodDriverCatId") REFERENCES "ProductsDriversCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDrivers" ADD CONSTRAINT "ProductDrivers_typeDriverId_fkey" FOREIGN KEY ("typeDriverId") REFERENCES "DriverTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
