const frm = document.querySelector("form")
const pre = document.querySelector("pre")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resposta = ""

    for(let i = 0; i <= 10; i++){
        resposta += `${numero} x ${i} = ${numero * i}\n`
    }
    pre.innerText = resposta
})

