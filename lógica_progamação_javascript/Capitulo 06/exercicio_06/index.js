
lista = [
    {nome: 'Robert', idade: 20},
    {nome: 'Lucas', idade: 20},
    {nome: 'Dantas', idade: 20},
    {nome: 'Azevedo', idade: 11},
    {nome: 'Junior', idade: 9},
    {nome: 'Dorival', idade: 7},
]


const copia = [...lista]
copia.sort((a, b) => a.idade - b.idade) // retorna um novo array em ordem crescente do objeto idade

let resumo = ""
let aux = copia[0].idade // variavel com o menor valor do objeto idade do array
let nomes = []

for (const pessoa of copia){
    const {nome, idade} = pessoa
    if (idade == aux){
        nomes.push(nome) // adciona no incio do array
    }else{
        resumo += aux + "ano(s): " + nomes.length + " criança(s) - "
        resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n" //obtém em porcetagem quantas pessoas/total da lista com a mesma idade
        resumo += "(" + nomes.join(", ") + ")\n\n"
        nomes = []
        aux = idade
        nomes.push(nome)
    }
      // adiciona a última criança
    
}
resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
resumo += "(" + nomes.join(", ") + ")\n\n"

console.log(resumo)


/*

let listar = "" // variavel acumuladora
for (const pessoa of lista){
    const {nome, idade} = pessoa
    listar += nome + " - " + idade + " anos\n"
}

*/