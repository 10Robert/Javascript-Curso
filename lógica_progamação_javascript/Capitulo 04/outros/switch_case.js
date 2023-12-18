const bairro = "são paulo"
let taxaEntrega

switch (bairro) {
    case "Vila carolina":
        taxaEntrega = 20
        break;
    case "são paulo":       
    case "Morro doce":
        taxaEntrega = 20
        break;

    default:
        taxaEntrega = 10
        break;
}

console.log(taxaEntrega)

/*
-O comando switch inicia pela definiçao da variavel que escolhe a condição a ser executada
- Cada instrução case deve conter um valor de comparação seguinda pelos:
- os comandos devem ser finalizados por break
- se quiser atribuir um valor de um case igual a o outro apenas deixe-o um embaixo do outro no caso de são paulo e morro doce

*/