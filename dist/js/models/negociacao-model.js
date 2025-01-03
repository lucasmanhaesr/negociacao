export class NegociacaoModel {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criarNegociacao(dataInput, quantidadeInput, valorInput) {
        const date = new Date(dataInput.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeInput);
        const valor = parseFloat(valorInput);
        return new NegociacaoModel(date, quantidade, valor);
    }
}
