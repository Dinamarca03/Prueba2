/*
  Warnings:

  - You are about to drop the column `id_Cuadrilla` on the `PmFrentePartida` table. All the data in the column will be lost.
  - You are about to drop the column `id_Frente` on the `PmFrentePartida` table. All the data in the column will be lost.
  - You are about to drop the column `id_Partida` on the `PmFrentePartida` table. All the data in the column will be lost.
  - Added the required column `proyectoId` to the `PlanMaestro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsableId` to the `PlanSemanalPartida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuadrilla` to the `PmFrentePartida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frenteId` to the `PmFrentePartida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partidaId` to the `PmFrentePartida` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PmFrentePartida" DROP CONSTRAINT "PmFrentePartida_id_Frente_fkey";

-- DropForeignKey
ALTER TABLE "PmFrentePartida" DROP CONSTRAINT "PmFrentePartida_id_Partida_fkey";

-- AlterTable
ALTER TABLE "PlanMaestro" ADD COLUMN     "fechaInicio" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "proyectoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PlanSemanalPartida" ADD COLUMN     "responsableId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PmFrentePartida" DROP COLUMN "id_Cuadrilla",
DROP COLUMN "id_Frente",
DROP COLUMN "id_Partida",
ADD COLUMN     "cuadrilla" INTEGER NOT NULL,
ADD COLUMN     "frenteId" INTEGER NOT NULL,
ADD COLUMN     "partidaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PlanMaestro" ADD CONSTRAINT "PlanMaestro_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id_Proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmFrentePartida" ADD CONSTRAINT "PmFrentePartida_partidaId_fkey" FOREIGN KEY ("partidaId") REFERENCES "Partida"("id_Partida") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmFrentePartida" ADD CONSTRAINT "PmFrentePartida_frenteId_fkey" FOREIGN KEY ("frenteId") REFERENCES "PmFrente"("id_PmFrente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanSemanalPartida" ADD CONSTRAINT "PlanSemanalPartida_responsableId_fkey" FOREIGN KEY ("responsableId") REFERENCES "Usuario"("id_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
