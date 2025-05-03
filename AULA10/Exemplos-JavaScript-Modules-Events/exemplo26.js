const button = document.querySelector('button');

const buttonHandler = function() {
    console.log('Clicou!');
};

// Pasamos apenas o nome da função.
// Não coloque () após o nome da função!
button.addEventListener('click', buttonHandler);

// Remove o handler após 5 segundos
setTimeout(() => {
    button.removeEventListener('click',buttonHandler);
}, 5000);