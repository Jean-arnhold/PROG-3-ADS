const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log('Clicou - Primeiro handler!');
});

button.addEventListener('click', () => {
    console.log('Clicou - Segundo handler!');
});