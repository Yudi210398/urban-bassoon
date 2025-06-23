import { IsNotEmpty } from 'class-validator';

export class DtoBarang {
  @IsNotEmpty()
  nama: string;
}
