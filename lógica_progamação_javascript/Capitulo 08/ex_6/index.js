const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.rbSim.addEventListener("click", ()=>{
    frm.inConvenio.className = "exibe"
})

frm.rbNao.addEventListener("click", ()=>{
    frm.inConvenio.className = "oculta"
})

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const valor = frm.inValor.value 
    let desconto

    if(frm.rbSim.checked){
        const plano = frm.inConvenio.value
        desconto = plano == 1 ? 0.5: plano == 2 ? 0.2: 0.1
    }else {
        desconto = 0.1
    }

    resp1.innerText = `Desconto R$: ${calcularDesconto(valor, desconto)}`
    resp2.innerText = `A Pagar R$: ${valor - calcularDesconto(valor, desconto)}`
})

const calcularDesconto = (valor, desconto) => {return valor * desconto}