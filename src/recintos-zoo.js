import { leao, leopardo, crocodilo, macaco, gazela, hipopotamo, Animal } from './animal.js';
import { savana_1, floresta, savana_e_rio, rio, savana_5, Bioma } from './bioma.js';

class RecintosZoo {
    constructor() {
        this.recintos = [savana_1, floresta, savana_e_rio, rio, savana_5];
    }

    analisaRecintos(animal, quantidade) {
        let recintosViaveis = [];
        this.recintos.forEach((recinto) => {
            const biomaAdequado = recinto.nome.includes(animal.bioma) || recinto.nome.includes(animal.biomasecundario);
            if (!biomaAdequado) return;

            const espacoNecessario = animal.tam * quantidade;
            if (recinto.getTamanhoDisponivel() < espacoNecessario) return;

            const carnivoros = ['LEAO', 'LEOPARDO', 'CROCODILO'];
            if (carnivoros.includes(animal.nome)) {
                const outrasEspecies = recinto.animais.some(a => a.nome !== animal.nome);
                if (outrasEspecies) return;
            }
            if (animal.nome === 'HIPOPOTAMO' && recinto.nome !== 'savana e rio') return;

            if (animal.nome === 'MACACO' && recinto.animais.length === 0) return;

            const temOutraEspecie = recinto.animais.some(a => a.nome !== animal.nome);
            let espacoLivre = recinto.getTamanhoDisponivel();
            if (temOutraEspecie) {
                espacoLivre -= 1;
                if (espacoLivre < espacoNecessario) return;
            }

            recintosViaveis.push({
                numero: recinto.num,
                espacoLivre: espacoLivre - espacoNecessario,
                espacoTotal: recinto.tamanho_total,
            });
        });

        recintosViaveis.sort((a, b) => a.numero - b.numero);

        if (recintosViaveis.length === 0) {
            return "Não há recinto viável";
        }

        return recintosViaveis.map(r => `Recinto nro ${r.numero} (espaço livre: ${r.espacoLivre} total: ${r.espacoTotal})`);
    }
}

export { RecintosZoo as RecintosZoo };
