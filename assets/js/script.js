
const header_menuBurger = document.querySelector('.header_menuBurger')
const ul = document.getElementById('ul')
header_menuBurger.addEventListener('click', ()=>{
    header_menuBurger.classList.toggle('menuBurger')
    ul.classList.toggle('open')
})