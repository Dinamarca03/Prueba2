import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    // Obtener un plan maestro por ID
    try {
      const plan = await prisma.planMaestro.findUnique({ where: { id_PlanMaestro: Number(id) } });
      if (!plan) return res.status(404).json({ error: 'No encontrado' });
      res.status(200).json(plan);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener el plan maestro', details: error.message });
    }
  } else if (req.method === 'PATCH') {
    // Actualizar un plan maestro
    try {
      const actualizado = await prisma.planMaestro.update({
        where: { id_PlanMaestro: Number(id) },
        data: req.body,
      });
      res.status(200).json(actualizado);
    } catch (error) {
      res.status(400).json({ error: 'No se pudo actualizar', details: error.message });
    }
  } else if (req.method === 'DELETE') {
    // Eliminar un plan maestro
    try {
      await prisma.planMaestro.delete({ where: { id_PlanMaestro: Number(id) } });
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: 'No se pudo eliminar', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 