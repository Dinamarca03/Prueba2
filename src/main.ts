import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ApiKeyGuard } from './common/guards/api-key.guard'; // Ajusta la ruta si es necesario
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
 // app.useGlobalGuards(new ApiKeyGuard(configService));
  app.useGlobalPipes(new ValidationPipe({ 
    transform: true,
    whitelist: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
