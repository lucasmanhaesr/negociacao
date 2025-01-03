import { NegociacaoModel } from '../models/negociacao-model.js';

export class NegociacaoRepository {
    private negociacoes: Array<NegociacaoModel> = [];

    public adiciona(negociacao: NegociacaoModel): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<NegociacaoModel> {
        return this.negociacoes;
    }
}