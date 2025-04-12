class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome - sobrenome;
    }

    imprimir() {
        console.log(this.nome, this.sobrenome);
        
    }
}

class Aluno extends Pessoa {
    constructor(nome, sobrenome, matricula) {
        super(nome, sobrenome)
        this.matricula = matricula;
    }

    imprimir() {
        super.imprimir();
        console.log(this.matricula);
        
    }
}

let p1 = new Aluno('Maria', 'Goulart', '1232123121');
p1.imprimir();
