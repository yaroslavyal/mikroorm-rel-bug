import { Module } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  exports: [],
  imports: [MikroOrmModule.forFeature({ entities: [Tag] })],
  providers: [TagService],
})
export class TagModule { }
