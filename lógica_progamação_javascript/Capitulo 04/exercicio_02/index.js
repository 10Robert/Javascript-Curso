

/* 
Formula 22*Altura elevado a 2 para homens
Formula 21*Altura elevado a 2 para mulheres
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")


frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value
    const sexo_feminino = frm.inFeminino.checked
    const altura = Number(frm.imAltura.value)

    peso = sexo_feminino ? 21 * Math.pow(altura, 2) : 22 * Math.pow(altura, 2)
  /* Refatorando utilizando operador ternario
    if(sexo_feminino){
        peso = 21 * Math.pow(altura, 2)
    }else{
        peso = 22 * Math.pow(altura, 2)
    }
*/  
    resp1.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}Kg`
    e.preventDefault()
})