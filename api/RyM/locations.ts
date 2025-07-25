import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/location');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: 'No se pudo obtener las ubicaciones',
      details: error.message,
    });
  }
} 