//EVENTS
document.addEventListener('click', menu);


//VARIABLES

const burger = document.querySelector('.burger')


function menu(e, btn ='.burger', menu ='.menu', item = '.menu__item') {
    const targetElement = e.target;
    if(!targetElement.closest(item) && document.querySelector(btn).classList.contains('_active')){
        document.querySelector(menu).classList.remove('_active');
        document.querySelector(btn).classList.remove('_active');
    }else if(targetElement.closest(btn)){
        targetElement.closest(btn).classList.toggle('_active');
        document.querySelector(menu).classList.toggle('_active');
    }
}