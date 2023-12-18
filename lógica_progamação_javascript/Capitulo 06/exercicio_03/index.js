const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const btListar = document.querySelector("btListar")
const btFiltrar = document.querySelector("btFiltrar")
const btSimular = document.querySelector("btSimular")
const test = document.querySelector("h3")

const carros = []

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})

    frm.inModelo.value = ""
    frm.inPreco.value = ""
    inModelo.focus()
    frm.btListar.dispatchEvent(new Event("click")) // dipara um  evento de um click em btlistar
})


frm.btListar.addEventListener("click", (e)=>{

    if (carros.length == 0){
        alert("Não há carros na lista")
        return
    }
    const lista = carros.reduce((acumulador, carro) => 
    acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", (e)=>{
    const maximo = Number(prompt("Qual valor maximo que o cliente deseja pagar?: "))
    //const menorPreco = lista.reduce((a, b) => Math.min(a, b), 0)
    
    if (maximo == 0 || isNaN(maximo)){
        return
    }

    if (carros.length == 0){
        alert("Não há carros na lista")
        return
    }
    
    let lista = ""
    for (const carro of carros.filter(aux => aux.preco < maximo)){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros até R$ ${maximo.toFixed(2)}\n ${"-".repeat(40)}\n ${lista}`

    const listar = carros.filter(aux => aux.preco < maximo)
    if (listar.length == 0){
        test.innerText = `Nenhum carro encontrado com este preço`
    }
})

frm.btSimular.addEventListener("click", (e) => {
    const desconto = Number(prompt("Qual valor do desconto a ser aplicado?"))
    const carros_desconto = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - desconto
    }))

    if (desconto == 0 || isNaN(desconto)){
        return
    }

    if (carros.length == 0){
        alert("Não há carros na lista")
        return
    }

      
    const lista = carros_desconto.reduce((acumulador, carro) => 
    acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
    
})

