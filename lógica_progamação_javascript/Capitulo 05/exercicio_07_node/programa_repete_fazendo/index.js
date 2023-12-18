const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let exibir = ""
frm.addEventListener("submit", (e)=>{
    e.preventDefault( )
    const numChinchilas = Number(frm.inNumero.value)
    const numAno = Number(frm.inAnos.value)

    let acumulador = 0

    for(let i = 1; i <= numAno; i++){

        if (i > 1){
            acumulador = acumulador * 3
        }else{
            acumulador =+ numChinchilas
        }
        

        exibir += `${i} ano, ${acumulador} Chinchilas\n`
        resp.innerText = exibir
    }
 
    
})