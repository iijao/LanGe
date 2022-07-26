const free= document.querySelector('.free');
const recommended= document.querySelector('.recommended');
const pro= document.querySelector('.pro');
const title= document.querySelector('.title');
const buttonR= document.querySelector('.button');
const buttonF= document.querySelector('.button1');
const buttonP= document.querySelector('.button2');
const imgR= document.querySelector('.imgR');
const imgF= document.querySelector('.imgF');
const imgP= document.querySelector('.imgP');
const inputs= document.querySelectorAll('.input');
const header= document.querySelector('.header');
const main= document.querySelector('.main');
const footer= document.querySelector('.footer');

const loginBox= document.querySelector('.login-box');
const login= document.querySelector('.menu-link-login')


login.onclick = function(){
    loginBox.classList.toggle('active');
};

document.addEventListener('click', function(e){
    if (e.target.closest('.login-box') || e.target.closest('.menu-link-login')) return //fecha caso click fora de cada classe
    loginBox.classList.remove('active')
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

free.addEventListener('mouseover', function(){
    free.classList.add('ativo-free');
    buttonF.classList.add('button1-over')
    recommended.classList.remove('ativo');
    title.style.display = 'none';
    buttonR.style.backgroundColor= '#756EE2';
    imgR.style.display ='none';
    imgF.style.display ='block';
});

free.addEventListener('mouseout', function(){
    free.classList.remove('ativo-free');
    buttonF.classList.remove('button1-over');
    recommended.classList.add('ativo');
    title.style.display = 'flex';
    buttonR.style.backgroundColor= '#3930D8';
    imgR.style.display ='';
    imgF.style.display ='none';
});

pro.addEventListener('mouseover', function(){
    pro.classList.add('ativo-pro');
    pro.style.height = "470px";
    buttonP.classList.add('button1-over');
    recommended.classList.remove('ativo');
    title.style.display = 'none';
    buttonR.style.backgroundColor= '#756EE2';
    imgR.style.display ='none';
    imgP.style.display ='block';
});

pro.addEventListener('mouseout', function(){
    pro.classList.remove('ativo-pro');
    pro.style.height = '470px';
    buttonP.classList.remove('button1-over');
    recommended.classList.add('ativo');
    title.style.display = 'flex';
    buttonR.style.backgroundColor= '#3930D8';
    imgR.style.display ='';
    imgP.style.display ='none';
});
