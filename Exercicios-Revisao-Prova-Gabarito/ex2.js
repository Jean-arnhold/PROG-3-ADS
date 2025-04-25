function calcular() {

    let n1 = parseInt(document.querySelector('#n1').value);
    let n2 = parseInt(document.querySelector('#n2').value);

    let op = document.querySelector('input[name="operacao"]:checked').value;
    let res = 0;

    if(op === 'soma')
        res = n1 + n2;
    else if(op === 'subtração')
        res = n1 - n2;
    else if(op === 'multiplicação')
        res = n1 * n2;
    else if(op === 'divisão')
        res = n1 / n2;

    let text = `O resultado da ${op} entre ${n1} e ${n2} é ${res}`;
    document.querySelector('#resultado').textContent = text;
}