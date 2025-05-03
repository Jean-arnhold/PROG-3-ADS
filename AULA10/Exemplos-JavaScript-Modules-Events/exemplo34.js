// const lis = document.querySelectorAll('li');
// lis.forEach( li => {
//     li.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });


const ul = document.querySelector('ul');
ul.addEventListener('click', event => {
    event.target.classList.toggle('highlight');
}); 
