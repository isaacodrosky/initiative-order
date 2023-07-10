const nameInput = document.getElementById('name-input')
const rollInput = document.getElementById('roll-input')
const addBtn = document.getElementById('add-btn')
const listEl = document.getElementById('list-el')

let characters = []
let sortedCharacters = []
let html = ''

addBtn.addEventListener('click', () => {
    characters = addNewChar()

    sortedCharacters = sort(characters)

    listEl.innerHTML = getHtml(sortedCharacters)
})

function addNewChar() {
    let newChar = {name: `${nameInput.value}`, roll: Number(`${rollInput.value}`)}

    characters.push(newChar)
    
    nameInput.value = ''
    rollInput.value = ''

    return characters
}

function sort(characters) {
    sortedCharacters = characters.sort(({roll:a}, {roll:b}) => a - b)
    
    return sortedCharacters
}

function getHtml(characters) {
    html = ''
    characters.forEach(character => {
        html += `<li>${character.name} - ${character.roll}</li>`
    })

    return html
}
