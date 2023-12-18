const frm = document.querySelector("form")
const resp = document.querySelector("#outResp1")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let exibir = ""

    for(i = numero; i >= 1; i --){
        exibir += `${i}, `
    }
    resp.innerText = exibir
})