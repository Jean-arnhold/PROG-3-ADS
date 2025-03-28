function imprimir() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    lista = '';
    for (let index = a; index <= b; index++) {
        if(index % 2 === 0)
             lista += `<li>${index}</li>`;     
    }

    document.getElementById("resultado").innerHTML = lista;

}