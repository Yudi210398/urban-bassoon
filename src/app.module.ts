import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { PrismaNestModule } from './prisma-nest/prisma-nest.module';
import { BokingModule } from './boking/boking.module';
import { BarangModule } from './barang/barang.module';

@Module({
  imports: [
    UserModule,
    AdminModule,
    PrismaNestModule,
    BokingModule,
    BarangModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
