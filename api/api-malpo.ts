import axios from 'axios';

export default async function handler(req, res) {
  const endpoint = req.query.endpoint;
  if (!endpoint) {
    return res.status(400).json({ error: 'Falta el parámetro endpoint' });
  }

  const baseUrl = process.env.API_MALPO_BASE_URL;
  const username = process.env.API_MALPO_USER;
  const password = process.env.API_MALPO_PASS;
  const apiKey = process.env.API_MALPO_KEY;
  const authHeader = process.env.API_MALPO_AUTH_HEADER;

  if (!baseUrl || !username || !password || !apiKey || !authHeader) {
    return res.status(500).json({ error: 'Faltan variables de entorno para la API de Malpo' });
  }

  const url = `${baseUrl}/${endpoint}`;
  const auth = Buffer.from(`${username}:${password}`).toString('base64');
  const headers = {
    Authorization: `Basic ${auth}`,
    [authHeader]: apiKey,
  };

  try {
    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: 'Error al consultar el endpoint dinámico',
      details: error.response?.data || error.message,
    });
  }
} 