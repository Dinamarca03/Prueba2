import axios from 'axios';

export default async function handler(req, res) {
  const { status, species, name } = req.query;
  const params = new URLSearchParams({ status, species, name }).toString();
  const url = `https://rickandmortyapi.com/api/character/?${params}`;
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: 'No se pudo filtrar los personajes',
      details: error.message,
    });
  }
} 