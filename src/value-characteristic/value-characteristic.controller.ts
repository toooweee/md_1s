import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ValueCharacteristicService } from './value-characteristic.service';
import { CreateValueCharacteristicDto } from './dto/create-value-characteristic.dto';
import { UpdateValueCharacteristicDto } from './dto/update-value-characteristic.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('value-characteristic')
@ApiTags('value-characteristic')
export class ValueCharacteristicController {
  constructor(
    private readonly valueCharacteristicService: ValueCharacteristicService,
  ) {}

  @Post()
  create(@Body() createValueCharacteristicDto: CreateValueCharacteristicDto) {
    return this.valueCharacteristicService.create(createValueCharacteristicDto);
  }

  @Get()
  findAll() {
    return this.valueCharacteristicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valueCharacteristicService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateValueCharacteristicDto: UpdateValueCharacteristicDto,
  ) {
    return this.valueCharacteristicService.update(
      +id,
      updateValueCharacteristicDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valueCharacteristicService.remove(+id);
  }
}
