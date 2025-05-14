const buttons = document.querySelectorAll('button');

const buttonHandler = event => {
    event.target.disabled = true;
    event.target.style = 'color:red';
    console.log(event);
};

// Teste os eventos a seguir
// mouseenter
// mouseleave
// contextmenu (botão direito do mouse)
// dblclick
// keydown (click no botão para selecionar, depois aperte uma tecla do teclado)
buttons.forEach( b => {
    b.addEventListener('mouseenter', buttonHandler);
});

window.addEventListener('scroll', ()=>{
    console.log('Scrolling event on window object!');
});

