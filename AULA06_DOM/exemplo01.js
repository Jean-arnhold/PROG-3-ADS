// getElementById Obtem UM elemento
let t = document.getElementById("titulo");
console.log(t.textContent);
t.textContent = "Outro texto";

// querySelector - Obtem UM elemento
// # procura ID
// . procura Class
let p1 = document.querySelector(".paragrafo")
console.log(t.textContent);

// Retorna um Array
let f1 = document.querySelectorAll(".frutas");
console.log(f1);

f1.item(0).classList.add("citrica");
f1.item(1).classList.add("tropical");

let f2 = document.getElementsByTagName("li");
console.log(f2);

let f3 = document.getElementsByClassName("frutas")
console.log(f3)