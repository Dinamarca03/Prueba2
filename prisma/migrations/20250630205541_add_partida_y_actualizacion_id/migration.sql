/*
  Warnings:

  - The primary key for the `Hito` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Hito` table. All the data in the column will be lost.
  - The primary key for the `Objetivo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Objetivo` table. All the data in the column will be lost.
  - The primary key for the `PaqueteTrabajo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PaqueteTrabajo` table. All the data in the column will be lost.
  - The primary key for the `PlanMaestro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `idProyecto` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `idUsuario` on the `PlanMaestro` table. All the data in the column will be lost.
  - The primary key for the `PlanMaestroPartidaVivienda` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PlanMaestroPartidaVivienda` table. All the data in the column will be lost.
  - The primary key for the `ProcesoConstrutivo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProcesoConstrutivo` table. All the data in the column will be lost.
  - The primary key for the `Tarea` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Tarea` table. All the data in the column will be lost.
  - The primary key for the `TareaEstado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TareaEstado` table. All the data in the column will be lost.
  - The primary key for the `TareaPrioridad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TareaPrioridad` table. All the data in the column will be lost.
  - Added the required column `id_Proyecto` to the `PlanMaestro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_Usuario` to the `PlanMaestro` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PlanMaestroPartidaVivienda" DROP CONSTRAINT "PlanMaestroPartidaVivienda_idPlanMaestro_fkey";

-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_tareaEstadoId_fkey";

-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_tareaPrioridadId_fkey";

-- AlterTable
ALTER TABLE "Hito" DROP CONSTRAINT "Hito_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_Hito" SERIAL NOT NULL,
ADD CONSTRAINT "Hito_pkey" PRIMARY KEY ("id_Hito");

-- AlterTable
ALTER TABLE "Objetivo" DROP CONSTRAINT "Objetivo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_Objetivo" SERIAL NOT NULL,
ADD CONSTRAINT "Objetivo_pkey" PRIMARY KEY ("id_Objetivo");

-- AlterTable
ALTER TABLE "PaqueteTrabajo" DROP CONSTRAINT "PaqueteTrabajo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_PaqueteTrabajo" SERIAL NOT NULL,
ADD CONSTRAINT "PaqueteTrabajo_pkey" PRIMARY KEY ("id_PaqueteTrabajo");

-- AlterTable
ALTER TABLE "PlanMaestro" DROP CONSTRAINT "PlanMaestro_pkey",
DROP COLUMN "id",
DROP COLUMN "idProyecto",
DROP COLUMN "idUsuario",
ADD COLUMN     "id_PlanMaestro" SERIAL NOT NULL,
ADD COLUMN     "id_Proyecto" INTEGER NOT NULL,
ADD COLUMN     "id_Usuario" INTEGER NOT NULL,
ADD CONSTRAINT "PlanMaestro_pkey" PRIMARY KEY ("id_PlanMaestro");

-- AlterTable
ALTER TABLE "PlanMaestroPartidaVivienda" DROP CONSTRAINT "PlanMaestroPartidaVivienda_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_PlanMaestroPartidaVivienda" SERIAL NOT NULL,
ADD CONSTRAINT "PlanMaestroPartidaVivienda_pkey" PRIMARY KEY ("id_PlanMaestroPartidaVivienda");

-- AlterTable
ALTER TABLE "ProcesoConstrutivo" DROP CONSTRAINT "ProcesoConstrutivo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_ProcesoConstrutivo" SERIAL NOT NULL,
ADD CONSTRAINT "ProcesoConstrutivo_pkey" PRIMARY KEY ("id_ProcesoConstrutivo");

-- AlterTable
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_Tarea" SERIAL NOT NULL,
ADD CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id_Tarea");

-- AlterTable
ALTER TABLE "TareaEstado" DROP CONSTRAINT "TareaEstado_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_TareaEstado" SERIAL NOT NULL,
ADD CONSTRAINT "TareaEstado_pkey" PRIMARY KEY ("id_TareaEstado");

-- AlterTable
ALTER TABLE "TareaPrioridad" DROP CONSTRAINT "TareaPrioridad_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_TareaPrioridad" SERIAL NOT NULL,
ADD CONSTRAINT "TareaPrioridad_pkey" PRIMARY KEY ("id_TareaPrioridad");

-- CreateTable
CREATE TABLE "Partida" (
    "id_Partdia" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "medida" VARCHAR(255) NOT NULL,
    "ritmo" VARCHAR(255) NOT NULL,
    "cuadrillasSugeridas" INTEGER NOT NULL,
    "hitoId" INTEGER NOT NULL,
    "procesoConstrutivoId" INTEGER NOT NULL,
    "paqueteTrabajoId" INTEGER NOT NULL,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id_Partdia")
);

-- AddForeignKey
ALTER TABLE "PlanMaestroPartidaVivienda" ADD CONSTRAINT "PlanMaestroPartidaVivienda_idPlanMaestro_fkey" FOREIGN KEY ("idPlanMaestro") REFERENCES "PlanMaestro"("id_PlanMaestro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_tareaEstadoId_fkey" FOREIGN KEY ("tareaEstadoId") REFERENCES "TareaEstado"("id_TareaEstado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_tareaPrioridadId_fkey" FOREIGN KEY ("tareaPrioridadId") REFERENCES "TareaPrioridad"("id_TareaPrioridad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_hitoId_fkey" FOREIGN KEY ("hitoId") REFERENCES "Hito"("id_Hito") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_procesoConstrutivoId_fkey" FOREIGN KEY ("procesoConstrutivoId") REFERENCES "ProcesoConstrutivo"("id_ProcesoConstrutivo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_paqueteTrabajoId_fkey" FOREIGN KEY ("paqueteTrabajoId") REFERENCES "PaqueteTrabajo"("id_PaqueteTrabajo") ON DELETE RESTRICT ON UPDATE CASCADE;
