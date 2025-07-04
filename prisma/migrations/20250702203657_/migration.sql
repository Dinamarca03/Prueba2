/*
  Warnings:

  - You are about to drop the column `id_PmFrentePartida` on the `PmProgramacion` table. All the data in the column will be lost.
  - Added the required column `pmFrentePartidaId` to the `PmProgramacion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PmProgramacion" DROP CONSTRAINT "PmProgramacion_id_PmFrentePartida_fkey";

-- AlterTable
ALTER TABLE "PmProgramacion" DROP COLUMN "id_PmFrentePartida",
ADD COLUMN     "pmFrentePartidaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PmProgramacion" ADD CONSTRAINT "PmProgramacion_pmFrentePartidaId_fkey" FOREIGN KEY ("pmFrentePartidaId") REFERENCES "PmFrentePartida"("id_PmFrentePartida") ON DELETE RESTRICT ON UPDATE CASCADE;
