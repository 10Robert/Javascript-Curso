const frm = document.querySelector("form") 
const resp = document.querySelector("h3")

let exibir = ""

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)
    

    for (let i = 1; i <= num; i ++){
        exibir += fruta
        if (i == num){
            break
        }
        exibir += "*"
    }

    resp.innerText = exibir
    
})