import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

// Implementación singleton para Prisma en entornos serverless
let prisma: PrismaClient;

function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    // Usar la instancia singleton
    super();
    const singleton = getPrismaClient();
    Object.assign(this, singleton);
  }
}