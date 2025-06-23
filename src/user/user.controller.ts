import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUSerDto } from './UserDTO/User.dto';
import { DtoUpdateUser } from './UserDTO/EditUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createDataUSer(@Body() dto: createUSerDto) {
    return this.userService.createUser(dto);
  }

  @Get()
  async getDataUSer() {
    return this.userService.getUser();
  }

  @Delete('/:id')
  async deleteDataUser(@Param('id') id: number) {
    console.log(id);
    return this.userService.deleteData(+id);
  }

  @Patch('/:id')
  async editData(@Param('id') id: number, @Body() dto: DtoUpdateUser) {
    return this.userService.editData(id, dto);
  }
}
