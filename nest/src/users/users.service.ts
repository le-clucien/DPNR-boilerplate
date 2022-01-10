import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userQuery } from './interfaces/userQuery.interface';

import { User } from './user.entity';

@Injectable()
export class	UsersService {
	constructor(
		@InjectRepository( User )
		private usersRepository: Repository< User >
	) {}

	findAll(): Promise< User[] > {
		return this.usersRepository.find();
	}

	findById( id: string ): Promise< User > {
		return this.usersRepository.findOne( id );
	}

	findByLogin( login: string ): Promise< User | User[] > {
		return this.usersRepository.find( { where: { login: login } } );
	}

	async remove( id: string ): Promise< string > {
		try {
			await this.usersRepository.delete( id );
		} catch ( err ) {
			return "error: Unable to erase user#" + id + ".";
		} finally {
			return "user#" + id + " erased.";
		}
	}

	async create( user: User ): Promise< string > {
		try {
			this.usersRepository.save( user );
		} catch ( err ) {
			return "error: User " + user.name + " creation failed.";
		} finally {
			return "User " + user.name + "created.";
		}
	}
}
