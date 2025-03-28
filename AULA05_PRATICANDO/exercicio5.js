function escrever() {
    // (a)
    let texto = document.getElementById("t").value.trim();
    let palavras = texto.split(" ");
    let numeroPalavras = palavras.length;
    document.getElementById("resp-a").innerHTML = `(a) Quantidade de palavras: ${numeroPalavras}`;

    // (b)
    let numeroChars = 0;
    palavras.forEach(element => {
        numeroChars += element.length;
    });
    document.getElementById("resp-b").innerHTML = `(b) Quantidade de caracteres: ${numeroChars}`;

    // (c)
    let palindromo = "Sim";
    for (let i = 0; i < texto.length; i++) {
        const c1 = texto.charAt(i);
        const c2 = texto.charAt(texto.length-i-1);
        if(c1 !== c2) {
            palindromo = "Não";
            break;
        }
    }
    document.getElementById("resp-c").innerHTML = `(c) Palindromo: ${palindromo}`;


    // (d)
    let palavrasInversa = "";
    for (let i = palavras.length-1; i >= 0; i--) {
        palavrasInversa += palavras[i] + (i!=0 ? ", " : "");
    }
    document.getElementById("resp-d").innerHTML = `(d) Ordem inversa: ${palavrasInversa}`;

}