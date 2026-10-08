import { Injectable } from '@nestjs/common';
import { CreateAlunoInputDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunosRepository } from './alunos.repository';

@Injectable()
export class AlunosService {
  constructor(private readonly alunoRepository: AlunosRepository) {}

  create(createAlunoDto: CreateAlunoInputDto) {
    return 'This action adds a new aluno';
  }

  findAll() {
    return `This action returns all alunos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aluno`;
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return `This action updates a #${id} aluno`;
  }

  remove(id: number) {
    return `This action removes a #${id} aluno`;
  }
}
