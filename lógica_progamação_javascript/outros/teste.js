const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];
const apostas = [{'cavalo':1, 'valor':25}, {'cavalo':2, 'valor':15}, {'cavalo':3, 'valor':50}]


let resposta = `Nº Cavalo.............. R$ Apostado\n${"-".repeat(35)}\n`;
CAVALOS.forEach((cavalo, i) => {
    const somaApostas = [0, 0, 0, 0, 0, 0];
  
    // percorre apostas e acumula na posição do cavalo apostado (-1, pois inicia em 0)
    for (const aposta of apostas) {
      somaApostas[aposta.cavalo - 1] += aposta.valor;
    }
    resposta += ` ${i + 1} ${cavalo.padEnd(20)}`;
    resposta += ` ${somaApostas[i].toFixed(2).padStart(11)}\n`;
    });

console.log(resposta);

