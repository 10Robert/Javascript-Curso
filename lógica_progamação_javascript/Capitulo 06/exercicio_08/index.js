const prompt = require("prompt-sync")()
console.log("informe os cliente em ordem de chegada ou 'fim' no nome para sair")

clientes = []

do{
    const nome = prompt("Digite o nome do paciente: ")

    if (nome == "fim"){
        break
    }

const idade = Number(prompt("Digite a idade do paciente: "))
clientes.push({nome, idade})
console.log('Ok! Cliente inserido na fila')

}while (true)
console.log('\nFila Preferencial')
console.log("-".repeat(40))

const filaPref = clientes.filter(cliente=> cliente.idade >= 60)
filaPref.forEach((fila, i)=> {
    console.log(`${i + 1}. ${fila.nome}`)
});

console.log('\nFila normal')
console.log("-".repeat(40))
const filaNormal = clientes.filter(cliente=> cliente.idade <= 59)
filaNormal.forEach((fila, i)=>{
    console.log(`${i + 1}. ${fila.nome}`)
});