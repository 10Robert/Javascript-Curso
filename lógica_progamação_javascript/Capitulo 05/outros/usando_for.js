// programa mostrando numeros descrecentes, para exemplificar o for

const prompt = require("prompt-sync")() // variavel para entrada de dados via terminal
const numero = Number(prompt("Digite um numero: "))

let exibir = ""
// variavel de controle, condição, e incremento
for(i = numero; i >= 1; i = i -1){
    exibir += i 

}

console.log(`${exibir}`)
