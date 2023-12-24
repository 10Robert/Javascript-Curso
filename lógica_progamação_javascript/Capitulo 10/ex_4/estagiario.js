const frm = document.querySelector("form")
const dvMain = document.querySelector("#divMain")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = frm.inIdade.value
    let acumalador = ""
    for (let i = 0; i < idade.length; i++){
        acumalador += idade[i] + ";"
    }

    const listaIdade = acumalador.split(";")

  
    for (let i = 0; i < listaIdade.length; i++){
        if (listaIdade[i] == "1"){
            criaNumero("1.jpg")
        }else if (listaIdade[i] == "2"){
            criaNumero("2.jpg")
        }else if (listaIdade[i] == "3"){
            criaNumero("3.jpg")
        }else if (listaIdade[i] == "4"){
            criaNumero("4.jpg")
        }else if (listaIdade[i] == "5"){
            criaNumero("5.jpg")
        }else if (listaIdade[i] == "6"){
            criaNumero("6.jpg")
        }else if (listaIdade[i] == "7"){
            criaNumero("7.jpg")
        }else if (listaIdade[i] == "8"){
            criaNumero("8.jpg")
        }else if(listaIdade[i] == "9"){
            criaNumero("9.jpg")
        }else if(listaIdade[i] == "0"){
            criaNumero("0.jpg")
        }
    }

    
})

const criaNumero = (caminhoImagem) => {
    const numeroNovo = document.createElement("img")
    numeroNovo.src = "img/" + caminhoImagem
    dvMain.appendChild(numeroNovo)
   
}

frm.addEventListener("reset", () => {
    window.location.reload()
})