const prompt = require("prompt-sync")()//adciona pacote prompt-sync
const pessoas = prompt("Numero de pessoas: ")
const peixes = prompt("Numero de peixes")

let pagar
if (peixes > pessoas){
    pagar = (20 * pessoas) + ((peixes - pessoas) * 12)
}else{
    pagar = pessoas * 20
}

console.log(`Pagar R$ ${pagar.toFixed(2)}`)