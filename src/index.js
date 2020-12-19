import '../src/styles.css'


// const buttonRef = document.querySelector('.button-js');
const divGameAreaRef = document.querySelector('.wrapper-game-area');
const btnStartRef = document.querySelector('.menu-btn-start');
const btnNewGameRef =document.querySelector('.menu-btn-newGame');
// const box = document.querySelector('.box-red-js');
const spanPoints = document.querySelector('.header-text-points');
const spanTaimerRef = document.querySelector('.timer');
const ilListPlayersRef = document.querySelector('.list-players');
const bodyRef = document.querySelector('body');


divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-red-js " ></div>');
const box = document.querySelector('.box-red-js');



btnStartRef.addEventListener('click', startGame)
function startGame () {
console.log(box);
// box.classList.remove('box-red-js')
    box.classList.add('move')

    box.addEventListener('click', removeClass)
    function removeClass () {
         box.classList.remove('move')
    }
}
