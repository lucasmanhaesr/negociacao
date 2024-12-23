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
                    </tr>
                </thdead>
                <thead>
                    <tr>
                        <th>Quantidade</th>
                    </tr>
                </thdead>
                <thead>
                    <tr>
                        <th>Valor</th>
                    </tr>
                </thdead>
                <tbody>
                    <th>
                        <td></td>
                    </th>
                </tbody>
            </table>
        `;
    }
    //Pega a div HTML e transforma na template
    update() {
        this.elemento.innerHTML = this.template();
    }
}
