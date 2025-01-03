export abstract class View<t>{ 

    protected elemento: HTMLElement;
    private escape = false;

    constructor(seletor: string, escape?: boolean){

        //Fazendo verificação de valor nulo e fazendo casting
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Não foi encontrado o seletor ${seletor}`);
        }

        if(escape){
            this.escape = escape;
        }
    }

    public update(repository: t):void { 
        let template = this.template(repository);
        if(this.escape){
            template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(mensagem: t): string;

}