import { Injectable } from '@nestjs/common';
import { CreateValueCharacteristicDto } from './dto/create-value-characteristic.dto';
import { UpdateValueCharacteristicDto } from './dto/update-value-characteristic.dto';

@Injectable()
export class ValueCharacteristicService {
  create(createValueCharacteristicDto: CreateValueCharacteristicDto) {
    return 'This action adds a new valueCharacteristic';
  }

  findAll() {
    return `This action returns all valueCharacteristic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} valueCharacteristic`;
  }

  update(id: number, updateValueCharacteristicDto: UpdateValueCharacteristicDto) {
    return `This action updates a #${id} valueCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} valueCharacteristic`;
  }
}
