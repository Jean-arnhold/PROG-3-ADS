const div = document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', event => {
    event.preventDefault();
});

div.addEventListener('click', event => {
    console.log('Div Event - Click');
}, true);

form.addEventListener('click', event => {
    console.log('Form Event - Click');
    //event.stopPropagation();
}, true);

button.addEventListener('click', event => {
    console.log('Button Event - Click');
}, true);