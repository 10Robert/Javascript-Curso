//programa exibindo numero decrescente, exemplo de uso laço while

const prompt = require("prompt-sync")()
let numero = Number(prompt("Digite um número: "))

let exibir = ""

while (numero >= 1){
    exibir += numero 
    numero -= 1
}

console.log(exibir)


// laço while com break e continue 
// break sai da execução do laço, e continue volta para o inicio da execução do laço 

let contador = 0

while (contador < 10){
    if (contador < 5){
        console.log(`${contador} vou inicar um novo laço`)
        let contador2 = 0
        while (contador2 < 5){
            contador2 += 1
            console.log(contador2)
            break
        }
    }
    const pergunta = prompt("Continuar?")
    if (pergunta == "sim")
        continue
}
