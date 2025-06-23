import { IsNotEmpty, IsNumber } from 'class-validator';

export class DtoBoking {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  barangId: number;

  @IsNotEmpty()
  @IsNumber()
  session: number;
}
