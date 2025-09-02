import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // elimina atributos que no estén en el DTO
      forbidNonWhitelisted: true,   // lanza error si vienen atributos extra
      transform: true,              // transforma los bodys en instancias de DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3010);
}
bootstrap();
