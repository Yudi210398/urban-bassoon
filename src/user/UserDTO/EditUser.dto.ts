import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { userRole } from './User.dto';

export class DtoUpdateUser {
  @IsNotEmpty()
  @MinLength(4)
  @IsString()
  nama?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @MinLength(4)
  password?: string;

  @IsEnum(userRole)
  role?: userRole;
}
