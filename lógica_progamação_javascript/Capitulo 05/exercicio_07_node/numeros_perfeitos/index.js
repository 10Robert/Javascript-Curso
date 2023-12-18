const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let somaNum = 0

    for(let i = 0; i <= num; i ++){
        if (num % i == 0 && i < num){
            somaNum += i
        }

        if (somaNum == num){
            resp.innerText = `${num} é um numero pefeito`
        }else{
            resp.innerText = `${num} numero não é um numero pefeito`
        }
}})