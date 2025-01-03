import { View } from "./view.js";
export class MensagemView extends View {
    //String com o HTML puro e a interpolação da variavel
    template(mensagem) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }
    //Função que passa a mensagem como parametro e joga para a template. 
    // Usando como parametro o tipo especifico string
    update(mensagem) {
        const template = this.template(mensagem);
        this.elemento.innerHTML = template;
    }
}
