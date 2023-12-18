const prompt = require("prompt-sync")()
const alunos = []

do{
    const nome = prompt("Digite o nome do aluno: ")

    if(nome == "fim"){
        break
    }

    const nota = Number(prompt("Digite a nota do aluno: "))

    alunos.push({nome, nota})

}while (true){
    const maior = alunos.reduce((a, b)=> Math.max(a, b.nota), 0)
    console.log(`Maior nota ${maior}`)
}