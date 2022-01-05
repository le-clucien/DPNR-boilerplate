import { Controller, Get, Post, Body } from '@nestjs/common';

import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller( 'cats' )
export class CatsController {
	constructor( private catsService: CatsService ) {}

	@Post()
	async create( @Body() cat: Cat ): Promise< string > {
		this.catsService.create( cat );
		return "Succesfully added " + cat.name;
	}

	@Get()
	async findAll(): Promise< Cat[] > {
		return this.catsService.findAll();
	}
}
