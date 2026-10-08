import { PartialType } from '@nestjs/mapped-types';
import { CreateInstituicoesDto } from './create-instituicoes.dto';

export class UpdateInstituicoesDto extends PartialType(CreateInstituicoesDto) {}
