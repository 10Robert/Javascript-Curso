// para declarar um array basta seguir a seguinte sintexe
// o primeiro indice do array começa em 0

const produtos = ["Arroaz", "Feijão", "Iogurte"] // pode ser alterado, porem não pode ser redeclarado
const lista = new Array()

produtos[0] = "Alterando..." // alterando o valor utilizando o indice
produtos.push("adcionando_usando_metodo_push")//adciona elementos ao final do vetor
//console.log(produtos)

//console.log(produtos[0])
produtos.unshift("adciona elemento ao inicio") // adciona um elemento no incio, e descoloca os outros elementos.
//console.log(produtos)
//console.log(produtos[0])

console.log(produtos)
produtos.pop() // remove o ultimo elemento do vetor
console.log(produtos)
produtos.shift // remove o primeiro item da lista.
console.log(produtos)


// fatiando array 
// splice - recebe dois parametros indice incial e final, para remover da lista
// slice - recebe dois parametros indice incial e final, para retornar os dados.
//slice não modifica o couteúdo do vetor original, enquanto splice modifica
const fatiando = ["1", "2", "3", "4", "5", "6"]
const numero = fatiando.slice(0, 2)
fatiando.splice(4,5)
console.log(fatiando)
console.log(numero)

//acessando itens da lista
console.log(fatiando.length)// metodo para mostrar o tamanho da lista
console.log(fatiando.toString()) // função que transforma a lista em uma string seprando cada elemento com uma virgula
console.log(fatiando.join(" ")) // função split transforma em uma string e recebe o parametro para determina o caracter 
//que vai ser utilizado para crar o espaço sobre cada elemento


// Iterando sobre as listas.

for (let i = 0; i < fatiando.length; i++){
    console.log(fatiando[i])
}

//para precorrer elementos de um vetor, pode ser usar of e o metodo forEach()

for (const num of fatiando){
    console.log(`Usando of ${num}`)
}

fatiando.forEach((numero, i) =>{
    console.log(`${i+1} indice, ${numero}`)
}) // forEach pode ser obter o indice passando uma variavel para guardar o valor e depois utilizar o valor.


/*
Localizando conteúdo em vetores.

Verificar-se contéudo  existe ou não, utilizar os seguintes métodos.
- indexOF() busca ocorre a partir do inicio do vetor.
- lastIndexof() busca ocorre a partir do final do vetor
  Se existir o conteudo é retornado o index da ocorrencia, caso contrario é retornado -1
- o metodo includes por sua vez, retorna true ou false.
 */
const idades = [1, 5, 6, 7, 8 ,9, 10]
console.log(idades.indexOf(1))
console.log(idades.includes(1))
console.log(idades.lastIndexOf(10))
console.log(idades.indexOf(100))


// Vetores e objetos

const carros = []
//carros.push({modelo: "sandero", preco: 35500})
//carros.push({modelo: "onix", preco: 43500})

const modelo = "uno"
const preco = 25.000
carros.push({modelo, preco})

for (const carro of carros){
    console.log(`${carro.modelo} : ${carro.preco}`)
}
// se o nome da variavel for igual o nome do atributo pode ser atribuir usando a seguinte sintase




/* Desestruturação e operador Rest/Spread 
atribuir valores ás variáveris via desestruturação dos elementos de vetores ou objetos.

*/ 

for (const carro of carros){
    const {modelo, preco} = carro //"Destrutura objeto carro em modelo e preco"
    console.log(`${modelo} - R$: ${preco}`)
}

// obtendo os elementos de um array

const pacientes = ["ana", "carlos", "sofia", "joao"]
const [a, b, c] = pacientes
console.log(a)
console.log(b)
console.log(c)


// operador Rest(...)
const [atender, proximo, ...outros] = pacientes // outros vai ficar com o restante do array
console.log(atender)
console.log(proximo)
console.log(outros)

// Os ... podem ser utilizados com uma ideia de espalhar os elementos de um array ou objeto.

const caminhao = {modelo: "mercedez", preco: 59000}
const caminhao2 = {...caminhao, ano: 2023}
console.log(caminhao2)

// Pesquisa e filtrar dados

const idades_ = [12, 20, 22, 34, 45]
let maiores = false // variavel flag ou sinalizador

for (const idade of idades_)
    if (idade > 18){
        console.log(idade)
    }
    if (!maiores){
        console.log("Não há maiores que 18 na lista")
    }

// map filter e redunce

const numeros = [10, 13, 20, 8, 15]
const dobros = numeros.map(num => num * 2)
console.log(dobros.join(",")) // transforma em str e adiciona uma virgula

//usando arrays de objetos

const amigos = [
    {nome: "Guilherme", idade: 22},
    {nome: "Gabriel", idade: 20},
    {nome: "Gustavo", idade: 23},
    {nome: "Ramon", idade: 23},
]

const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc:2022 - aux.idade}))

for (const amigo of amigos2){
    console.log(`${amigo.nome} nasceu em ${amigo.nasc}`)
}
const amigos_filtro = amigos.filter(aux => aux.idade > 21 || aux.nome.includes("b"))
for (const amigo of amigos_filtro){
    if (amigos_filtro.length == 0){
        console.log("Não há amigos com estás condições")
    }else{
        console.log(`nome do amigo: ${amigo.nome} e a idade é ${amigo.idade}`)
    }
}
/* 
- OBJETIVO DO MAP É ALTERAR OS ELEMENTOS DE UM VETOR EM AO FINAL, CRIAR UM NOVO, COM A MESMA 
QUANTIDADE DE ITENS VETOR ORIGINAL

O metodo filter tambem cria um novo array, agora cada elemento do vetor é submetido a uma condição que se verdadeira adciona 
um elemento ao novo array
*/

const numeros__ = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
const pares = numeros__.filter(num => num % 2 == 0)
console.log(pares.join(", "))

// redunce itera sobre o array e concatena os valores.

const soma_idade = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0) // parametro 0 diz que var acumulador inicia em 0
// Caso o parametro de inicio da variavel nao seja passado, o aculador sera equivalente ao valor do primeiro indice da lista e
// inica iterando do indice 1.

const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + " ", "")

console.log(`amigos concatenados - ${todos} ${soma_idade}`)

//obtendo o maior valor utilizando redunce
console.log(numeros__.reduce((a, b) => Math.min(a, b)))



// metodo sort javascript, ordena  a lista de acordo com as regras de ordenação.

const metodoSort = [
    {nome: 'Robert', idade: 23},
    {nome: 'Lucas', idade: 20},
    {nome: 'Dantas', idade: 12},
    {nome: 'Azevedo', idade: 11},
    {nome: 'Junior', idade: 9},
    {nome: 'Dorival', idade: 7},
]

const copia = [...metodoSort] // usando o operador rest para desestrutura o objeto em uma nova array
copia.sort((a,b) => a.idade - b.idade) // ordenando por idade
console.log(copia)




// Metodos de array

num_lista = [1, 3 ,5 ,6 ,7, 8]

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. contrario underfined
console.log(num_lista.find((num)=> num > 3)) 