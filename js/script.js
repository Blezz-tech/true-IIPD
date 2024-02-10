// переменные
let burger = document.querySelector('.navigation__burger-btn');
let header = document.querySelector('.header');
let theme = document.querySelector('.navigation__img--transfer');
let body = document.querySelector('body');

// обработчики
burger.addEventListener('click', function()  {
    header.classList.toggle("open");
    body.classList.toggle("overflov"); // убирает скролл при открытом меню
})




//---------------------------------