import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldResolver } from './field.resolver';

@Module({
  providers: [FieldResolver, FieldService]
})
export class FieldModule {}
