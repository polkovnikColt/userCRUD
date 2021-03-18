import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {initDB} from "./config/init";

async function bootstrap() {
  await initDB();
  const app = await NestFactory.create(AppModule);
  await app.listen(3456);
}
bootstrap();
