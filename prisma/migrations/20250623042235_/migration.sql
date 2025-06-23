-- CreateTable
CREATE TABLE "Barang" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "session" INTEGER NOT NULL,
    "barangId" INTEGER NOT NULL,

    CONSTRAINT "boking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "boking" ADD CONSTRAINT "boking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boking" ADD CONSTRAINT "boking_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "Barang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
