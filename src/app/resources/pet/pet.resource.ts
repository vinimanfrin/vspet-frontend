export default class Pet {
    id?: number
    nome?:string
    nomeResponsavel?:string
    cpfResponsavel?:string
    telefone?:string
    raca?:string
    observacoes?:string

    constructor(id?: number, nome?: string, nomeResponsavel?: string, cpfResponsavel?: string, telefone?: string, raca?: string, observacoes?: string) {
        this.id = id;
        this.nome = nome;
        this.nomeResponsavel = nomeResponsavel;
        this.cpfResponsavel = cpfResponsavel;
        this.telefone = telefone;
        this.raca = raca;
        this.observacoes = observacoes;
    }
}