const valores = [12, 621, 33, 122, 63, 26, 366, 81];

// filter() permite filtrar elementos de modo 
// a reduzir o número de elementos.
// No exemplo abaixo filtramos números maiores que 50
// e menores que 300. Números fora do intervalo
// não são colocados no novo array.
const valoresFiltrados = valores.filter( (valor) => {
    return ((valor > 50) && (valor < 300))
});

console.log(valores);
console.log(valoresFiltrados);