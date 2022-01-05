import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const	_port = process.env.EXPOSE_PORT || 5001

async function bootstrap() {
	const app = await NestFactory.create( AppModule );
	await app.listen( _port );
}
bootstrap();
