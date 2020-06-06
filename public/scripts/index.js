const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

// Função para abrir o layout  de buscar ponto de coleta 
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

// Função para fechar o layout  de buscar ponto de coleta
close.addEventListener("click", () => {
    modal.classList.add("hide")
})