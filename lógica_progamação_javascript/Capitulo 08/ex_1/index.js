const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

const calcularPorcentagem = (anoUso, preco) =>
    entrada = anoUso == 0 ? preco / 2: preco * 0.3.toFixed(2)

const CalculaAnoDeUso = (ano) => {
    const data = new Date()
    const anoUso = data.getFullYear() - ano
    anoUso
}
const classificacao = (anoUso)=> {
    let classificado
    if (anoUso != 0){
        classificado = anoUso > 2 ? "Usado": "Seminovo"
    }else{
        classificado = "Novo"
    }
    return classificado
}
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const anoUso = CalculaAnoDeUso(ano)
    const entrada = calcularPorcentagem(ano, preco)
    const parcela = (preco - entrada) / 10
    const carroClassificado = classificacao(anoUso)

    resp1.innerText = `${modelo} - ${carroClassificado}`
    resp2.innerText = entrada
    resp3.innerText = `+10x de R$:${parcela}`
})