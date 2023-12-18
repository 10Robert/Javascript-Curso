// cria referencia para as tags informadas

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e)=>{
    const medicamento = frm.inMedicamento.value
    const preco = frm.inPreco.value
    const promocao = (preco * 2) - ((preco * 2) % 2)  

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$ ${(promocao.toFixed(2))}`
    e.preventDefault()

})