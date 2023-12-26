const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const elementosH3 = document.querySelectorAll("h3")
    
    elementosH3.forEach((nome, i) => {
        resp.removeChild(nome)
    })


    const nome = frm.inNome.value.trim()
    const nomeSeparado = nome.split(" ")

    const cores = ["blue", "red", "yellow", "green", "orange", "chocolate", "deeppink", "purple", "violet", "aquamarine"]
    for (let i = 0; i < nomeSeparado.length; i++){
        const h3 = document.createElement("h3")
        resp.appendChild(h3)
        const texto = document.createTextNode(nomeSeparado[i])
        const corSorteada = Math.floor(Math.random()*10)
        h3.style.color = cores[corSorteada]
        h3.appendChild(texto)
    }

})