import { PartialType } from '@nestjs/swagger';
import { CreateValueCharacteristicDto } from './create-value-characteristic.dto';

export class UpdateValueCharacteristicDto extends PartialType(CreateValueCharacteristicDto) {}
