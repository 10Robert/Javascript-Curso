const prompt = require("prompt-sync")() // adciona pacote para entrada de dados
const num1 = Number(prompt("1 Numero: ")) // Lê os numeros
const num2 = Number(prompt("2 Numero: "))
const soma = num1 + num2

console.log(`Soma é ${soma}`)
