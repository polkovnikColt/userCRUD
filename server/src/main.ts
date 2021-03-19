import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {initDB} from "./config/init";

async function bootstrap() {
    const connection = await initDB();
    if (!connection.error) {
        const app = await NestFactory.create(AppModule);
        await app.listen(3456);
    }
    else {
        console.log(`Can't connect to database... Error: ${connection.error}`)
    }
}

bootstrap();
