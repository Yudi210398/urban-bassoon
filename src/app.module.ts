import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { PrismaNestModule } from './prisma-nest/prisma-nest.module';

@Module({
  imports: [UserModule, AdminModule, PrismaNestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
