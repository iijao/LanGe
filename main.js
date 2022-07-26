const loginBox= document.querySelector('.login-box');
const inputs= document.querySelectorAll('.input');
const login= document.querySelector('.menu-link-login');


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
