import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerMiddleware } from './logger.middleware';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module( {
	imports: [
		TypeOrmModule.forRoot( { // does not work
			type: 'postgres',
			host: 'pg-server',
			port: parseInt( process.env.DB_PORT ),
			username: 'sCtZ2Ufe',
			password: '8NzXrwuq',
			database: 'data',
			entities: [ User ],
			synchronize: true,
		}),
		UsersModule,
	],
} )
export class AppModule implements NestModule {
	configure( consumer: MiddlewareConsumer ) {
		consumer
			.apply( LoggerMiddleware )
			.forRoutes( UsersController );
	}
}
