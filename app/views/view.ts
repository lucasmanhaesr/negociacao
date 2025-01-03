export abstract class View<t>{ //Generics com o tipo genérico

    //Usando protected para permitir herança entre superclasses e subclasses
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    //Usando a função abstrata para forçar a subclasse a implementa-la, protected só pode ser usada na subclasse
    protected abstract template(mensagem: t): string;

}