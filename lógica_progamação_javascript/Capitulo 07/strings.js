 // string -> "Cadeia de caracteres"

/*
Assim como vetores, objeto string dispõem de diversos métodos e atributos para manipula-lo

*/

//     indice ->0123456
const cidade = "Pelotas"
console.log(cidade.charAt(5))// retorna o elemento passado que estiver no indice passado
console.log(cidade.length) // propriedade retorna numero de elementos


// Convertendo letras maiúsculas ou minúsculas - metodos -> toUpperCase(, toLowerCase()
const prompt = require("prompt-sync")()

maisculas = "ROBERT"
minusculas = "lucas"

console.log(maisculas.toLowerCase(), minusculas.toUpperCase())

while(true){
    const continua = prompt("Continutar (S/N)?")
    
    if(continua.toLowerCase() == "N"){
        break
    }

}

// Cópia de  caracters e remoção de espaços da string

const palavra = 'Salada'
const copia = palavra.substr(1, 3) // parm 1 -> incio, parm 2 -> Quantidade de Caracteres
const copia2 = palavra.substr(4)// apenas param 1 -> vai inicar do indice passado e terminar ate o final da str
console.log(copia, copia2)

// Removendo os espaços da string utilizando o metodo trim()

const espaco = " Robert Lucas "
console.log(espaco)
console.log(espaco.trim())// metodo que tira o espaço da string do inicio e do final
console.log(espaco.trimStart()) // tira espaço do inicio
console.log(espaco.trimEnd()) // metodo que tira espaco do final da string

// Locazir um ou mais caracteres na string

const posicao1 = palavra.indexOf("a") // retorna o indice do primeiro caracter quer for encontrado que seja igual. -> retorna 1
const posicao2 = palavra.lastIndexOf("a") // retorna o indicedo do primeiro caracter que for encontrado da direira par esquerda -> retorna 5
const posicao3 = palavra.indexOf("Sal") // retorna 0 se caracters forem encontrados.
const posicao4 = palavra.indexOf("e") // retorna -1 se caracters não for encontrado
const existe = palavra.includes("d") // retorna true se caracter for encontrado, caso contrario retorna false.

// transformando string em vetor com metodo split()

const nomeCompelto = "Robert Lucas Dantas De Azevedo"
const copiaNome = nomeCompelto.split(" ")// cria uma lista com o parm de separação sendo o espaço
console.log(copiaNome)

const tam = copiaNome.length
let email = ""

for (let i = 0; i < tam - 1; i++){
    email += copiaNome[i].charAt(0)
}
const ultNome = nomeCompelto.substr(nomeCompelto.lastIndexOf(" ")).trim()
email += ultNome + "@empresa.com.br"
console.log(email)


 
/* Função math()

-> verifica se a existencia de letras maisculas ou minusculas numeros e simbolos em uma string, utilizando
o conceito de expressoões regulares.

Uma expressão regular contém um conjunto de caracters que indicam um padrão a ser pesquisado.

*/ 


const senha = "#SenhA_123!"

console.log(typeof(senha.match(/[a-z]/g).length)) // retorna letras de a z que estiverem minuscula, retorno -> enh
console.log(senha.match(/[A-Z]/g)) // retorna letras de a z que estiverem maisculas, retorno -> enh
console.log(senha.match(/[0-9]/g)) // retorna todos os numeros de um a 9, retorno -> 1,2,3
console.log(senha.match(/\W|_/g)) // retorna simbolos da string, anderline nãp é recuperado por \w utiliza-se acrescentado |_

console.log(senha.match(/[0-9]/g).length)

if (senha.match(/[a-z]/g).length < 10){
    console.log("teste")
}


/*    Substituição de caracteres - metodo replace - espressões regulares. 

Por padrão, a substituição incide apenas sobre a primeira ocorrência do caractere na string. Com o uso
da expressão regular, com a oção g(global) indicada, a troca ocorre em toda a string.
obs -> na chamada do metodo a string mantém seu valor original, apenas a variavel a atribuida a chamada
do metodo recebe o retorno do metodo.

*/

const senha_ = "ABACAD"
const senha2 = senha_.replace("A", "X")// substitui o primeiro caracter encontrado no parm1 pelo parm2

// substitui todos os caracters encontrados com o valor passado na expressão regular, e adciona o parm2
const senha3 = senha_.replace(/A/g, "X")
console.log(senha2, senha3)

//Retirando os espaços entre os caracteres

const app = "App Controle Financeiro"
const app2 = app.replace(/ /, "") // retira o espaço da string, como /g nao foi passado a troca ocorre somente no primeiro espaço encontrado
const app3 = app.replace(/ /g, "")// com o arg /g a instrução se torna global para toda string
const app4 = app.replace(/ /g, "").toLowerCase() // retorna str sem espaço e letra minusculas
console.log(app2, app3, app4)




  

















