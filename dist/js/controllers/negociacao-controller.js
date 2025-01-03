import { NegociacaoModel } from '../models/negociacao-model.js';
import { NegociacaoRepository } from '../repository/negociacao-repository.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacao-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
export class NegociacaoController {
    constructor() {
        this.negociacaoRepository = new NegociacaoRepository();
        this.negociacaoView = new NegociacaoView("#table-view", true);
        this.mensagemView = new MensagemView("#mensagem-view");
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacaoRepository);
    }
    adiciona() {
        const negociacaoModel = NegociacaoModel.criarNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.diaUtil(negociacaoModel.data)) {
            return this.mensagemView.update("Negociação deve ser criada apenas em dias úteis");
        }
        this.negociacaoRepository.adiciona(negociacaoModel);
        this.atualizaView();
        this.limparFormulario();
    }
    diaUtil(data) {
        if (data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SÁBADO) {
            return true;
        }
        else {
            return false;
        }
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.mensagemView.update("Negociação cadastrada com sucesso");
        this.negociacaoView.update(this.negociacaoRepository);
    }
}
