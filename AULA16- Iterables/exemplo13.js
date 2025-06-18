const valores = [12, 621, 33, 122, 63, 26, 366, 81];

// O sort() ordena os elementos do array.
// A lógica da ordenação é dada pela função, sendo que
// a e b são dois elementos a serem comparados.
valores.sort( (a, b) => {
    if(a > b) {
        return 1;
    } else if(a === b) {
        return 0;
    } else {
        return -1;
    }
});

console.log(valores);