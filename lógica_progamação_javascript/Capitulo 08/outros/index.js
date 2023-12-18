
// função de seta sem precisar da palavra return

const somaUm = (num) => 
    num + 1

console.log(somaUm(10))

function NomeDaFuncao(parametro) {
    // codigo
    let mostraString = parametro + " e " + "Função executada"
    // valor a ser retornado
    return mostraString
}

console.log(NomeDaFuncao('String Mostrada'))

const funcaoDeSeta = (num1, num2) =>{
    const soma = num1 + num2
    return soma 
}
console.log(funcaoDeSeta(10, 10))

// Funções com parâmetros rest -> operador Rest(...), utilidado para unir um conjunto de elementos em um vetor.
// utilizando em funçoes, receber um conjunto de parâmetros, que são convertidos para um vetor.

const calcularMediaOpeRest = (...notas) => {
    const num = notas.length

    if(num == 0) {
        console.log("Informe ao menos uma nota")
    }

    let soma = 0
    for(const nota of notas){
        soma += nota
    }

    const media = soma / num
    return media
}

console.log(calcularMediaOpeRest(3, 5, 5, 4, 3))

// pesquisar args e kwars em javascript
const calcularMediaArguments= (arguments) => {
    let num = 0
    for (argu1 of arguments)
        num += 1

    if(num == 0) {
        console.log("Informe ao menos uma nota")
    }

    let soma = 0
    for(const nota of notas){
        soma += nota
    }

    const media = soma / num
    return media
}

console.log(calcularMediaArguments(3, 5, 5, 4, 3))


// Funções anônimas -> permitem definir a programação de um bloco de código sem atribuir um nome para a função.

const mostraHora = ()=>{
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    console.log(`Atenção para o horário: ${hora}:${min}:${seg}`)
}
setInterval(mostraHora, 5000)// função getInterval, executa a função a cada x tempo passado como parametro

setInterval(()=>{
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    console.log(`Atenção para o horário: ${hora}:${min}:${seg}`)
}, 50)

