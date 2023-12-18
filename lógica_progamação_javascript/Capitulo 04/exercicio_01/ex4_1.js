// cria referencia nas tags do documento html
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//cria "ouvinte" de evento, quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    e.preventDefault() // Evita o envio do formulario
    const nome = frm.inNome.value // obtém os valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2
    
    resp1.innerText = `Média das notas: ${media.toFixed(2)}`

    if (media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi reprovado(a)`
        resp2.style.color = "Blue"
    }else if (media >=4){
        resp2.innerText = `Atençao ${nome}! Você está em exame`
        resp2.style.color = "green"
    }else{
        resp2.innerText = `Ops ${nome}! Você foi reprovado`
        resp2.style.color = "red"
    }
})