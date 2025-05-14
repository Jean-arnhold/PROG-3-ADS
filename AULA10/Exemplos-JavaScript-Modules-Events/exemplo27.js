const buttons = document.querySelectorAll('button');

// Forma anônima
//const buttonHandler = function(event) {
//    console.dir(event);
//};

// Arrow function handler
const buttonHandler = event => {
    event.target.disabled = true;
    event.target.style = 'color:red';
    console.log(event);
};

buttons.forEach( b => {
    b.addEventListener('click', buttonHandler);
});


