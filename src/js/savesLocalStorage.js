import {refs} from './refs.js'

function saveLocalStorage(inputName, points) { //сохраня в локал стораж
    localStorage.setItem('nameUser', inputName)
    localStorage.setItem('points', points)
    
if (localStorage.getItem('nameUser')) {
    const nameUser = localStorage.getItem('nameUser');
    const pointUser = localStorage.getItem('points');
    addNameInTable(nameUser, pointUser)
    }
}

function addNameInTable(nameUser,points ) {
    refs.ilListPlayersRef.insertAdjacentHTML('beforeend',
        `<li class="list-item-players">${nameUser}: ${points} очков</li>`)
}

//Возращаем с локал хран и добавл в дом при повторном заходе
function getNameAndPoint () {
    const nameUser = localStorage.getItem('nameUser');
    const pointUser = localStorage.getItem('points');
    if (nameUser) {
        refs.ilListPlayersRef.insertAdjacentHTML('beforeend',
            `<li class="list-item-players">${nameUser}: ${pointUser} очков</li>`)
    }
}

export {saveLocalStorage, getNameAndPoint}