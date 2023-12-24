// abs - > retorna o valor absoluto se for negativo retorna positivo
// ceil -> arredonda um numero para cima. por exemplo o retorno sera 11.
// floor -> arredonda um numero para baixo. por exemplo o retorno sera 10.
// pow -> retorna a base elevada ao expoente
// random -> retorna um numero aleatório entre 0 e 0.99 com varias casas decimais
// round -> arredonda o numero para um inteiro mais proximo.
// sqrt -> Retorna a raiz quadrada do numero

let numero_absoluto = Math.abs(-10) 
let numero_arredondado_cima = Math.ceil(10.5)
let numero_arredondado_baixo = Math.floor(10.5)
let numero_elevado = Math.pow(10, 9) // param base e expoente
let numero_random = Math.random() 
let numero_round = Math.round(2.7) 
let numero_raiz_quadrada = Math.sqrt(9)

console.log(numero_absoluto)
console.log(numero_arredondado_cima)
console.log(numero_arredondado_baixo)
console.log(numero_elevado)
console.log(numero_random)
console.log(numero_round)
console.log(numero_raiz_quadrada)


/* Precêdencia de operadores 
operador de divisão se sobrepõe diante do operador de soma.
funçõe smatematicas ou funções criadas pelos usuarios tem prioridade sobre os operadores.

*/

let media_a = 10 + 10 / 2
let media_b = (10 + 10) / 2

console.log(media_a, media_b)