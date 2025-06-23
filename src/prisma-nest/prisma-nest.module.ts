import { Module } from '@nestjs/common';
import { PrismaNestService } from './prisma-nest.service';

@Module({
  providers: [PrismaNestService],
  exports: [PrismaNestService],
})
export class PrismaNestModule {}
