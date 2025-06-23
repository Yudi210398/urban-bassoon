import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaNestModule } from 'src/prisma-nest/prisma-nest.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaNestModule],
})
export class UserModule {}
