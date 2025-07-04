/*
  Warnings:

  - The primary key for the `Partida` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_Partdia` on the `Partida` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_pkey",
DROP COLUMN "id_Partdia",
ADD COLUMN     "id_Partida" SERIAL NOT NULL,
ADD CONSTRAINT "Partida_pkey" PRIMARY KEY ("id_Partida");
