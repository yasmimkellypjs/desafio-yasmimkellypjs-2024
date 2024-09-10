class Bioma {
    constructor(num, nome, tamanho_total, animais) {
        this.num = num;
        this.nome = nome;
        this.tamanho_total = tamanho_total;
        this.tamanho_disponivel = tamanho_total;
        this.animais = animais;  // Alterado para aceitar array diretamente
    }

    diminuirTamanhoDisponivel(valor) {
        if (this.tamanho_disponivel >= valor) {
            this.tamanho_disponivel -= valor;
        }
    }

    getTamanhoDisponivel() {
        return this.tamanho_disponivel;
    }

    adicionarAnimal(animal, quantidade) {
        const espacoNecessario = animal.tam * quantidade;
        if (this.tamanho_disponivel >= espacoNecessario) {
            this.animais.push(...Array(quantidade).fill(animal));
            this.diminuirTamanhoDisponivel(espacoNecessario);
        } else {
            throw new Error(`Espaço insuficiente no bioma ${this.nome}`);
        }
    }
}

const savana_1 = new Bioma(1, 'savana', 10, [macaco, macaco, macaco]);
const floresta = new Bioma(2, 'floresta', 5, []);
const savana_e_rio = new Bioma(3, 'savana e rio', 7, [gazela]);
const rio = new Bioma(4, 'rio', 8, []);
const savana_5 = new Bioma(5, 'savana', 9, [leao]);

export { savana_1, floresta, savana_e_rio, rio, savana_5, Bioma };
