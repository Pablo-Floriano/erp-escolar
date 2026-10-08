import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituicoesService } from './instituicoes.service';
import { CreateInstituicoesDto } from './dto/create-instituicoes.dto';
import { UpdateInstituicoesDto } from './dto/update-instituicoes.dto';

@Controller('instituicoes')
export class InstituicoesController {
  constructor(private readonly instituicoesService: InstituicoesService) {}

  @Post()
  create(@Body() createInstituicoesDto: CreateInstituicoesDto) {
    return this.instituicoesService.create(createInstituicoesDto);
  }

  @Get()
  findAll() {
    return this.instituicoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instituicoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstituicoesDto: UpdateInstituicoesDto) {
    return this.instituicoesService.update(+id, updateInstituicoesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instituicoesService.remove(+id);
  }
}
