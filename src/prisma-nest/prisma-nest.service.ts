import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaNestService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
      .then(async () => {
        console.log(`konek`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
