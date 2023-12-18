frm = document.querySelector("form")
resp1 = document.querySelector("h3")
resp2 = document.querySelector("pre")
btVerificar = document.querySelector("#btVerificar")

const lista = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const num = Number(frm.inNumber.value)

    if (lista.includes(num)){
        alert('Digite outro numero, este numero já esta na lista')
        resp1.innerText = lista
        frm.inNumber.value = ""
        frm.inNumber.focus()
        
    }else{
        lista.push(num)
        resp1.innerText = lista
    }
    
})




frm.btVerificar.addEventListener("click", ()=>{
    let conta = 0
    const crescente = [...lista]
    crescente.sort((a, b) => a - b)

    for (num of lista){
        if (num != crescente[conta]){
            resp2.innerText = "Números não estão em ordem crescente"
        }else{
            resp2.innerText = "Números estão em ordem crescente"
        }
        conta += 1
    }
    
})


/*
lista = [
    1,  2,  5,  8, 10,
   21, 22, 23, 64
 ]

crescente = lista.sort((a, b) => a - b)
console.log(lista)
console.log(crescente)


let conta = 0
for (num of lista){
    if(num != crescente[conta]){
        console.log('Não esta em ordem crescente')
        break
    }
    
    conta += 1
}
*/
