import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Listar todos los planes maestros
    try {
      const planes = await prisma.planMaestro.findMany();
      res.status(200).json(planes);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la lista', details: error.message });
    }
  } else if (req.method === 'POST') {
    // Crear un plan maestro
    try {
      const nuevo = await prisma.planMaestro.create({ data: req.body });
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(400).json({ error: 'No se pudo crear el plan maestro', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 