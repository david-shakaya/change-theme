
import '../src/styles.css'


const divGameAreaRef = document.querySelector('.wrapper-game-area');
const btnStartRef = document.querySelector('.menu-btn-start');
const btnNewGameRef =document.querySelector('.menu-btn-newGame');
const spanPoints = document.querySelector('.header-text-points');
const spanTaimerRef = document.querySelector('.timer');
const ilListPlayersRef = document.querySelector('.list-players');
const bodyRef = document.querySelector('body');




divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-red-js " ></div>');
divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-green-js " ></div>');
divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-blue-js " ></div>');
// const createTextPoints = ()=> divGameAreaRef.insertAdjacentHTML('beforebegin', '<span class="text-animation-js" >+2</span>');

const box = document.querySelector('.box-red-js');
const boxGreen = document.querySelector('.box-green-js');
const boxBlue = document.querySelector('.box-blue-js');
const textAnimationRef = () => document.querySelector('.span-js'); //ищет класс



// const balls = [
//     'url(./images/b1.png) contain)',
//     'url(./images/b2.png) contain)',
//     'url(./images/b3.png) contain)',
//     'url(./images/b4.png) contain)',
//     'url(./images/b5.png) contain)',
//     'url(./images/b6.png) contain)',
//     'url(./images/b7.png) contain)'
// ]
// const randomBalls =()=> balls[Math.floor(Math.random() * balls.length)];
// console.log(randomBalls());
// console.log(randomBalls());
// const x = Math.floor(Math.random() * 780);
// const newX = Math.floor(Math.random() * 780);

    const randomNumber = () => Math.floor(Math.random() * 756);

let delta = 0
let beta = 0
let zeta = 0
let timer = 0
let points = 0;

let startIsActive = null
// Рандомное местоположение
const defBox = () => box.style.transform = `translate(${delta = randomNumber()}px, ${402}px)`;
const defBoxGren = () => boxGreen.style.transform = `translate(${beta = randomNumber()}px, ${402}px)`;
const defBoxBlue = () => boxBlue.style.transform = `translate(${zeta = randomNumber()}px, ${402}px)`;
// // Рандомный цвет шарика
// const defBoxBacground = () => box.style.background  = `${randomBalls()}` ;
// const defBoxGrenBacground = () =>  boxGreen.style.background  = `${randomBalls()}`;
// const defBoxBlueBacground = () => boxBlue.style.background  = `${randomBalls()}`;

defBox()
defBoxGren()
defBoxBlue()

// defBoxBacground()
// defBoxGrenBacground()
// defBoxBlueBacground()
btnStartRef.addEventListener('click', startGame)

function addedTextAfterClick(e) {
      if (e) {
        textAnimationRef().classList.add('text-animation-js')
        console.log(e);
        textAnimationRef().style.transform = `translate(${e.screenX}px, ${e.screenY}px)`;
        textAnimationRef().textContent ='+2'
    }
    setTimeout(() => {
        textAnimationRef().classList.remove('text-animation-js')
        textAnimationRef().textContent =''
    }, 500);
    
}

function startGame(e) {
  
    // if (startIsActive) {
    //     return
    // }
    console.log(e.clientX);
    startIsActive = true
    startTimer()
  
}

function removeClass(e) {
    addedTextAfterClick(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defBox() // Местоположение перед выездом
    
// defBoxBacground()

        box.classList.remove('move') 
        
}
function removeClassGreen(e) {
    addedTextAfterClick(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defBoxGren()
// defBoxGrenBacground()

    boxGreen.classList.remove('move-green') 
}

function removeClassBlue(e) {
    addedTextAfterClick(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
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

function countsPoints() {
    points += 2
    spanPoints.textContent = points
}

function createAndRemyveBox() {

 if (timer === 1||timer === 4 || timer === 7 || timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
    box.classList.add('move')
     box.addEventListener('click', removeClass)
     box.style.transform = `translate(${delta}px, ${-25}px)`;
    }
     if (timer === 3 || timer === 6 || timer === 9 || timer === 12||timer===15 || timer ===18 || timer===21 || timer===24 || timer===27 ||timer===30) {
         removeClass()   
         box.addEventListener('click', removeClass)
         
        }
}
function createAndRemyveGreenBox() {
if (timer === 2||timer === 5 || timer === 8 || timer === 11 || timer === 14||timer===17 || timer ===20 || timer===23 || timer===26 ) {
    boxGreen.classList.add('move-green')
     boxGreen.addEventListener('click', removeClassGreen)
    boxGreen.style.transform = `translate(${beta}px, ${-25}px)`; //Двигает зеленый бокс вверх

    }
     if (timer === 4 || timer === 7|| timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
         removeClassGreen()   
    boxGreen.removeEventListener('click', removeClassGreen)     
        }
}


function createAndRemyveBlueBox() {
if (timer === 3||timer === 5 || timer === 7 || timer === 9 || timer === 11||timer===13 || timer ===15 || timer===17 || timer===19||timer===21 || timer ===23 || timer===25 || timer===27|| timer===29 ) {
    boxBlue.classList.add('move-blue')
    boxBlue.addEventListener('click', removeClassBlue)
    boxBlue.style.transform = `translate(${zeta}px, ${-25}px)`; //Двигает зеленый бокс вверх
    }
     if (timer === 4 || timer === 6|| timer === 8 || timer === 10||timer===12 || timer ===14 || timer===16 || timer===18 || timer===20 || timer ===22 || timer===24 || timer===26 || timer===28|| timer ===30) {
         removeClassBlue()   
         boxBlue.removeEventListener('click', removeClassBlue)
        }
}

