import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Book } from './book.entity';
import { Tag } from '../tag/tag.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Book, Tag])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
