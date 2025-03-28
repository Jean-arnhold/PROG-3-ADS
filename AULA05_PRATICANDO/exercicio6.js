function escrever() {

    let n = parseInt(document.getElementById("n").value);

    // Negativo? 
    if(n < 0) {
        document.getElementById("erro").innerHTML = "Informe um número positivo.";
        return;
    } else {
        document.getElementById("erro").innerHTML = "";

        // (a) Par
        let par = (n % 2 == 0) ? "Sim" : "Não"; 
        document.getElementById("resp-a").innerHTML = `(a) O número é par? ${par}`;

        // (b) Primo
        let primo = "Sim";
        for (let i = 2; i < n; i++) {
            if(n % i == 0) {
                primo = "Não";
                break;
            }
        }
        document.getElementById("resp-b").innerHTML = `(b) O número é primo? ${primo}`;


        // (c) Quadrado Perfeito
        let perfeito = "Não";
        for (let i = 1; i < n; i++) {
            if(i * i == n) {
                perfeito = "Sim";
                break;
            }

            if(i * i > n) 
                break;
        }
        document.getElementById("resp-c").innerHTML = `(c) O número é um quadrado perfeito? ${perfeito}`;


        // (d) Fatorial
        let fatorial = 1;
        for (let i = 1; i <= n; i++)
            fatorial *= i;
        document.getElementById("resp-d").innerHTML = `(d) Fatorial = ${fatorial}`;


        // (e) Soma de digitos
        let soma = 0;
        let ns = document.getElementById("n").value;
        for (let i = 0; i < ns.length; i++)
            soma += parseInt(ns.charAt(i));
        document.getElementById("resp-e").innerHTML = `(e) Soma dos digitos = ${soma}`;


    }
}