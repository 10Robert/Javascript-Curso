/*
para referencia os elementos da pagina html, existem dois metodos.

- getElementByID(), para um elemento ser referenciado ele precisa ter um id.
- querySelector(), este metodo é mais amplo ele pode ser referenciado por classe id ou tag do elemento


*/


// cria referência ao form e ao elemento h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value //obtém nome digitado no form
    resp.innerText = `Olá ${nome}` // exibe a resposta do progama
    e.preventDefault()// evita envio do form
});

const resp_ = document.getElementById("h3") // primeiro elemento h3 da pagina
const cor = document.qyerySelector("#inCor")// obtem o elemento com id=inCor
const lista = document.querySelector(".lista") // obtem o elemento da class=lista

// além de guardar os valores em uma variavel é possivel também obter os valores como mostra a seguir.

const nome_ = frm.inNome.value // obtem o nome da input com id inNome
const nome_direto = document.qyerySelector("form").inNome.value // acessa a input diretamente sem precisar de outra const



/*
frm.addEventListener("submit", (e) =>{comando})
metodo que executa a função quando houver uma iteração com o elemento apontado.

- a propriedade "value" obtém ou altera o couteúdo de um campoo de formulario.
- innertext -> consulta ou aterara o texto exibido por elementos html. textContent outerText é semelhante
- innerhtml -> consulta ou altera o contéudo de elementos html
*/


/*                       Método preventDefault()



*/



