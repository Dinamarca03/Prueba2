-- CreateTable
CREATE TABLE "Hitos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hitos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcesoConstrutivo" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "jerarquia" INTEGER NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcesoConstrutivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaqueteTrabajo" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "esActivo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaqueteTrabajo_pkey" PRIMARY KEY ("id")
);
