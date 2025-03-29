let mav = document.querySelector("#maverick");
let opa = document.querySelector("#opala");
let gol = document.querySelector("#gol");
let uno = document.querySelector("#uno");

// Opala antes do Maverick

mav.before(opa);
uno.after(gol);
gol.replaceWith(uno);
