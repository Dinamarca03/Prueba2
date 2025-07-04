/*
  Warnings:

  - You are about to drop the `objetivo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plan_maestro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pm_partida_vivienda` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tarea` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tarea_estado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tarea_prioridad` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pm_partida_vivienda" DROP CONSTRAINT "pm_partida_vivienda_idPlanMaestro_fkey";

-- DropForeignKey
ALTER TABLE "tarea" DROP CONSTRAINT "tarea_tareaEstadoId_fkey";

-- DropForeignKey
ALTER TABLE "tarea" DROP CONSTRAINT "tarea_tareaPrioridadId_fkey";

-- DropTable
DROP TABLE "objetivo";

-- DropTable
DROP TABLE "plan_maestro";

-- DropTable
DROP TABLE "pm_partida_vivienda";

-- DropTable
DROP TABLE "tarea";

-- DropTable
DROP TABLE "tarea_estado";

-- DropTable
DROP TABLE "tarea_prioridad";

-- CreateTable
CREATE TABLE "PlanMaestro" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL DEFAULT '',
    "fechaInicio" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUsuario" INTEGER NOT NULL,
    "idProyecto" INTEGER NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanMaestro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanMaestroPartidaVivienda" (
    "id" SERIAL NOT NULL,
    "idPlanMaestro" INTEGER NOT NULL,
    "idPartida" INTEGER NOT NULL,
    "idVivienda" INTEGER NOT NULL,
    "fechaIni" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanMaestroPartidaVivienda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tarea" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tareaEstadoId" INTEGER NOT NULL,
    "tareaPrioridadId" INTEGER NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TareaEstado" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TareaEstado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TareaPrioridad" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TareaPrioridad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objetivo" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Objetivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PlanMaestroPartidaVivienda_idPlanMaestro_idx" ON "PlanMaestroPartidaVivienda"("idPlanMaestro");

-- AddForeignKey
ALTER TABLE "PlanMaestroPartidaVivienda" ADD CONSTRAINT "PlanMaestroPartidaVivienda_idPlanMaestro_fkey" FOREIGN KEY ("idPlanMaestro") REFERENCES "PlanMaestro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_tareaEstadoId_fkey" FOREIGN KEY ("tareaEstadoId") REFERENCES "TareaEstado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_tareaPrioridadId_fkey" FOREIGN KEY ("tareaPrioridadId") REFERENCES "TareaPrioridad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
