const prompt = require("prompt-sync")()

const vinhos = []

function titulo(texto){ // recebe, por parâmetro, texto a ser exibido
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}

do {
    titulo("===<Cadastro de vinhos>===")
    console.log("1. Inclusão de vinhos")
    console.log("2. Listagem de vinhos")
    console.log("3. Pesquisa por tipo")
    console.log("4. Média e destaques")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if (opcao == 1){
        incluir()
    }else if (opcao == 2) {
        listar()
    }else if (opcao == 3) {
        pesquisar()
    }else if (opcao == 4) {
        calcularMedia()
    }else {
        break
    }
}while(true)
function mostra(vinho) {
    console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` + `${vinho.preco.toFixed(2).padStart(9)}`)
}

function incluir (){
    titulo("===< Inclusão de Vinhos >===")

    const marca = prompt("Marca...: ")
    const tipo = prompt("Tipo...: ")
    const preco = Number(prompt("Preco R$: "))
    vinhos.push({marca, tipo, preco})
    console.log("Ok vinho cadastrado")
    listar()
}

function listar () {
    titulo("===< Lista de Vinhos Cadastrados >===")
    console.log("===< Lista de vinhos cadastrados >===")
    console.log("Marca ................. tipo ................. Preço  R$")
    
    for (const vinho of vinhos){
        mostra(vinho)
    }
}

function pesquisar(){
    titulo("===< Pesquisa por Tipo de Vinho >===")

    const pesq = prompt("Tipo: ")
    let contador = 0
    console.log("Marca ................. tipo ................. Preço  R$")

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())){
            mostra(vinho)
            contador ++ 
        }
    }
    if (contador == 0){
        console.log(`Ops não há vinho do tipo ${pesq}`)
    }
}

function calcularMedia(){
    console.log("Preço medio, vinho mais caro e o mais barato.")

    const tam = vinhos.length

    if (tam == 0){
        console.log("Não há vinhos para classificar")
        return None
    }

    let total = 0

    for (const vinho of vinhos){
        total += vinho.preco
    }

    const media = total / tam

    const vinhos2 = [...vinhos]
    vinhos2.sort((a, b)=> a.preco - b.preco)
    const menor = vinhos[0]
    const maior = vinhos[tam -1]

    console.log(
        `O valor medio dos vinhos é ${media.toFixed(2)}` + `O vinho mais caro custa ${maior.preco.toFixed(2)}` 
        + `O vinho mais barato custa ${menor.preco.toFixed(2)}`
    )
}