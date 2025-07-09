import axios from 'axios';

export default async function handler(req, res) {
  const { page } = req.query;
  const url = page
    ? `https://rickandmortyapi.com/api/character?page=${page}`
    : `https://rickandmortyapi.com/api/character`;
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: 'No se pudo obtener la lista de personajes',
      details: error.message,
    });
  }
} 