const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e)=>{
    const precoquilo = Number(frm.inQuilo.value)
    const consumograma = Number(frm.inGrama.value)
    const totalpagar = (precoquilo/1000) * consumograma
    resp1.innerText = `Valor a pagar R$ ${totalpagar.toFixed(2)}`
    e.preventDefault()
})