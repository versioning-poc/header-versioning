import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.HEADER,
    header: 'Version-Header'
  })

  const config = new DocumentBuilder()
    .setTitle('Version Header Poc')
    .setDescription('Testing on users')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document)

  await app.listen(3000);
}
bootstrap();
