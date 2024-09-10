class Animal {
    constructor(nome, tam, bioma, biomasecundario = null) {
        this.nome = nome;
        this.tam = tam;
        this.bioma = bioma;
        this.biomasecundario = biomasecundario;
    }
}

const leao = new Animal('LEAO', 3, 'savana');
const leopardo = new Animal('LEOPARDO', 2, 'savana');
const crocodilo = new Animal('CROCODILO', 3, 'rio');
const macaco = new Animal('MACACO', 1, 'savana', 'floresta');
const gazela = new Animal('GAZELA', 2, 'savana');
const hipopotamo = new Animal('HIPOPOTAMO', 4, 'savana', 'rio');

export { leao, leopardo, crocodilo, macaco, gazela, hipopotamo, Animal };

