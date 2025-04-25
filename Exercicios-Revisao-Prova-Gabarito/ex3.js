let times = [];

function imprime() {

    let time = new Object();

    if(document.querySelector('#c1').checked && document.querySelector('#prop1').value) 
        time.nome = document.querySelector('#prop1').value;
    
    if(document.querySelector('#c2').checked && document.querySelector('#prop2').value)
        time.treinador = document.querySelector('#prop2').value;
    
    if(document.querySelector('#c3').checked && document.querySelector('#prop3').value)
        time.estadio = document.querySelector('#prop3').value;
    
    if(document.querySelector('#c4').checked && document.querySelector('#prop4').value)
        time.cidade = document.querySelector('#prop4').value;

    if(time.nome || time.treinador || time.estadio || time.cidade ) {
        times.push(time);

        document.querySelector('#resultado').textContent = '';
        let ul = document.querySelector('#resultado');

        for (let i = 0; i < times.length; i++) {
            let t = times[i];
            let li = document.createElement('li');
    
            let text = '';
            for (const propriedade in t)
                text += ` ${t[propriedade]}`; 
        
            let textnode = document.createTextNode(text);
            li.append(textnode);
            ul.append(li);
        }
    }
}