const button = document.querySelector('button');
const ul = document.querySelector('#saida');
const lista = [];

button.addEventListener('click', () => {
    const nome = document.querySelector('#nome').value;
    const cidade = document.querySelector('#cidade').value;
    const idade = parseInt(document.querySelector('#idade').value);

    const obj = {
        nome: nome,
        cidade: cidade,
        idade: idade,
    };

    lista.push(obj);    
    console.dir(lista);

    const li = document.createElement('li');
    const t = document.createTextNode(`Nome: ${obj.nome}, Cidade: ${obj.cidade}, Idade: ${obj.idade}.`)
    li.append(t);
    ul.append(li);
});