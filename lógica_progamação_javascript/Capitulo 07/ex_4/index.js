const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const nome = frm.inNome.value.trim()
    if( !nome.includes(" ")){
        alert("Digite o nome completo!!")
    }

    const espacoInicio = nome.indexOf(" ")
    const espacoFinal = nome.lastIndexOf(" ")

    let cracha =nome.substr(0, espacoInicio) + " " + nome.substr(espacoFinal)
    
    resp.innerText = cracha
})