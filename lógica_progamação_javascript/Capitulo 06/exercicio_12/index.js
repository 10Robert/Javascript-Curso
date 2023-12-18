const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const btListar = document.querySelector("#btListar")
const btAprovados = document.querySelector("#btAprovados")


lista = []

const nota = 30

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const nome = frm.inNome.value
    const acertos = frm.inAcertos.value

    lista.push({nome, acertos})
    frm.inNome.value = ""
    frm.inAcertos.value = ""
    frm.inNome.focus()


    frm.btListar.dispatchEvent(new Event("click")) 
})

frm.btListar.addEventListener("click", ()=>{

    const listados = lista.reduce((acumulador, candidato) => 
    acumulador + candidato.nome + " - " + candidato.acertos + "\n", "")

    resp.innerText = listados
    
})

frm.btAprovados.addEventListener("click", ()=>{
    const decrescente = [...lista]
    decrescente.sort((a, b)=> b.acertos - a.acertos)

    const aprovados = decrescente.filter(candidato => candidato.acertos >= 30)

    const listados = aprovados.reduce((acumulador, candidato)=> 
    acumulador + candidato.nome + " - " + candidato.acertos + "\n", ""
    )

    resp.innerText = listados
})