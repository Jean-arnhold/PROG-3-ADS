const form = document.querySelector('form');

form.addEventListener('submit', event => {
    // Previne o comportamento padrão esperado para o evento
    // Nesse caso, não submete o formulário
    event.preventDefault();
    
    console.log(event);
});