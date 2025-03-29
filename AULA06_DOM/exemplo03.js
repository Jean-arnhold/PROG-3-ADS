let ul = document.querySelector('ul')

console.log(ul.children) // Somente element nodes
console.log(ul.childNodes) // todos tipos de nodes

console.log(ul.firstElementChild);
console.log(ul.firstChild)

console.log(ul.lastElementChild)
console.log(ul.lastChild)

const li = document.querySelector("li")
console.log(li.parentElement)

// busca o elemento ancestral mais proximo
const b = li.closest("body")
console.log(b)

// Mesmo nivel - Siblings

const li2 = document.querySelector("#segundo")
console.log(li2.previousElementSibling)
console.log(li2.previousSibling)
console.log(li2.nextElementSibling)
console.log(li2.nextSibling)

li2.remove()

