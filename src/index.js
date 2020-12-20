
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
divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-blue-js " ></div>');

const box = document.querySelector('.box-red-js');
const boxGreen = document.querySelector('.box-green-js');
const boxBlue = document.querySelector('.box-blue-js');



// const x = Math.floor(Math.random() * 780);
// const newX = Math.floor(Math.random() * 780);

    const randomNumber = () => Math.floor(Math.random() * 780);

let delta = 0
let beta = 0
let zeta = 0
let idInterval1;
let idTime2;
let timer = 0
const defBox = () => box.style.transform = `translate(${delta = randomNumber()}px, ${402}px)`;
const defBoxGren = () => boxGreen.style.transform = `translate(${beta = randomNumber()}px, ${402}px)`;
const defBoxBlue = () =>boxBlue.style.transform = `translate(${zeta = randomNumber()}px, ${402}px)`;
defBox()
defBoxGren()
defBoxBlue()

btnStartRef.addEventListener('click', startGame)

function startGame() {
    
    startTimer()
   
    // box.addEventListener('click', removeClass)
    // box.classList.add('move')
    // box.style.transform = `translate(${delta}px, ${-80}px)`
    // const idInterval1 = setInterval(fn, 1000);
}

function fn() {
    // console.log('idInterval1');
    box.classList.add('move')
    // box.style.transform = `translate(${delta}px, ${-80}px)`; //Задает расположение вверх двигает

        // box.classList.remove('move') 
        // boxGreen.classList.add('move')
        // boxGreen.style.transform = `translate(${beta}px, ${-80}px)`; //Двигает зеленый бокс вверх
}

function removeClass(e) {
    if (e) {
        console.log('ffdfd');
        // return
    }
    
        defBox() // Местоположение перед выездом
        box.classList.remove('move') 
        
}
function removeClassGreen() {
    defBoxGren()
    boxGreen.classList.remove('move-green') 
}

function removeClassBlue() {
    defBoxBlue()
    boxBlue.classList.remove('move-blue') 
}


function startTimer() {
setInterval(() => {
    timer +=1
    spanTaimerRef.textContent = timer
    createAndRemyveBox()
    createAndRemyveGreenBox()
    createAndRemyveBlueBox()
}, 1000);
}


function createAndRemyveBox() {

 if (timer === 1||timer === 4 || timer === 7 || timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
    //  defBoxGren()
     box.classList.add('move')
     box.addEventListener('click', removeClass)
     box.style.transform = `translate(${delta}px, ${-25}px)`;
    }
     if (timer === 3 || timer === 6 || timer === 9 || timer === 12||timer===15 || timer ===18 || timer===21 || timer===24 || timer===27 ||timer===30) {
    removeClass()     
        }
}
function createAndRemyveGreenBox() {
if (timer === 2||timer === 5 || timer === 8 || timer === 11 || timer === 14||timer===17 || timer ===20 || timer===23 || timer===26 ) {
    //  defBoxGren()
    boxGreen.classList.add('move-green')
     boxGreen.addEventListener('click', removeClassGreen)
    boxGreen.style.transform = `translate(${beta}px, ${-25}px)`; //Двигает зеленый бокс вверх
    }
     if (timer === 4 || timer === 7|| timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
    removeClassGreen()     
        }
}


function createAndRemyveBlueBox() {
if (timer === 3||timer === 5 || timer === 7 || timer === 9 || timer === 11||timer===13 || timer ===15 || timer===17 || timer===19||timer===21 || timer ===23 || timer===25 || timer===27|| timer===29 ) {
    //  defBoxGren()
    boxBlue.classList.add('move-blue')
     boxBlue.addEventListener('click', removeClassBlue)
    boxBlue.style.transform = `translate(${zeta}px, ${-25}px)`; //Двигает зеленый бокс вверх
    }
     if (timer === 4 || timer === 6|| timer === 8 || timer === 10||timer===12 || timer ===14 || timer===16 || timer===18 || timer===20 || timer ===22 || timer===24 || timer===26 || timer===28|| timer ===30) {
    removeClassBlue()     
        }
}

