import { Injectable } from '@nestjs/common';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { PrismaService } from '@prisma/prisma.service';
import { CharacteristicUniqueInput } from './types';

@Injectable()
export class CharacteristicService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCharacteristicDto: CreateCharacteristicDto) {
    return this.prismaService.characteristic.create({
      data: {
        ...createCharacteristicDto,
      },
    });
  }

  findAll() {
    return this.prismaService.characteristic.findMany();
  }

  findOne(where: CharacteristicUniqueInput) {
    return this.prismaService.characteristic.findUniqueOrThrow({
      where,
    });
  }

  remove(where: CharacteristicUniqueInput) {
    return this.prismaService.characteristic.delete({
      where,
    });
  }
}
