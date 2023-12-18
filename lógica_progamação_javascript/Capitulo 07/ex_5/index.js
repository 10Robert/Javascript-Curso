const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const nome = frm.inNome.value.trim()
    const nomeLista = nome.split(" ")
    const tam = nomeLista.length
    let email = ""
    const ultNome = nome.substr(nome.lastIndexOf(" ")).trim()

    for(let i = 0; i < tam - 1; i++){
        email += nomeLista[i].charAt(0)
    }
    
    let mostrar = email+ nomeLista[tam - 1] + "@empresa.com.br" //ultNome.toLowerCase() 
    resp.innerText = mostrar.toLowerCase()
    frm.inNome.value = ""
    frm.inNome.focus()
})