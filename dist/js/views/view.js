export class View {
    constructor(seletor, escape) {
        this.escape = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Não foi encontrado o seletor ${seletor}`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(repository) {
        let template = this.template(repository);
        if (this.escape) {
            template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
