export abstract class View<t>{ //Generics com o tipo genérico

    //Usando protected para permitir herança entre superclasses e subclasses
    protected elemento: HTMLElement;
    private escape = false;

    constructor(seletor: string, escape?: boolean){ //Parametro opcional, só pode ter se conter um obrigatorio!
        this.elemento = document.querySelector(seletor);
        if(escape){ //Se o parametro opcional for passado atribuit o parametro a variável
            this.escape = escape;
        }
    }

    public update(repository: t):void { 
        let template = this.template(repository);
        if(this.escape){
            template.replace(/<script>[\s\S]*?<\/script>/, ""); //Regex para remover tag script e tudo que conter dentro dela
        }
        this.elemento.innerHTML = template;
    }

    //Usando a função abstrata para forçar a subclasse a implementa-la, protected só pode ser usada na subclasse
    protected abstract template(mensagem: t): string;

}