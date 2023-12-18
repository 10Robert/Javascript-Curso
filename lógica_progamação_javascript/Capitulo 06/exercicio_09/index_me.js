const prompt = require("prompt-sync")()
const saques = []

do{
    const saque = Number(prompt("Digite o valor a ser sacado: "))

    if(saque == 0){
        break
    }
    saques.push({saque})
}while(true)

const saqvalido = saques.filter(saque=> saque.saque % 10 == 0)

console.log(`\nNumero de saques validos ${saqvalido.length}`)
let acumula = 0
saqvalido.forEach((saque)=>{
    acumula += saque.saque
    console.log(`saques: ${saque.saque}`)
})
console.log(`Total de saques acumulados é ${acumula.toFixed(2)}`)

const saqInvalido = saques.filter(saque=> saque.saque % 10 != 0)
console.log(`\nNumero de saques invalidos ${saqInvalido.length}`)
saqInvalido.forEach((saque)=>{
    console.log(`saques: ${saque.saque}`)
})
