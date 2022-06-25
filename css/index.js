
const btnBurger = document.querySelector('#btn-burger');
const btnClose = document.querySelector('#btn-close');
const main = document.querySelector('#main');
const navBurger = document.querySelector('#nav-burger');
console.log(btnBurger);
btnBurger.addEventListener('click', () => {
    console.log('');
    btnBurger.classList.add('btn-hidden');
    btnClose.classList.remove('btn-hidden');
    navBurger.classList.add('nav-burger-show');
    main.classList.add('main-nav-open');
})
btnClose.addEventListener('click', () => {
    btnClose.classList.add('btn-hidden');
    btnBurger.classList.remove('btn-hidden');
    navBurger.classList.remove('nav-burger-show');
    main.classList.remove('main-nav-open');

})


