// Podemos ter UM default por arquivo
// O nome pode ser colocado, mas é ignorado pelo JS
// O nome que será válido é aquele dado na importação

// export default class Teste {
export default class {
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