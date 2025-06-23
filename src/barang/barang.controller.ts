import { Body, Controller, Post } from '@nestjs/common';
import { BarangService } from './barang.service';
import { DtoBarang } from './DtoBarang/barang.dto';

@Controller('barang')
export class BarangController {
  constructor(private readonly serviceBarang: BarangService) {}

  @Post()
  async createBarang(@Body() dto: DtoBarang) {
    return this.serviceBarang.createBarang(dto);
  }
}
