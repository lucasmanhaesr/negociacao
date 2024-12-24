import { View } from "./view.js";
export class NegociacaoView extends View {
    //Template que retornará uma String HTML com as variáveis atualizadas, através de um template String
    template(repository) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${repository.lista().map(negociacao => {
            return `
                                <tr>
                                    <td>${Intl.DateTimeFormat().format(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>R$${negociacao.valor.toFixed(2)}</td>
                                </tr>
                            `;
        }).join("")}
                </tbody>
            </table>
        `;
    }
    //Pega a div HTML e transforma na template
    update(repository) {
        const template = this.template(repository); //passando a lista como parametro para o template iterar
        this.elemento.innerHTML = template; //A div HTML será substituida pelo template
    }
}
