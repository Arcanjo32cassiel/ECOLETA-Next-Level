// Funções para pegar estados e cidades com API do IGBE
//função  uf dos estados
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json()) //reotrnando
        .then(states => {
            for (const state of states) {

                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUFs()

//Função City
function getCites(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufvalue = event.target.value;

    const indexOfselectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfselectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/distritos`

    citySelect.innerHTML = "<option value>Seleciona a Cidade</option>"
    citySelect.disabled = true
    fetch(url)
        .then(res => res.json()) //reotrnando
        .then(cities => {

            for (const city of cities) {

                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCites)


// Intens de coleta

//pegar todos os li's
const intenstocolect = document.querySelectorAll(".intens-grid")


for (let inten of intenstocolect) {
    inten.addEventListener("click", handleSelectedItem)

}

const collectedItems = document.querySelector("input[name=intens]")

let selectedItems = []

function handleSelectedItem(envent) {
    const intenli = event.target;
    //adicionar ou remover a classe
    intenli.classList.toggle("selected");

    const itemId = intenli.dataset.id

    console.log('ITEM ID: ', itemId)


    //verificação se contem intens selecionado, se sim 
    // pegar os intens selecionados

    const alreadyselected = selectedItems.findIndex(item => {
        const intenFound = item == itemId
        return intenFound

    })

    // se já estiver selecionado 

    if (alreadyselected >= 0) {
        // tirar da seleção
        const filteredItems = selectedItems.filter(item => {
            const intemDifferent = item != itemId //flase
            return intemDifferent

        })
        selectedItems = filteredItems
    }
    // se não  manter selecionado, adcionar á seleção
    else {
        selectedItems.push(itemId)
    }

    console.log('selectedItems: ', selectedItems)

    //  atualizar  o campo escondido comm osdados selecionados
    collectedItems.value = selectedItems
}