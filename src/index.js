
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
divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-green-js " ></div>');
const box = document.querySelector('.box-red-js');
const boxGreen = document.querySelector('.box-green-js');


// const x = Math.floor(Math.random() * 780);
// const newX = Math.floor(Math.random() * 780);

    const randomNumber = () => Math.floor(Math.random() * 780);

let delta = 0
let beta = 0
let idTime;
let idTime2;
const defBox = () => box.style.transform = `translate(${delta = randomNumber()}px, ${402}px)`;
boxGreen.style.transform = `translate(${beta = randomNumber()}px, ${402}px)`;

        defBox()


btnStartRef.addEventListener('click', startGame)
function startGame() {

    
    box.classList.add('move')
    box.style.transform = `translate(${delta}px, ${-80}px)`;
    box.addEventListener('click', removeClass)
    

         
    idTime = setTimeout(function () {
        console.log(idTime);
          defBox()
             box.classList.remove('move')
             boxGreen.classList.add('move')
              boxGreen.style.transform = `translate(${beta}px, ${-80}px)`;
              box.addEventListener('click', removeClass)
        }, 2500);    
    
}
function removeClass(e) {
    if (e) {
        clearTimeout(idTime)
        }
        defBox()
        box.classList.remove('move')
        boxGreen.classList.add('move')
    boxGreen.style.transform = `translate(${beta}px, ${-80}px)`;
    


    
    }


        boxGreen.addEventListener('click', removeClassNew)


function removeClassNew() {


    boxGreen.classList.remove('move')
     box.style.transform = `translate(${delta}px, ${-80}px)`;
    box.classList.add('move')
}