import {timer,showSpan,countsPoints,box,boxGreen,boxBlue,boxPurple} from '../index'

const randomNumber = () => Math.floor(Math.random() * 655);
let delta = 0
let beta = 0
let zeta = 0
let kappa = 0

const defBox = () => box.style.transform = `translate(${delta = randomNumber()}px, ${402}px)`;
const defBoxGren = () => boxGreen.style.transform = `translate(${beta = randomNumber()}px, ${402}px)`;
const defBoxBlue = () => boxBlue.style.transform = `translate(${zeta = randomNumber()}px, ${402}px)`;
const defboxPurple = () => boxPurple.style.transform = `translate(${kappa = randomNumber()}px, ${402}px)`;

function createAndRemyveBox() {
 if (timer === 1||timer === 4 || timer === 7 || timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
    box.classList.add('move')
     box.addEventListener('mousedown', removeClass)
     box.style.transform = `translate(${delta}px, ${-25}px)`;
    }
     if (timer ===3|| timer === 6 || timer === 9 || timer === 12||timer===15 || timer ===18 || timer===21 || timer===24 || timer===27 ||timer===30) {
         removeClass()   
         box.addEventListener('mousedown', removeClass)
         
        }
}

function createAndRemyveGreenBox() {
if (timer === 2||timer === 5 || timer === 8 || timer === 11 || timer === 14||timer===17 || timer ===20 || timer===23 || timer===26 ) {
    boxGreen.classList.add('move-green')
     boxGreen.addEventListener('mousedown', removeClassGreen)
    boxGreen.style.transform = `translate(${beta}px, ${-25}px)`; //Двигает зеленый бокс вверх

    }
     if ( timer ===4|| timer === 7|| timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
         removeClassGreen()   
    boxGreen.removeEventListener('mousedown', removeClassGreen)     
        }
}


function createAndRemyveBlueBox() {
if (timer === 3||timer === 5 || timer === 7 || timer === 9 || timer === 11||timer===13 || timer ===15 || timer===17 || timer===19||timer===21 || timer ===23 || timer===25 || timer===27|| timer===29 ) {
    boxBlue.classList.add('move-blue')
    boxBlue.addEventListener('mousedown', removeClassBlue)
    boxBlue.style.transform = `translate(${zeta}px, ${-25}px)`; //Двигает зеленый бокс вверх
    }
     if (timer === 4 || timer === 6|| timer === 8 || timer === 10||timer===12 || timer ===14 || timer===16 || timer===18 || timer===20 || timer ===22 || timer===24 || timer===26 || timer===28|| timer ===30) {
         removeClassBlue()   
         boxBlue.removeEventListener('mousedown', removeClassBlue)
        }
}

// ____________________________
function createAndRemyvePurpleBox() {
if (timer === 1||timer ===4 || timer === 7 || timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28 ) {
    boxPurple.classList.add('move-purple')
    boxPurple.addEventListener('mousedown', removeClassPurple)
    boxPurple.style.transform = `translate(${kappa}px, ${-25}px)`; //Двигает зеленый бокс вверх
    }
     if (timer ===3|| timer === 6 || timer === 9 || timer === 12||timer===15 || timer ===18 || timer===21 || timer===24 || timer===27 ||timer===30) {
         removeClassPurple()   
         boxPurple.removeEventListener('mousedown', removeClassPurple)
        }
}


function removeClass(e) {
    showSpan(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defBox() // Местоположение перед выездом
    box.classList.remove('move') 
    
}
function removeClassGreen(e) {
    showSpan(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defBoxGren()
    boxGreen.classList.remove('move-green') 

}

function removeClassBlue(e) {
    showSpan(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defBoxBlue()
    boxBlue.classList.remove('move-blue') 
}
// boxPurple
function removeClassPurple(e) {
    showSpan(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defboxPurple()
    boxPurple.classList.remove('move-purple') 
}

export {createAndRemyveBox,createAndRemyveGreenBox,createAndRemyveBlueBox,createAndRemyvePurpleBox,defBox,defBoxGren,defBoxBlue,defboxPurple}