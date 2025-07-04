/*
  Warnings:

  - You are about to drop the `Hitos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hitos";

-- CreateTable
CREATE TABLE "Hito" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hito_pkey" PRIMARY KEY ("id")
);
