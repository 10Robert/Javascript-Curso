
const contaVisitas = () => {

    let contador = 0
  
    if (localStorage.getItem("lojaContador")) {
        contador = Number(localStorage.getItem("lojaContador"))
    }
  
    contador++
  
    if (contador == 1) {
        alert("Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.")
    } else {
        alert(`Que bom que você voltou! Esta é a sua visita de número ${contador} ao nosso site.`)
    }
  
    localStorage.setItem("lojaContador", contador)
  }
  

window.addEventListener("load", contaVisitas)

/*
const constaVisitas = () => {
    let visita
    if(!localStorage.getItem("visitas")){
        alert("Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.")
        localStorage.setItem("visitas", "1,")
    }else{
        let visitas = localStorage.getItem("visitas").split(",")
        alert(visitas)
        alert(`Que bom que você voltou! está é a sua visita numero ${localStorage.getItem("visitas").length} ao nosso site`)
        visita = localStorage.getItem("visitas") + "1,"
        localStorage.setItem("visitas", visita)
    }
    
    return 
}
*/
