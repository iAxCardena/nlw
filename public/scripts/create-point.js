function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() )   /*funcao anonima que esta retornando um valor*/
    .then(states => {
        for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value  /**Pega o valor do id da uf selecionada */

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"   /**Limpa as cidades da uf anterior*/
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )   /*funcao anonima que esta retornando um valor*/
    .then( cities => {
        
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false     /**O input da cidade esta desabilitada no html. Apos escolher a uf a escolha da cidade eh habilitada */
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)  /*Toda vez que o UF mudar, ira chamar getCities para mudar as cidades*/

//Itens que coleta
//pegar todos os li`s
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []  //lista com os items de coleta selecionados

function handleSelectedItem(event) {
    const itemLi = event.target
    
    //adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")
    
    const itemId = event.target.dataset.id
    
    
    //Verificar se existem itens selecionados. Se sim, pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(item => {   //recebe o indice do item selecionado
        const itemFound = item === itemId   //comparando para se o item selecionado esta na lista
        return itemFound    
    })


    //Se ja estiver selecionado 
    if(alreadySelected >= 0) {
        //tirar da selecao
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId  //false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        //Se nao estiver selecionado, adicionar a selecao
        selectedItems.push(itemId)
    }

    //Atualizar o campo hidden com os itens selecionados
    collectedItems.value = selectedItems   
}