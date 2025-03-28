let a = [];

function inserir() {
    let posicao = parseInt(document.getElementById("p").value);
    let texto = document.getElementById("t").value;


    if(!texto.trim().length)
        document.getElementById("erro").innerHTML = "Campo de texto vazio.";
    else if((posicao < 0) || (posicao > a.length) || isNaN(posicao))
        document.getElementById("erro").innerHTML = "Posição inexistente no array.";
    else {
        document.getElementById("erro").innerHTML = "";
        a.splice(posicao,0,texto);

        lista = "";
        for (let i = 0; i < a.length; i++) {
            lista += `<li>${a[i]}</li>`;     
        }

        document.getElementById("lista").innerHTML = lista;
    }
}