const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const erros = []
    const senha = frm.inSenha.value
    const tam = senha.length
    
    if (tam < 8 || tam > 15){
        erros.push("Senha deve possuir entre 8 a 15 caracters!")
    }

    if (senha.match(/[0-9]/g) == null){
        erros.push("Senha deve possuir no minimo um numero")
    }

    if (senha.match(/[a-z]/g) == null){
        erros.push("Senha deve possuir no mínimo uma letra mínuscula")
    }

    if (senha.match(/[A-Z]/g) == 1 || !senha.match(/[A-Z]/g)){
        erros.push("Senha deve possuir no mínimo (2) letras maísculas! ")
    }

    if (senha.match(/\W|_/g) == null){
        erros.push("Senha de possuir no mínimo (1) caracter especial! ")
    }

    const exibir = erros.reduce((acumulador, erro) =>
        acumulador + erro + "\n", ""
    )

    if (erros.length == 0){
        resp.innerText = 'Senha criada com sucesso'
    }else{
        resp.innerText = exibir
    }
    
})