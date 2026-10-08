import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessoresDto } from './create-professores.dto';

export class UpdateProfessoresDto extends PartialType(CreateProfessoresDto) {}
