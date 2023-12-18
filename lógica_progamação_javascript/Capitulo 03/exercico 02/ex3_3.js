const prompt = require("prompt-sync")() // adciona pacote de entrada de dados
const salario = Number(prompt("Digite o seu salario: ")) // Lê dados de entrada
const tempo = Number(prompt("Digite o seu tempo de empresa: "))

const quadriquenios = Math.floor(tempo / 2)// calcula quadriquenios
const acrescimo = salario * quadriquenios / 100

console.log(`Quadriquenios: ${quadriquenios}`)
console.log(`Salario com ajuste: ${salario + acrescimo}`)