const prompt = require("prompt-sync")()
const valor = Number(prompt("Digite o valor da compra: "))
const parcelas = Number(prompt("Digite quantas vezes voce deseja parcelar: "))

const valParcela = Math.floor(valor) / parcelas
const ultParcela = (valor - Math.floor(valor)) + valParcela

for(let i = 1; i <= parcelas; i++){
    if (i == parcelas){
        console.log(`${valParcela} - parcela: ${ultParcela.toFixed(2)}`)
        break
    }
    console.log(`${valParcela} - parcela: ${valParcela}`)
}
/*  // codigo resolvido pelo livro

const prompt = require("prompt-sync")()
const valor = Number(prompt("Digite o valor da compra: "))
const num = Number(prompt("Digite quantas vezes voce deseja parcelar: "))

const valorParcelas = Math.floor(valor / num) 
const valorFinal = valorParcelas + (valor % num)

for(let i = 1; i < parcelas; i++){
        console.log(`${i} - parcela: ${valorParcelas.toFixed(2)}`)
    }
    console.log(`${num} - parcela: ${ultParcela.toFixed(2)}`)
}

*/