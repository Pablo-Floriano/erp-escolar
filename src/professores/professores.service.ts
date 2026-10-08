import { Injectable } from '@nestjs/common';
import { CreateProfessoresDto } from './dto/create-professores.dto';
import { UpdateProfessoresDto } from './dto/update-professores.dto';

@Injectable()
export class ProfessoresService {
  create(createProfessoreDto: CreateProfessoresDto) {
    return 'This action adds a new professore';
  }

  findAll() {
    return `This action returns all professores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professore`;
  }

  update(id: number, updateProfessoreDto: UpdateProfessoresDto) {
    return `This action updates a #${id} professore`;
  }

  remove(id: number) {
    return `This action removes a #${id} professore`;
  }
}
