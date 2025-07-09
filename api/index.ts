import express from 'express';

const server = express();

server.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test directo desde Express!' });
});

export default server; 