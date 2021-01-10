import '../src/styles.css'
import './js/addBoxesInDom.js'
import { refs } from './js/refs.js'
import { createAndRemyveBox, createAndRemyveGreenBox, createAndRemyveBlueBox, createAndRemyvePurpleBox, defBox, defBoxGren, defBoxBlue, defboxPurple } from './js/createRemyveBox.js'
import {saveLocalStorage, getNameAndPoint} from './js/savesLocalStorage.js'

const formRef =()=> document.querySelector('.form-action');
const inputRef = () => document.querySelector('.input-js');

//Ищет статические боксы после добавления в дом 
const box = document.querySelector('.box-red-js');
const boxGreen = document.querySelector('.box-green-js');
const boxBlue = document.querySelector('.box-blue-js');
const boxPurple = document.querySelector('.box-purple-js');

getNameAndPoint()



/* padStart()
  * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
function pad(value) {
    return String(value).padStart('2',0)
}

let timer = 0
let points = 0;
let remainingTime = 5
let idInterval = null
let startIsActive = null
let stopIsActive = null


// Рандомное статическое местоположение
defBox()
defBoxGren()
defBoxBlue()
defboxPurple()


refs.btnStartRef.addEventListener('click', startGame)
refs.btnStopRef.addEventListener('click',stopGame)

function stopGame() {
    if (stopIsActive) {
        return
    }
    onOpenModal()
         defBox()
         box.classList.remove('move')
          defBoxGren()
        boxGreen.classList.remove('move-green') 
        defBoxBlue()
         boxBlue.classList.remove('move-blue') 
          defboxPurple()
         boxPurple.classList.remove('move-purple') 
    onCloseModal()
    remainingTime = 5
    refs.spanRemainingTimeRef.textContent = pad(remainingTime)
    stopIsActive = true
}



function startGame() {
    if (startIsActive) {
        return
    }
    startIsActive = true
    stopIsActive = null
    remainingTime = 5
    refs.spanRemainingTimeRef.textContent = pad(remainingTime)
    startTimer()
  
}

function startTimer() {
         idInterval = setInterval(() => {
     if (remainingTime === 0||timer ===30) {
         onOpenModal()
         defBox()
         box.classList.remove('move')
          defBoxGren()
        boxGreen.classList.remove('move-green') 
        defBoxBlue()
         boxBlue.classList.remove('move-blue') 
          defboxPurple()
         boxPurple.classList.remove('move-purple') 
        return
    }
    timer +=1
    refs.spanTaimerRef.textContent = pad(timer)

    remainingTime -=1 // оставшееся время
    refs.spanRemainingTimeRef.textContent = pad(remainingTime)
             if (remainingTime <= 2) {
                //  spanRemainingTimeRef.classList.add('safely') 
                 refs.spanRemainingTimeRef.classList.add('danger')       
                } else {
                    refs.spanRemainingTimeRef.classList.remove('danger')
      }
             createAndRemyveBox()
             createAndRemyveGreenBox()
             createAndRemyveBlueBox()
             createAndRemyvePurpleBox()
   
    
}, 1000);
}

function countsPoints() {
    points += 1
    remainingTime += 1

    refs.spanRemainingTimeRef.textContent = pad(remainingTime)
    refs.spanPoints.textContent = points
}


// Модалка 

// /*  ФУНКЦИИ */
// //Закрывает модалку при нажатии esc. На window вешаем слушатель keydown.
// // На место колбека передаем функцию onPressEscape которая и закрівает модалку.
function onOpenModal() {
    window.addEventListener('keydown', onPressEscape)
    refs.closeBatton.addEventListener('click', onCloseModal)
    refs.btnStartRef.removeEventListener('click', startGame)
    startIsActive = null
    refs.bodyRef.classList.add('show-modal')
    clearInterval(idInterval);
    refs.spanRemainingTimeRef.classList.remove('danger')
    refs.pointsResult.innerHTML = `Количество набранных очков: ${refs.spanPoints.textContent}`
    findForm()
    
// Находит форму в Дом и добавляет слушатель 
  
}

function onCloseModal(e) {
    if (e) {
    refs.closeBatton.removeEventListener('click', onPressEscape)
    }
   window.removeEventListener('keydown', onPressEscape)
   refs.btnStartRef.addEventListener('click', startGame)
   refs.bodyRef.classList.remove('show-modal')

   timer = 0
   refs.spanTaimerRef.textContent = timer
   points =0
   refs.spanPoints.textContent = points
}

function onPressEscape (event) {
    if (event.code === 'Escape') {  
        onCloseModal()
    }
}
  
function findForm() {
    formRef().addEventListener('submit', handleSubmit)
     
}
  

        function handleSubmit(e) {
            e.preventDefault();
            const inputName = inputRef().value
            const points = (refs.spanPoints.textContent)
            if (inputName === '') {
                console.log('Неправильно!');
            } else {
            formRef().removeEventListener('submit', handleSubmit)
             formRef().reset()
               onCloseModal()
                console.log(`Спасибо ${inputName}`);
                saveLocalStorage(inputName,points)
            }
}

export {timer,countsPoints,defboxPurple,box,boxGreen,boxBlue,boxPurple}