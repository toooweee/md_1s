import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { ValueCharacteristicModule } from './value-characteristic/value-characteristic.module';

@Module({
  imports: [PrismaModule, CharacteristicModule, ValueCharacteristicModule],
})
export class AppModule {}
