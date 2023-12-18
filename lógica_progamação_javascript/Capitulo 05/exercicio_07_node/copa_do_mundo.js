const prompt = require("prompt-sync")()
console.log("Programa Anos de Copa do Mundo. Digite 0 para sair")

do {
    const ano = Number(prompt("ano: ")) 

    if (ano == 0){
        break
    } else if (ano == 1942 || ano == 1946) {
        console.log(`Não houve Copa em ${ano} (segunda guerra mundial)`)
    } else if(ano >= 1930 && ano % 4 == 2){
        console.log(`Sim! ${ano} é ano de Copa do Mundo!`)
    } else{
        console.log(`Não.... ${ano} não é ano de Copa do Mundo.`)
    }
}while (true)
