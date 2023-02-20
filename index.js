const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const basura = document.querySelectorAll(".paper")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart" , e => {
        console.log(parrafo.innerText)
        parrafo.classList.add("dragging")
        e.dataTransfer.setData("id",parrafo.id)
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("drop", e => {
        const id_parrafo = e.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
    

    seccion.addEventListener("dragover", e => {
        e.preventDefault()
    })
})

basura.forEach(paper => {
    paper.addEventListener("drop" , e => {
        const id_parrafo = e.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove(paper)
    })

    paper.addEventListener("dragover" , e => {
        e.preventDefault()
    })
})








