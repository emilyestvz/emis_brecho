import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';
  
  app.useGlobalPipes(new ValidationPipe()); // habilitar validação global
  app.enableCors(); // habilitar o cors

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
