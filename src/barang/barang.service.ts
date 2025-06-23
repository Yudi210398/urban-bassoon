import { Injectable } from '@nestjs/common';
import { PrismaNestService } from 'src/prisma-nest/prisma-nest.service';
import { DtoBarang } from './DtoBarang/barang.dto';

@Injectable()
export class BarangService {
  constructor(private readonly prismaService: PrismaNestService) {}

  async createBarang(data: DtoBarang) {
    const dataCreate = await this.prismaService.barang.create({
      data: { ...data },
    });

    return dataCreate;
  }
}
