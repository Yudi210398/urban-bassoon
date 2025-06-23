/*
  Warnings:

  - You are about to drop the `Barang` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "boking" DROP CONSTRAINT "boking_barangId_fkey";

-- DropTable
DROP TABLE "Barang";

-- CreateTable
CREATE TABLE "barang" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,

    CONSTRAINT "barang_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "boking" ADD CONSTRAINT "boking_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "barang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
