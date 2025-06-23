import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaNestService } from 'src/prisma-nest/prisma-nest.service';
import { createUSerDto } from './UserDTO/User.dto';
import * as bcrypt from 'bcrypt';
import { DtoUpdateUser } from './UserDTO/EditUser.dto';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaNestService) {}

  async createUser(dto: createUSerDto) {
    const cek = await this.prisma.users.findFirst({
      where: { email: dto.email },
    });

    if (cek)
      throw new HttpException('email sudah terdaftar', HttpStatus.FORBIDDEN);

    const data = await this.prisma.users.create({
      data: {
        ...dto,
      },
    });

    if (!data)
      throw new HttpException('Error tidak bisa', HttpStatus.FORBIDDEN);

    return data;
  }

  async getUser() {
    return this.prisma.users.findMany();
  }

  async deleteData(id: number) {
    const data = await this.prisma.users.findFirst({ where: { id: +id } });
    if (!data)
      throw new HttpException('data tidak ditemukan', HttpStatus.FORBIDDEN);

    return await this.prisma.users.delete({ where: { id: +id } });
  }

  async editData(id: number, Dtoedit: DtoUpdateUser) {
    const data = await this.prisma.users.findFirst({ where: { id: +id } });
    if (!data)
      throw new HttpException('data tidak ditemukan', HttpStatus.FORBIDDEN);

    return this.prisma.users.update({
      where: { id: +id },
      data: { nama: Dtoedit.nama },
    });
  }
}
