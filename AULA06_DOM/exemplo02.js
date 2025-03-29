let filhos = document.getElementsByClassName("filho");
let filhos1 = document.querySelectorAll("filho");

// Impressão do ANTES
console.log(filhos);

// Criar um novo filho
// Obtendo o elemento pai
let pai = document.querySelector(".pai")
// Criando uma nova div
let novoFilho = document.createElement("div")
// Adicionando a classe "filho" ao novo elemento
novoFilho.classList.add("filho")
// criando o nodo de texto com o nome do filho
let novoFilhoNome = document.createTextNode("Luana")
novoFilho.append(novoFilhoNome)
pai.appendChild(novoFilho)

console.log(filhos)