import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Book } from '../book/book.entity';

@Entity()
export class Tag {

  @PrimaryKey()
  id: number;

  @Property()
  tag: string;

  @ManyToOne()
  book: Book
}
