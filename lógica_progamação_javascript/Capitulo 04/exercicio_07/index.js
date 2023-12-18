const prompt = require("prompt-sync")()
const valor = Number(prompt("Digite o valor a ser parcelado: "))

const aux = Math.floor(valor / 20)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux 
const valorParcelo = valor / parcelas

console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcelo.toFixed(2)} `)



