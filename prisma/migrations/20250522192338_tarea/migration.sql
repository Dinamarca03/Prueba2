/*
  Warnings:

  - You are about to drop the `pm_partida` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pm_partida" DROP CONSTRAINT "pm_partida_idPlanMaestro_fkey";

-- DropTable
DROP TABLE "pm_partida";

-- CreateTable
CREATE TABLE "pm_partida_vivienda" (
    "id" SERIAL NOT NULL,
    "idPlanMaestro" INTEGER NOT NULL,
    "idPartida" INTEGER NOT NULL,
    "idVivienda" INTEGER NOT NULL,
    "fechaIni" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pm_partida_vivienda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarea" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tareaEstadoId" INTEGER NOT NULL,
    "tareaPrioridadId" INTEGER NOT NULL,

    CONSTRAINT "tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarea_estado" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tarea_estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarea_prioridad" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tarea_prioridad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "pm_partida_vivienda_idPlanMaestro_idx" ON "pm_partida_vivienda"("idPlanMaestro");

-- AddForeignKey
ALTER TABLE "pm_partida_vivienda" ADD CONSTRAINT "pm_partida_vivienda_idPlanMaestro_fkey" FOREIGN KEY ("idPlanMaestro") REFERENCES "plan_maestro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarea" ADD CONSTRAINT "tarea_tareaEstadoId_fkey" FOREIGN KEY ("tareaEstadoId") REFERENCES "tarea_estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarea" ADD CONSTRAINT "tarea_tareaPrioridadId_fkey" FOREIGN KEY ("tareaPrioridadId") REFERENCES "tarea_prioridad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
