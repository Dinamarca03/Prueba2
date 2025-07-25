import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: 'No se pudo obtener el personaje',
      details: error.message,
    });
  }
} 