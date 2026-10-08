import { CreateAlunoInputDto, CreateAlunoOutputDto } from "../dto/create-aluno.dto";
import { CPF } from "../value-objects/cpf";

export class Aluno {

    private constructor(
        public readonly nome: string,
        public readonly nota: number,
        public readonly cpf: CPF,
	    public readonly dataNascimento: string,
	    public readonly email: string,
	    public readonly instituicaoId?: number,
        public readonly id?: number,
	    public readonly createdAt?: Date,
	    public readonly updatedAt?: Date,
	    public readonly deletedAt?: Date
    ) {

    }

    public static create(alunoDto: CreateAlunoInputDto): Aluno {
        return new Aluno(
            alunoDto.nome!,
            alunoDto.nota!,
            new CPF(alunoDto.cpf!),
            alunoDto.dataNascimento!,
            alunoDto.email!
        );
    }

}
