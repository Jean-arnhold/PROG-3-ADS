export class Teste {
    constructor(frase) {
        this.frase = frase;
    }

    print() {
        console.log(this.frase);
    }
}

export function somar(a,b) {
    return a+b;
}

export const multiplicar = (a,b) => { 
    return a*b;
}