import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunoInputDto } from './create-aluno.dto';

export class UpdateAlunoDto extends PartialType(CreateAlunoInputDto) {}
