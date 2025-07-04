/*
  Warnings:

  - You are about to drop the column `idProeycto` on the `plan_maestro` table. All the data in the column will be lost.
  - Added the required column `idProyecto` to the `plan_maestro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plan_maestro" DROP COLUMN "idProeycto",
ADD COLUMN     "idProyecto" INTEGER NOT NULL;
