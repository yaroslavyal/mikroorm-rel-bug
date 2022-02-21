import { Migration } from '@mikro-orm/migrations';

export class Migration20220221110059 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "book" ("id" serial primary key, "name" varchar(255) not null);');

    this.addSql('create table "tag" ("id" serial primary key, "tag" varchar(255) not null, "book_id" int not null);');

    this.addSql('alter table "tag" add constraint "tag_book_id_foreign" foreign key ("book_id") references "book" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "tag" drop constraint "tag_book_id_foreign";');

    this.addSql('drop table if exists "book" cascade;');

    this.addSql('drop table if exists "tag" cascade;');
  }

}
