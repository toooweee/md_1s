import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCharacteristicDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Цвет' })
  name: string;
}
