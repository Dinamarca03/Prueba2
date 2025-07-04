/*
  Warnings:

  - You are about to drop the column `id_PlanMaestro` on the `PmFrente` table. All the data in the column will be lost.
  - You are about to drop the `Objetivo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlanMaestro1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlanMaestroPartidaVivienda` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tarea` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TareaEstado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TareaPrioridad` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `planMaestroId` to the `PmFrente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PlanMaestroPartidaVivienda" DROP CONSTRAINT "PlanMaestroPartidaVivienda_idPlanMaestro_fkey";

-- DropForeignKey
ALTER TABLE "PmFrente" DROP CONSTRAINT "PmFrente_id_PlanMaestro_fkey";

-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_tareaEstadoId_fkey";

-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_tareaPrioridadId_fkey";

-- AlterTable
ALTER TABLE "PmFrente" DROP COLUMN "id_PlanMaestro",
ADD COLUMN     "planMaestroId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Vivienda" ALTER COLUMN "id_Frente" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Objetivo";

-- DropTable
DROP TABLE "PlanMaestro1";

-- DropTable
DROP TABLE "PlanMaestroPartidaVivienda";

-- DropTable
DROP TABLE "Tarea";

-- DropTable
DROP TABLE "TareaEstado";

-- DropTable
DROP TABLE "TareaPrioridad";

-- CreateTable
CREATE TABLE "PlanSemanal" (
    "id_PlanSemanal" SERIAL NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "fechaInicio" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaTermino" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pmFrenteId" INTEGER NOT NULL,

    CONSTRAINT "PlanSemanal_pkey" PRIMARY KEY ("id_PlanSemanal")
);

-- CreateTable
CREATE TABLE "PlanSemanalPartida" (
    "id_PlanSemanalPartida" SERIAL NOT NULL,
    "partidaId" INTEGER NOT NULL,
    "viviendaId" INTEGER NOT NULL,
    "revisionOk" BOOLEAN NOT NULL DEFAULT false,
    "id_UsuarioRevision" INTEGER NOT NULL,
    "fechaRevision" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "causaNoCumplimientoId" INTEGER NOT NULL,
    "observacion" VARCHAR(255) NOT NULL,
    "cantidadProgramada" DECIMAL(10,2) NOT NULL,
    "cantidadEjecutada" DECIMAL(10,2) NOT NULL,
    "id_Cuadrilla" INTEGER NOT NULL,

    CONSTRAINT "PlanSemanalPartida_pkey" PRIMARY KEY ("id_PlanSemanalPartida")
);

-- CreateTable
CREATE TABLE "CausaNoCumplimiento" (
    "id_CausaNoCumplimiento" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "CausaNoCumplimiento_pkey" PRIMARY KEY ("id_CausaNoCumplimiento")
);

-- AddForeignKey
ALTER TABLE "PmFrente" ADD CONSTRAINT "PmFrente_planMaestroId_fkey" FOREIGN KEY ("planMaestroId") REFERENCES "PlanMaestro"("id_PlanMaestro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanSemanal" ADD CONSTRAINT "PlanSemanal_pmFrenteId_fkey" FOREIGN KEY ("pmFrenteId") REFERENCES "PmFrente"("id_PmFrente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanSemanalPartida" ADD CONSTRAINT "PlanSemanalPartida_partidaId_fkey" FOREIGN KEY ("partidaId") REFERENCES "Partida"("id_Partida") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanSemanalPartida" ADD CONSTRAINT "PlanSemanalPartida_viviendaId_fkey" FOREIGN KEY ("viviendaId") REFERENCES "Vivienda"("id_Vivienda") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanSemanalPartida" ADD CONSTRAINT "PlanSemanalPartida_causaNoCumplimientoId_fkey" FOREIGN KEY ("causaNoCumplimientoId") REFERENCES "CausaNoCumplimiento"("id_CausaNoCumplimiento") ON DELETE RESTRICT ON UPDATE CASCADE;
