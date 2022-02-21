import { Collection, Entity, LoadStrategy, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Tag } from '../tag/tag.entity';

@Entity()
export class Book {

  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @OneToMany({
    entity: () => Tag,
    mappedBy: t => t.book,
    strategy: LoadStrategy.JOINED,
  })
  tags = new Collection<Tag>(this);

}
