import { NegociacaoModel } from '../models/negociacao-model.js';
import { NegociacaoRepository } from '../repository/negociacao-repository.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacao-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacaoRepository = new NegociacaoRepository();
        this.negociacaoView = new NegociacaoView("#table-view"); //Instancia da classe View passando o seletor CSS como parametro
        this.mensagemView = new MensagemView("#mensagemView"); //Passando o seletor do elemento HTML
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacaoRepository); //Quem chamar a Controller irá renderizar a tabela, passando como parametro a lista de negociacoes
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacaoRepository.adiciona(negociacao);
        this.mensagemView.update("Negociação cadastrada com sucesso"); //Passando a mensagem que será mostrada
        this.negociacaoView.update(this.negociacaoRepository); //A cada evento adicionar será chamado o metodo update() da View
        console.log(this.negociacaoRepository.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new NegociacaoModel(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
