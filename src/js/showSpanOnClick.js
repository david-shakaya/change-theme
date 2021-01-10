const textAnimationRef = () => document.querySelector('.span-js');

function showSpan(e) {
      if (e) {
        textAnimationRef().classList.add('text-animation-js')
          let Y = e.clientY
          let X =e.clientX
          textAnimationRef().style.top = Y + 'px'
          textAnimationRef().style.left = X +'px' 
          textAnimationRef().textContent ='+1'
    }
    setTimeout(() => {
        textAnimationRef().classList.remove('text-animation-js')
        textAnimationRef().textContent =''
    }, 500);
    
}

export default showSpan