import { Module } from '@nestjs/common';
import { BarangController } from './barang.controller';
import { BarangService } from './barang.service';
import { PrismaNestModule } from 'src/prisma-nest/prisma-nest.module';

@Module({
  controllers: [BarangController],
  providers: [BarangService],
  imports: [PrismaNestModule],
})
export class BarangModule {}
