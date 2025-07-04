/*
  Warnings:

  - You are about to drop the column `id_Vivienda` on the `PmProgramacion` table. All the data in the column will be lost.
  - Added the required column `viviendaId` to the `PmProgramacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PmProgramacion" DROP COLUMN "id_Vivienda",
ADD COLUMN     "viviendaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PmProgramacion" ADD CONSTRAINT "PmProgramacion_viviendaId_fkey" FOREIGN KEY ("viviendaId") REFERENCES "Vivienda"("id_Vivienda") ON DELETE RESTRICT ON UPDATE CASCADE;
