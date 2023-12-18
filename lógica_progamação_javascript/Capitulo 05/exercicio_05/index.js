const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const num = Number(frm.inNumero.value)
/* 
    let numDivisores = 0
    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            numDivisores++
       }
    }

    if (numDivisores == 2){
        resp.innerText = `O numero ${num} é primo`
    } else{
        resp.innerText = `O numero ${num} não é primo`
    }
*/

    let temDivisor = 0

    for(let i = 2; i<= num / 2; i ++)
        if(num % 1 == 0){
            temDivisor = 1
            break
        }
    if (num > 1 && !temDivisor){
        resp.innerText = `O numero ${num} é primo`
    }else{
        resp.innerText = `O numero ${num} não é primo`
    }
})