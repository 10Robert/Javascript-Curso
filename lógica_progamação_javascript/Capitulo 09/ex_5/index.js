const frm = document.querySelector("form")
const resp1 = document.querySelector("h4")
const resp2 = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const servico = frm.inServico.value
    
    if(localStorage.getItem('servicos')){
        const listaServicos = localStorage.getItem('servicos').split(';')
        listaServicos.push(servico)
        contaServicos(listaServicos)
        localStorage.setItem('servicos', listaServicos.join(";"))
    }else{
        localStorage.setItem('servicos', servico)
        resp2.innerText = 1
    }

    mostraServicos()
    
})

const mostraServicos = () => {
    const listaServicos = localStorage.getItem('servicos').split(";")
    let mostrar = ""
    for (servico of listaServicos){
        mostrar += servico + "\n"
    }
    resp1.innerText = mostrar
}

frm.btExecutar.addEventListener("click", () => {
    const listaServicos = localStorage.getItem('servicos').split(";")
    listaServicos.shift()
    localStorage.removeItem('servicos')
    const servicos = listaServicos.join(";")
    localStorage.setItem('servicos', servicos)
    mostraServicos()
    contaServicos(listaServicos)
})

const contaServicos = (listaServicos) => {
    const tam = listaServicos.length
    resp2.innerText = tam
}