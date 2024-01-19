import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldResolver } from './field.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FieldResolver, FieldService]
})
export class FieldModule {}
