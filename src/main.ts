import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Hejhome API')
    .setDescription('Reverse Engineered Hejhome API')
    .setVersion('0.0.1')
    .addBearerAuth({
      type: 'http',
      description: 'Hejhome dashboard API token',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidocs', app, document, {
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
      showExtensions: true,
      defaultModelsExpandDepth: -1,
      persistAuthorization: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
