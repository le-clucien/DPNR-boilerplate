import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerMiddleware } from './logger.middleware';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { CatsModule } from './cats/cats.module';

@Module( {
	imports: [
		TypeOrmModule.forRoot( { // does not work
			type: 'postgres',
			host: 'pg-server',
			port: parseInt( process.env.DB_PORT ),
			username: process.env.PSQL_USER,
			password: process.env.PSQL_PASS,
			database: process.env.PSQL_DB_NAME,
			entities: [ User ],
			synchronize: true,
		}),
		UsersModule,
		CatsModule,
	],
} )
export class AppModule implements NestModule {
	configure( consumer: MiddlewareConsumer ) {
		consumer
			.apply( LoggerMiddleware )
			.forRoutes( UsersController );
	}
}
