/*
const hoje = new Date()// cria um objeto que recebe uma instancia da classe Date.
const amanha = new Date()
const dia = amanha.getDate() // metodo retorna o dia da instancia
amanha.setDate(dia + 1) // metodo altera a data da instancia

console.log(`Hoje: ${hoje} \nAmanhã: ${amanha}`)
*/

const data = new Date()
const dia = data.getDate()
const mes = data.getMonth()
const ano = data.getFullYear()

console.log(`${dia}-${mes}-${ano}`)

function calcularPorcentagem(ano, preco){
    const data = new Date()
    const anoUso = ano-  data.getFullYear()
    const entrada = anoUso == 0 ? preco / 2: preco / 0.30.toFixed(2)

    return entrada
}

console.log(calcularPorcentagem(2020, 10.000))
