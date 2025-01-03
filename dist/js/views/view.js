export class View {
    constructor(seletor, escape) {
        this.escape = false;
        this.elemento = document.querySelector(seletor);
        if (escape) { //Se o parametro opcional for passado atribuit o parametro a variável
            this.escape = escape;
        }
    }
    update(repository) {
        let template = this.template(repository);
        if (this.escape) {
            template.replace(/<script>[\s\S]*?<\/script>/, ""); //Regex para remover tag script e tudo que conter dentro dela
        }
        this.elemento.innerHTML = template;
    }
}
