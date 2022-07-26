const loginBox= document.querySelector('.login-box');
const inputs= document.querySelectorAll('.input');
const login= document.querySelector('.menu-link-login');

const getIn= document.querySelector('.get-in');
const getInImg= document.querySelector('.get-in-img');

getIn.addEventListener('mouseover', function(){
    getInImg.src = '/LanGe/images/arrow-white.svg'
    getIn.style.backgroundColor = '#3930D8'
});
getIn.addEventListener('mouseout', function(){
    getInImg.src = '/LanGe/images/arrow.svg'
    getIn.style.backgroundColor = '#e0e0e0'
});

login.onclick = function(){
    loginBox.classList.add('active');
};


document.addEventListener('click', function(e){
    if (e.target.closest('.login-box') ||
    e.target.closest('.menu-link-login')) return
    loginBox.classList.remove('active');
});

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active')
}
const handleFocusOut = ({ target }) => { //selecionar o target da const span
    if (target.value == ''){ //verificação se há algo escrito no input
    const span = target.previousElementSibling; //seleciona elemento anterior
    span.classList.remove('span-active');
    }
}
inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
