const body = document.querySelector('body');
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const button2 = document.querySelector('.navbarr')
const h1 = document.querySelector('h1');
const button = document.querySelector('.tema');

if (button.classList.contains ='tema'){
button.addEventListener('click',function(){
    body.classList.toggle('darkmode');
    header.classList.toggle('colordark');
    button.classList.toggle('darken');
    button2.classList.toggle('darken');
    
})}
if (navbar.classList.contains='ada'){
    button2.addEventListener('click',function(){
        navbar.classList.toggle('ada');
    })
}
