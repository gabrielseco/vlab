import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ApplicationModule } from './modules/app/app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule, {
    	cors: true,
	});

	app.useGlobalPipes(new ValidationPipe());

	const options = new DocumentBuilder()
    .setTitle('VLAB')
    .setDescription('My backend app')
    .setVersion('1.0')
	.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/swagger', app, document);

	await app.listen(3000);
}
bootstrap();
