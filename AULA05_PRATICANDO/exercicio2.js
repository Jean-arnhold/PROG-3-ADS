function escrever() {
    let c = document.getElementById("c").value;
    let i = document.getElementById("importante").checked ? 'red' : 'blue';
    document.getElementById("resultado").innerHTML += `<p style="color:${i}">${c}</p>`
}