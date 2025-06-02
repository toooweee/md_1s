import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('characteristic')
@ApiTags('characteristic')
export class CharacteristicController {
  constructor(private readonly characteristicService: CharacteristicService) {}

  @Post()
  @ApiOperation({ summary: 'Create characteristic' })
  create(@Body() createCharacteristicDto: CreateCharacteristicDto) {
    return this.characteristicService.create(createCharacteristicDto);
  }

  @Get()
  @ApiOperation({ summary: 'find all characteristics' })
  findAll() {
    return this.characteristicService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'find one characteristic' })
  findOne(@Param('id') id: string) {
    return this.characteristicService.findOne({ id });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete one characteristic' })
  remove(@Param('id') id: string) {
    return this.characteristicService.remove({ id });
  }
}
