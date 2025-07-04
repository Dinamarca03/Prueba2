-- CreateTable
CREATE TABLE "plan_maestro" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL DEFAULT '',
    "fechaInicio" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUsuario" INTEGER NOT NULL,
    "idProeycto" INTEGER NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "plan_maestro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pm_partida" (
    "id" SERIAL NOT NULL,
    "idPlanMaestro" INTEGER NOT NULL,
    "idPartida" INTEGER NOT NULL,
    "idVivienda" INTEGER NOT NULL,
    "fechaIni" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pm_partida_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "pm_partida_idPlanMaestro_idx" ON "pm_partida"("idPlanMaestro");

-- AddForeignKey
ALTER TABLE "pm_partida" ADD CONSTRAINT "pm_partida_idPlanMaestro_fkey" FOREIGN KEY ("idPlanMaestro") REFERENCES "plan_maestro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
