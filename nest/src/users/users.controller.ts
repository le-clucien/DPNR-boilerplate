import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './user.entity';
import { userQuery } from './interfaces/userQuery.interface';

@Controller('users')
export class UsersController {
	constructor( private usersService: UsersService ) {}

	@Get()
	async find( @Query() query: userQuery ): Promise< User[] | User > {
		if ( query.id )
			return this.usersService.findById( query.id );
		else if ( query.login )
			return this.usersService.findByLogin( query.login );
		else
			return this.usersService.findAll();
	}

	@Post()
	async create( @Body() user: User ): Promise< string > {
		return this.usersService.create( user );
	}

	@Delete()
	async remove( @Query() query: userQuery ): Promise< string > {
		return this.usersService.remove( query.id )
	}
}
