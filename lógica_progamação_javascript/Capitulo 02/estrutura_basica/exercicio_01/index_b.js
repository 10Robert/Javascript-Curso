const frm = document.querySelector("form"); 
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um ouvinte de evento. acionado quando o botao submit for clicado
frm.addEventListener("submit", (e)=> {
    const titulo = frm.inTitulo.value // obtém couteúdo do campo
    const duracao = Number(frm.inDuracao.value) // obtém couteúdo do campo, e transforma em number
    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60 // obtém o resto da divisão
    resp1.innerText = `${titulo}`
    resp1.innerText = `${horas} hora(s) ${minutos} minuto(s)`
    e.preventDefault() // evita o envio do form
});


