function calcular() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    let resultado;
    let option = document.querySelector('input[name="operacao"]:checked').value; 

    switch(option) {
        case "soma": {
            resultado = `${a} + ${b} = ${(a+b)}`;
            break;
        }

        case "sub": {
            resultado = `${a} - ${b} = ${(a-b)}`;
            break;
        }

        case "mult": {
            resultado = `${a} * ${b} = ${(a*b)}`;
            break;
        }

        case "divi": {
            resultado = `${a} / ${b} = ${(a/b)}`;
            break;
        }

        case "pot": {
            resultado = `${a} ^ ${b} = ${Math.pow(a,b)}`;
            break;
        }
    }

    document.getElementById("resultado").innerHTML = `<p>${resultado}</p>`

}