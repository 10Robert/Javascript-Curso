const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const table = document.querySelector("table")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clube = frm.inClube.value

    const h3 = document.createElement("h3")
    const texto = document.createTextNode(clube)
    h3.appendChild(texto)
    resp1.appendChild(h3)

})

frm.btMontar.addEventListener("click", () => {
    const numClubes = document.querySelectorAll("h3")

    if (numClubes.length % 2 != 0){
        alert("A quantidade de clubes não é um numero par!!!")
        return
    }

    numClubes.forEach((clube, i) => {
        const linha = table.insertRow(-1)
        const colum1 = linha.insertCell(0)
        const colum2 = linha.insertCell(1)
        
        for(let i = 0; i < numClubes.length; i++){
            colum1.innerText = clube.innerText
            colum2.innerText = numClubes[i + 1].innerText
        }

    })

})