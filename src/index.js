import loadPage from './pageLoad';

loadPage();

const homeBtn = document.getElementById('Home');
const menuBtn = document.getElementById('Menu');
const contactBtn = document.getElementById('Contact');

const menu = document.querySelector('.menu');
const home = document.querySelector('.home');
const contact = document.querySelector('.contact');
console.log(menu, home, contact)

homeBtn.addEventListener('click', ()=> {
    console.log('home');
    menu.style.display='none';
    home.style.display='flex';
    contact.style.display='none';
})
menuBtn.addEventListener('click', ()=> {
    console.log('menu');
    menu.style.display='flex';
    home.style.display='none';
    contact.style.display='none';
})
contactBtn.addEventListener('click',()=> {
    console.log('contact');
    menu.style.display='none';
    home.style.display='none';
    contact.style.display='flex';
})