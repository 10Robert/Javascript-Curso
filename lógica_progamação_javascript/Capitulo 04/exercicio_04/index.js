const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)

    // ou if numero % 1 == 0
    if (Number.isInteger(raiz)){
        resp.innerText = `O numero ${numero} é um quadrado perfeito`
    }
    else{
        resp.innerText = `Não há raiz exata para o numero ${numero}`
    }
    e.preventDefault()
})