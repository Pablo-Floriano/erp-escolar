export class CreateAlunoInputDto {
    public readonly nome?: string;
    public readonly nota?: number;
    public readonly cpf?: string;
    public readonly dataNascimento?: string;
    public readonly email?: string;
    public readonly instituicaoId?: number;
    public readonly createdAt?: string;
    public readonly updatedAt?: string;
    public readonly deletedAt?: string;
}

export class CreateAlunoOutputDto {
    public id?: string;
    public readonly nome?: string;
    public readonly nota?: number;
    public readonly cpf?: string;
    public readonly dataNascimento?: string;
    public readonly email?: string;
    public readonly instituicaoId?: number;
    public readonly createdAt?: string;
    public readonly updatedAt?: string;
    public readonly deletedAt?: string;
}
