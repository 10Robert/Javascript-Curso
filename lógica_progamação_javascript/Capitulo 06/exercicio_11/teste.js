
lista = [
    200, 100, 500, 50, 10, 213
 ]
console.log(lista)
const crescente = [...lista]
crescente.sort((a, b) => a - b)

const decrecente = [...lista]
decrecente.sort((a, b) => b - a)

console.log(crescente)
console.log(decrecente)
