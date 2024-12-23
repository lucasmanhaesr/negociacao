import { NegociacaoModel } from '../models/negociacao-model.js';

export class NegociacaoRepository {
    private negociacoes: Array<NegociacaoModel> = [];

    adiciona(negociacao: NegociacaoModel) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<NegociacaoModel> {
        return this.negociacoes;
    }
}
