/*
  Warnings:

  - You are about to drop the column `createdAt` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `esActivo` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `fechaFin` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `fechaInicio` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `id_Proyecto` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `id_Usuario` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `PlanMaestro` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `PlanMaestro` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PlanMaestroPartidaVivienda" DROP CONSTRAINT "PlanMaestroPartidaVivienda_idPlanMaestro_fkey";

-- AlterTable
ALTER TABLE "PlanMaestro" DROP COLUMN "createdAt",
DROP COLUMN "esActivo",
DROP COLUMN "fechaFin",
DROP COLUMN "fechaInicio",
DROP COLUMN "id_Proyecto",
DROP COLUMN "id_Usuario",
DROP COLUMN "nombre",
DROP COLUMN "updatedAt",
ALTER COLUMN "descripcion" DROP DEFAULT;

-- CreateTable
CREATE TABLE "PlanMaestro1" (
    "id_PlanMaestro" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL DEFAULT '',
    "fechaInicio" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_Usuario" INTEGER NOT NULL,
    "id_Proyecto" INTEGER NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanMaestro1_pkey" PRIMARY KEY ("id_PlanMaestro")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id_Usuario" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_Usuario")
);

-- CreateTable
CREATE TABLE "EquipoTrabajo" (
    "id_EquipoTrabajo" SERIAL NOT NULL,
    "planMaestroId" INTEGER NOT NULL,

    CONSTRAINT "EquipoTrabajo_pkey" PRIMARY KEY ("id_EquipoTrabajo")
);

-- CreateTable
CREATE TABLE "EquipoCargo" (
    "id_EquipoCargo" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "EquipoCargo_pkey" PRIMARY KEY ("id_EquipoCargo")
);

-- CreateTable
CREATE TABLE "PmEquipo" (
    "id_PmEquipo" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "equipoTrabajoId" INTEGER NOT NULL,
    "equipoCargoId" INTEGER NOT NULL,

    CONSTRAINT "PmEquipo_pkey" PRIMARY KEY ("id_PmEquipo")
);

-- CreateTable
CREATE TABLE "PmFrente" (
    "id_PmFrente" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "id_PlanMaestro" INTEGER NOT NULL,

    CONSTRAINT "PmFrente_pkey" PRIMARY KEY ("id_PmFrente")
);

-- CreateTable
CREATE TABLE "PmFrentePartida" (
    "id_PmFrentePartida" SERIAL NOT NULL,
    "orden" INTEGER NOT NULL,
    "id_Partida" INTEGER NOT NULL,
    "id_Cuadrilla" INTEGER NOT NULL,
    "id_Frente" INTEGER NOT NULL,

    CONSTRAINT "PmFrentePartida_pkey" PRIMARY KEY ("id_PmFrentePartida")
);

-- CreateTable
CREATE TABLE "PmProgramacion" (
    "id_PmProgramacion" SERIAL NOT NULL,
    "fechaInicio" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cantidad" INTEGER NOT NULL,
    "id_Vivienda" INTEGER NOT NULL,
    "id_PmFrentePartida" INTEGER NOT NULL,

    CONSTRAINT "PmProgramacion_pkey" PRIMARY KEY ("id_PmProgramacion")
);

-- CreateTable
CREATE TABLE "Vivienda" (
    "id_Vivienda" SERIAL NOT NULL,
    "numero" VARCHAR(255) NOT NULL,
    "id_Frente" INTEGER NOT NULL,
    "modeloViviendaId" INTEGER NOT NULL,

    CONSTRAINT "Vivienda_pkey" PRIMARY KEY ("id_Vivienda")
);

-- CreateTable
CREATE TABLE "Proyecto" (
    "id_Proyecto" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("id_Proyecto")
);

-- CreateTable
CREATE TABLE "ModeloVivienda" (
    "id_ModeloVivienda" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ModeloVivienda_pkey" PRIMARY KEY ("id_ModeloVivienda")
);

-- AddForeignKey
ALTER TABLE "PlanMaestroPartidaVivienda" ADD CONSTRAINT "PlanMaestroPartidaVivienda_idPlanMaestro_fkey" FOREIGN KEY ("idPlanMaestro") REFERENCES "PlanMaestro1"("id_PlanMaestro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipoTrabajo" ADD CONSTRAINT "EquipoTrabajo_planMaestroId_fkey" FOREIGN KEY ("planMaestroId") REFERENCES "PlanMaestro"("id_PlanMaestro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmEquipo" ADD CONSTRAINT "PmEquipo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmEquipo" ADD CONSTRAINT "PmEquipo_equipoTrabajoId_fkey" FOREIGN KEY ("equipoTrabajoId") REFERENCES "EquipoTrabajo"("id_EquipoTrabajo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmEquipo" ADD CONSTRAINT "PmEquipo_equipoCargoId_fkey" FOREIGN KEY ("equipoCargoId") REFERENCES "EquipoCargo"("id_EquipoCargo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmFrente" ADD CONSTRAINT "PmFrente_id_PlanMaestro_fkey" FOREIGN KEY ("id_PlanMaestro") REFERENCES "PlanMaestro"("id_PlanMaestro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmFrentePartida" ADD CONSTRAINT "PmFrentePartida_id_Partida_fkey" FOREIGN KEY ("id_Partida") REFERENCES "Partida"("id_Partida") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmFrentePartida" ADD CONSTRAINT "PmFrentePartida_id_Frente_fkey" FOREIGN KEY ("id_Frente") REFERENCES "PmFrente"("id_PmFrente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PmProgramacion" ADD CONSTRAINT "PmProgramacion_id_PmFrentePartida_fkey" FOREIGN KEY ("id_PmFrentePartida") REFERENCES "PmFrentePartida"("id_PmFrentePartida") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vivienda" ADD CONSTRAINT "Vivienda_modeloViviendaId_fkey" FOREIGN KEY ("modeloViviendaId") REFERENCES "ModeloVivienda"("id_ModeloVivienda") ON DELETE RESTRICT ON UPDATE CASCADE;
