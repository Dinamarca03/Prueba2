import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ValidationPipe } from '@nestjs/common';

const server = express();
let isNestReady = false;

async function bootstrap() {
  console.log('[DEBUG] Iniciando bootstrap de NestJS...');
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.init();
  isNestReady = true;
  console.log('[DEBUG] Bootstrap de NestJS completado.');
}

export default async function handler(req, res) {
  console.log('[DEBUG] Handler ejecutado:', req.url);
  try {
    if (!isNestReady) {
      console.log('[DEBUG] NestJS no está listo, llamando a bootstrap...');
      await bootstrap();
    } else {
      console.log('[DEBUG] NestJS ya estaba listo.');
    }
    console.log('[DEBUG] Llamando a server(req, res)...');
    server(req, res);
    console.log('[DEBUG] server(req, res) llamado.');
  } catch (err) {
    console.error('[ERROR] en handler:', err);
    res.status(500).json({ error: 'Error interno en el handler', details: err?.message });
  }
} 