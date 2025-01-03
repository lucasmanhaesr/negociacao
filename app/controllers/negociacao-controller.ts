import { NegociacaoModel } from '../models/negociacao-model.js';
import { NegociacaoRepository } from '../repository/negociacao-repository.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacao-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacaoRepository = new NegociacaoRepository();
    private negociacaoView = new NegociacaoView("#table-view"); //Instancia da classe View passando o seletor CSS como parametro
    private mensagemView = new MensagemView("#mensagemView"); //Passando o seletor do elemento HTML

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacaoRepository); //Quem chamar a Controller irá renderizar a tabela, passando como parametro a lista de negociacoes
    }

    public adiciona(): void {
        
        //Variável usando método estático da classe model
        const negociacaoModel = NegociacaoModel.criarNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);

        if(!this.diaUtil(negociacaoModel.data)){
            return this.mensagemView.update("Negociação deve ser criada apenas em dias úteis");
        }

        this.negociacaoRepository.adiciona(negociacaoModel);
        this.atualizaView();
        this.limparFormulario();
    }

    private diaUtil(data: Date): boolean{
        if(data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SÁBADO){ // 0 é Domingo e 6 é Sábado
            return true;
        }
        else{
            return false
        }
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.mensagemView.update("Negociação cadastrada com sucesso"); //Passando a mensagem que será mostrada
        this.negociacaoView.update(this.negociacaoRepository); //A cada evento adicionar será chamado o metodo update() da View
    }
}
