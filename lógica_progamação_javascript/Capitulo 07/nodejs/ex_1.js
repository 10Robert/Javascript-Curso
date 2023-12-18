// ler o numero de paratenses e verificar

const prompt = require("prompt-sync")()
const formula = prompt("Digite a forumla matematica: ")
const tam = formula.length
let abre = 0
let fecha = 0

for (let i = 0; i < tam; i++){
    if (formula[i] == "(")
        abre += 1
    else if(formula[i] == ")"){
        fecha += 1
    }
    if (fecha > abre){
        break
    }        
}

if(abre == fecha){
    console.log("Formula correta em relação a parenteses")
}else {
    console.log("Formula incorreta...")
}
   
