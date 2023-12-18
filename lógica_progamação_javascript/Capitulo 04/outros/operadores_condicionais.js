// definindo uma condição simples
if (2 == 2) {
    console.log('dois é igual a dois')
};

// difinindo condição if e else
if (5 >= 10) {
    console.log('if')
} else{
    console.log('Else')
}

// definindo múltiplas condições
if (10 <= 5){
    console.log('if')
} else if(100 == 400){
    console.log('else if')
} else{
    console.log('else')
}

/*
- Operadores relacionais

== igual. retorna verdadeiro caso os dados contenham o mesmo conteudo
!= diferente. retorna verdadeiro caso os dados contenham conteúdos diferentes
> maior. Comparações de números ou strings
< menor. Comparações de números ou strings
<= menor ou igual. 
>= maior ou igual

Existem os símbolos de ===(estritamente igual) e !===(estritamente diferente).
Eles comparam também o tipo do dado.

portas lógicas
! not. Indica negação. inverte o resultado de uma comparação
&& and indica conjunção. Retorna verdadeiro quando todas as comparações forem verdadeiras.
|| Or.  Indica disjimção. Retorna verdadeiro se, no mínimo, uma das condições definidas for veradeira
*/

let cor = "Azul"
let ano = 2017
// not
if (!cor == "Azul"){
    console.log(" Valor não é azul")
}
// and
if (cor == "Azul" && ano == 2017){
    console.log('Logica and as duas condições são verdadeira')
}
// or
if (cor == "Azul" || ano == 2017) {
    console.log("Logica ou, azul ou ano 2017")
}

// or + and

if (cor == "azul" && (ano == 2017 || ano == 2016)){
    console.log("Operandor and com or usar o parênteses para indicar a ordem de precedência das comparações")
}

// Operador ternario -> consite em atribuir um valor a variável com base na análise de uma condição
idade = 18
if (idade >= 18) {
    categoriaa = "Maior de idade" 
}else {
    categoriaa = "Menor de idade"
}

let categoria = idade >= 18 ? "Maior de idade": "Menor de idade" 


console.log(categoria)
console.log(categoriaa)
