import { Inject, Injectable } from "@nestjs/common";
import { QueryTypes, Sequelize } from "sequelize";
import { CreateAlunoOutputDto } from "./dto/create-aluno.dto";

@Injectable
export class AlunosRepository {
    constructor(@Inject(Sequelize) private readonly sequelize: Sequelize) { }

    public async getAlunoById(id: number): Promise<CreateAlunoOutputDto> {
        const sql = `
            SELECT *
              FROM public.aluno aluno
             WHERE aluno.id = :id
               AND aluno.deleted_at is null
        `;
        const [aluno] = await this.sequelize.query<any>(sql, {
            replacements: {
                id
            },
            type: QueryTypes.SELECT
        });

        return {
            id: aluno.id,
            nome: aluno.nome,
            nota: Number.parseFloat(aluno.nota),
            cpf: aluno.cpf,
            dataNascimento: aluno.dataNascimento
        };
    }
}