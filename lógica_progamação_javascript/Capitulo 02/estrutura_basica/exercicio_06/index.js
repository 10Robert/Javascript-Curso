const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e)=>{
    const nome = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const promocao = (preco * 2) + (preco /2)

    resp1.innerText = `${nome} - Promoção: Leve 3 por ${promocao}`
    resp2.innerText = `O terceiro produto custa apenas R$ ${preco/2}`
    e.preventDefault()
})