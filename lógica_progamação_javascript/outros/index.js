const frm = document.querySelector("form")
const exibe = document.querySelector("#exibe")
const resp = document.querySelector("h2")
frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const mensagem = frm.inMensagem.value
    const h5 = document.createElement("h5") // cria elemento h5 na pagina
    const texto = document.createTextNode(mensagem)
    h5.appendChild(texto) // define que texto sero filho do elemento h5
    exibe.appendChild(h5)

    frm.inMensagem.value = ""
    frm.inMensagem.focus()
})

frm.btSelecionar.addEventListener("click", ()=>{
    const mensagens = document.querySelectorAll("h5")
   
    if (mensagens.length == 0){
        alert("Nenhuma mensagem para selecionar! ")
    }

    let aux = -1

    for (let i = 0; i < mensagens.length; i++){
        if(mensagens[i].className == "tarefa-selecionada"){
            mensagens[i].className = "tarefa-normal"
            aux = i
            break
        }
    }
    if (aux == mensagens.length -1) {
        aux = -1
    }

    mensagens[aux + 1].className = "tarefa-selecionada"

})


frm.btRemover.addEventListener("click", ()=>{
    const mensagens = document.querySelectorAll("h5")
    let aux = -1

    mensagens.forEach((mensagem, i)=>{
        if (mensagem.className == "tarefa-selecionada"){
            aux = i
        }
    })

    if (aux == -1){
        alert("Selecione uma mensagem para remove-la")
    }

    if (confirm(`Remover mensagem: ${mensagens[aux].innerText}??`)){
        exibe.removeChild(mensagens[aux])
    }

})