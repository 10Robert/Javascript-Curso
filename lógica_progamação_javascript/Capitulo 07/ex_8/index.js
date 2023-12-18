const frm = document.querySelector("form")

const TAXA_MULTA = 2 /100
const TAXA_JUROS = 0.33 / 100

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const vencto = new Date()

    const partes = dataVenc.split("-") // data vem no formato aaaa-mm-dd
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto // calcucula a diferente de dias entre as duas datas -> retorna em milisegundos
    let multa = 0
    let juros = 0

    if (atraso > 0){
        // converte ms do  atraso em dias (1 dia - 24h x 60min x 60-seg x 100ms: 86400000)
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS * dias
    }    

    const total = valor + multa + juros 
    
    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)

})

