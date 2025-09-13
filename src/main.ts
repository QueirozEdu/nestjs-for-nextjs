import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { parseCorsWhitelist } from './common/utils/parse-cors-whitelist';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  );

  const corsWhiteList = parseCorsWhitelist(process.env.CORS_WHITELIST ?? '');

  app.enableCors({
    origin: (
      origin: string | undefined, // Isso é do navegador e para proteger o cliente
      callback: (...args: any[]) => void,
    ) => {
      //Allow requests without origin or known origin by corsWhiteList
      if (!origin || corsWhiteList.includes(origin)) {
        return callback(null, true); // Permitido
      }

      // Deny requests with unknown origins
      return callback(new Error('Not allowed by CORS'), false);
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
