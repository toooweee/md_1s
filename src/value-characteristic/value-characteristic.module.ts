import { Module } from '@nestjs/common';
import { ValueCharacteristicService } from './value-characteristic.service';
import { ValueCharacteristicController } from './value-characteristic.controller';

@Module({
  controllers: [ValueCharacteristicController],
  providers: [ValueCharacteristicService],
})
export class ValueCharacteristicModule {}
