export class CPF {
    private valor: string;

    constructor(cpf: string|number) {
        if (!cpf) {
            throw new Error('Sem CPF');
        }
        this.valor = String(cpf).replace(/\D/g, '');
    }

    getValor(): string {
        return this.valor;
    }
}