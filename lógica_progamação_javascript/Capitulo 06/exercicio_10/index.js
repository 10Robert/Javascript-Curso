const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const btListar = document.querySelector("#btListar")
const btFiltrar = document.querySelector("#btFiltrar")


const clubes = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const clube = frm.inClube.value
    clubes.push(clube)

    frm.inClube.value = ""
    frm.inClube.focus()
}
)

frm.btListar.addEventListener("click", ()=>{
    
    const listar = clubes.reduce((acumulador, clube)  => 
    acumulador + clube + "\n", "" )
    resp.innerText = listar

})

frm.btFiltrar.addEventListener("click", ()=>{
    const tam = clubes.length

    if(tam == 0 || tam % 2 == 1){
        resp.innerText = "Lista deve conter um numero de clubes par"
        return 
    }

    let jogos = ""
    const ultimo = tam - 1
    
    for(i = 0; i < tam / 2; i++){
        jogos += clubes[i] + ' x ' + clubes[ultimo - i] + "\n" 
    }
    resp.innerText = jogos
})




