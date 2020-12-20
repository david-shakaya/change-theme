
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
let idInterval1;
let idTime2;
let timer = 0
const defBox = () => box.style.transform = `translate(${delta = randomNumber()}px, ${402}px)`;
const defBoxGren = () => boxGreen.style.transform = `translate(${beta = randomNumber()}px, ${402}px)`;

defBox()
defBoxGren()

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
        // boxGreen.classList.add('move')
        // boxGreen.style.transform = `translate(${beta}px, ${-80}px)`; //Двигает зеленый бокс вверх
}


function startTimer() {
setInterval(() => {
    timer +=1
    // console.log(spanTaimerRef.textContent = timer);


 if (timer === 1||timer === 4 || timer === 7 || timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
    //  defBoxGren()
     box.classList.add('move')
     box.addEventListener('click', removeClass)
     box.style.transform = `translate(${delta}px, ${-80}px)`;
           
    }
    
     if (timer === 3 || timer === 6 || timer === 9 || timer === 12||timer===15 || timer ===18 || timer===21 || timer===24 || timer===27 ||timer===30) {
    removeClass()
//    box.style.transform = `translate(${delta}px, ${-80}px)`;
           
        }


}, 1000);
}



