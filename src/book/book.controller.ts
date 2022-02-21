import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Book } from './book.entity';
import { EntityRepository } from '@mikro-orm/core';

@Controller('book')
export class BookController {
  constructor(@InjectRepository(Book) private readonly bookRepo: EntityRepository<Book>) {
  }
  @Get()
  list() {
    return this.bookRepo.find({}, { populate: ['tags'] })
  }
}
