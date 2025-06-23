import { Module } from '@nestjs/common';
import { BokingController } from './boking.controller';
import { BokingService } from './boking.service';
import { PrismaNestModule } from 'src/prisma-nest/prisma-nest.module';

@Module({
  controllers: [BokingController],
  providers: [BokingService],
  imports: [PrismaNestModule],
})
export class BokingModule {}
