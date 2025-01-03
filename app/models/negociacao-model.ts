export class NegociacaoModel {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    public get volume(): number {
        return this.quantidade * this.valor;
    }

    public get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    //Método da classe que retorna uma instancia dela mesma
    public static criarNegociacao(dataInput: string, quantidadeInput: string, valorInput: string): NegociacaoModel{
        const date = new Date(dataInput.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeInput);
        const valor = parseFloat(valorInput);
        return new NegociacaoModel(date, quantidade, valor);
    }
}