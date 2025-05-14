const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

button1.onclick = function() {
    console.log('Clicou no #button1!')
}

const buttonHandler = function() {
    console.log('Clicou no #button2!')
}

// Pasamos apenas o nome da função.
// Não coloque () após o nome da função!
button2.onclick = buttonHandler;