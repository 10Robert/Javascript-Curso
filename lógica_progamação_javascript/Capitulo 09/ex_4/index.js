const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const produto = frm.inProduto.value

    if(localStorage.getItem('produtos')){
     
        const produtos = localStorage.getItem('produtos').split(";")

    
        produtos.push(produto)
        produtos.sort()
        localStorage.setItem('produtos', produtos.join(";"))

    }else{
        localStorage.setItem('produtos', produto)
    }

    listarProdutos()

    frm.reset()
    frm.inProduto.focus()
})

const listarProdutos = ()=> {
    if(!localStorage.getItem('produtos')){
        resp.innerText = ""
        return
    }
    const produtos = localStorage.getItem("produtos").split(";")
    resp.innerText = `Produtos Adicionados\n-----------------------\n${produtos.join("\n")}`  
}

window.addEventListener("load", listarProdutos)

frm.btLimpar.addEventListener("click", () => {
    if (localStorage.getItem("produtos")) {
      if (confirm("Deseja realmente excluir todos os itens da lista?")) {
        localStorage.removeItem("produtos")
        listarProdutos()
      }
    } else {
      alert("Lista está vazia...")
    }
    frm.inProduto.focus()
  })


