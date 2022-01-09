import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { LoggerMiddleware } from './logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module( {
	imports: [CatsModule],
} )
export class AppModule implements NestModule {
	configure( consumer: MiddlewareConsumer ) {
		consumer
			.apply( LoggerMiddleware )
			.exclude( { path: 'cats', method: RequestMethod.POST } )
			.forRoutes( CatsController );
	}
}
