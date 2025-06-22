import { Module } from '@nestjs/common';
import { PrismaNestService } from './prisma-nest.service';

@Module({
  providers: [PrismaNestService]
})
export class PrismaNestModule {}
