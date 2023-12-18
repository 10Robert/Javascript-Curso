const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const nome = frm.inNome.value.trim()

    if(!validarNome(nome)){
        return alert("Por favor!! Digite o nome completo")
    }
    
    resp.innerText = obterSobrenome(nome) + contarVogais2(nome)
})

function validarNome(nome){
    const nomeValidado = nome.split(" ")
    const tam = nomeValidado.length

    if(tam < 3){
        return false
    }else{
        return true
    }
}

function obterSobrenome(nome){
    const nomeDividido = nome.split(" ")
    return nomeDividido[nomeDividido.length - 1]
}

function contarVogais(nome){
    let num = 0
    for(const letra of nome){
        const verificaLetra = letra.toUpperCase()
        if (verificaLetra == "A" || verificaLetra == "E" || verificaLetra == "I" ||verificaLetra == "O" ||verificaLetra == "U"){
            num ++
        }
    }
    return num < 10 ? "0" + num: num
}

// outra forma de programar a função contarVogais()
const contarVogais2 = nome => {
    let num = 0
    const vogais = "AEIOU"
    for (const letra of nome) {
      const letraUC = letra.toUpperCase()
      if (vogais.includes(letraUC)) {
        num++
      }
    }
    return num < 10 ? "0" + num : num
  }