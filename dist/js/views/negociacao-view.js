export class NegociacaoView {
    //Buscando a div HTML automaticamente ao instanciar a classe NegociacaoView
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //Template que retornará uma String HTML com as variáveis, através de uma template String
    template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        `;
    }
    //Pega a div HTML e transforma na template
    update() {
        this.elemento.innerHTML = this.template();
    }
}
