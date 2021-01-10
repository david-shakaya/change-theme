// import { refs } from './refs.js'

// import { startGame } from '../index.js'


// function onOpenModal(startIsActive) {
//     window.addEventListener('keydown', onPressEscape)
//     refs.closeBatton.addEventListener('click', onCloseModal)
//     refs.btnStartRef.removeEventListener('click', startGame)
//     startIsActive = null
//     refs.bodyRef.classList.add('show-modal')
//     clearInterval(idInterval);
//     refs.spanRemainingTimeRef.classList.remove('danger')
    
//     // console.log(spanPoints.textContent);
//     refs.pointsResult.innerHTML = `Количество набранных очков: ${refs.spanPoints.textContent}`
//     findForm()
    
// // Находит форму в Дом и добавляет слушатель 
  
// }

// function onCloseModal(e) {
//     if (e) {
//     refs.closeBatton.removeEventListener('click', onPressEscape)
//     }
//    window.removeEventListener('keydown', onPressEscape)
//    refs.btnStartRef.addEventListener('click', startGame)
//    refs.bodyRef.classList.remove('show-modal')

//    timer = 0
//    refs.spanTaimerRef.textContent = timer
//    points =0
//    refs.spanPoints.textContent = points
// }

// function onPressEscape (event) {
//     if (event.code === 'Escape') {  
//         onCloseModal()
//         console.log('df');
//     }
// }
  
// function findForm() {
//     formRef().addEventListener('submit', handleSubmit)
     
// }
//         function handleSubmit(e) {
//             e.preventDefault();
//             const inputName = inputRef().value
//             const points = (refs.spanPoints.textContent)
//             if (inputName === '') {
//                 console.log('Неправильно!');
//             } else {
//             formRef().removeEventListener('submit', handleSubmit)
//              formRef().reset()
//                onCloseModal()
//                 console.log(`Спасибо ${inputName}`);
//                 saveLocalStorage(inputName,points)
//             }
// }

// export {onOpenModal,onCloseModal,onPressEscape}