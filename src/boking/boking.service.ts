import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaNestService } from 'src/prisma-nest/prisma-nest.service';
import { DtoBoking } from './dto/Boking.dto';

@Injectable()
export class BokingService {
  constructor(private readonly prismaService: PrismaNestService) {}

  async bookingBarang(data: DtoBoking) {
    const getsesion = await this.prismaService.boking.findMany({
      where: { barangId: +data.barangId },
    });

    if (getsesion[0].session === +data.session)
      throw new HttpException(
        'barang masih disewa di sesion sama',
        HttpStatus.FORBIDDEN,
      );

    const datass = await this.prismaService.boking.create({
      data: {
        barangId: +data.barangId,
        userId: +data.userId,
        session: +data.session,
      },
    });

    return datass;
  }

  async getBoking() {
    return this.prismaService.boking.findMany({
      include: { user: true, barang: true },
    });
  }
}
