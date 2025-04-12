
// DECLARATIVA
function somar(a, b) {
    let res = a + b;
    return res;
}

function imprimir(nome,frase) {
    console.log(nome, "falou:", frase);
    //não tem return
    
}

console.log(somar(10,5));
let s1 = somar(3,4);
console.log(s1);
imprimir("Joaquim", "Bom dia")


// ANONIMA
let f1 = function() {
    console.log("anonima!");


}

f1(); //Executa função anonima

let qualquer = function(a,b) {
    console.log("Multiplicação: ", a*b);
    
}

qualquer(4,5);

let executora = function(f) {
    f(2,3);
}

executora(qualquer);

// ARROW FUNCTION

let a1 = (a,b) => {
    let soma = a + b;
     console.log("AF SOMA: ", soma);
}

a1(10,30)

let p1 = palavra => console.log("Palavra:", palavra)
p1("Celular");

let ola = () => console.log("Ola!");
ola();

