const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    resp1.innerText = nome
    resp2.innerText = retornaTracos(nome)
    resp3.innerText = categorizarAluno(idade)
})


function retornaTracos(nome){
    const tam = nome.length
    let tracos = ""

    for(let i = 0; i < tam; i++){
        if (nome[i] == " "){
            tracos += " "
        }else{
            tracos += "-"
        }
    }
    return tracos
}

function categorizarAluno(idade){
    let categoria = idade <= 12 ? "Infantil": idade >= 13 && idade <= 18 ? "Juvenil": "Adulto"
    return categoria
}