import { NegociacaoModel } from '../models/negociacao-model.js';
import { NegociacaoRepository } from '../repository/negociacao-repository.js';
import { NegociacaoView } from '../views/negociacao-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacaoRepository = new NegociacaoRepository();
    private negociacaoView = new NegociacaoView("#table-view"); //Instancia da classe View passando o seletor CSS como parametro

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(); //Quem chamar a Controller irá renderizar a tabela
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacaoRepository.adiciona(negociacao);
        console.log(this.negociacaoRepository.lista());
        this.limparFormulario();
    }

    criaNegociacao(): NegociacaoModel {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new NegociacaoModel(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
