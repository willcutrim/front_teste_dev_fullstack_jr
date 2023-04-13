export interface Endereco {
    id: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}

export interface Fornecedor {
    id: number;
    endereco: Endereco;
    nome_fantasia: string;
    razao_social: string;
    cnpj: string;
    telefone: string;
}