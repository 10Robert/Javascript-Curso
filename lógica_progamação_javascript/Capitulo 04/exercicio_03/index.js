const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) => {
    const horaBrasil = Number(frm.inHorario.value)
    let horaFranca = horaBrasil + 5
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }
    resp1.innerText = `Hora na frança é: ${horaFranca.toFixed(2)}`
    e.preventDefault()
})