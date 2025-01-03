import { View } from "./view.js";
export class NegociacaoView extends View {
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
                                    <td>${this.formatarData(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>R$${negociacao.valor.toFixed(2)}</td>
                                </tr>
                            `;
        }).join("")}
                </tbody>
            </table>
        `;
    }
    update(repository) {
        const template = this.template(repository);
        this.elemento.innerHTML = template;
    }
    formatarData(data) {
        return Intl.DateTimeFormat().format(data);
    }
}
