import { Injectable } from '@nestjs/common';
import { CreateInstituicoesDto } from './dto/create-instituicoes.dto';
import { UpdateInstituicoesDto } from './dto/update-instituicoes.dto';

@Injectable()
export class InstituicoesService {
  create(createInstituicoeDto: CreateInstituicoesDto) {
    return 'This action adds a new instituicoe';
  }

  findAll() {
    return `This action returns all instituicoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instituicoe`;
  }

  update(id: number, updateInstituicoeDto: UpdateInstituicoesDto) {
    return `This action updates a #${id} instituicoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} instituicoe`;
  }
}
