const navigation = document.querySelector('.navigation');
document.addEventListener('DOMContentLoaded', navigationBurger)
function navigationBurger() {
    const burger = document.querySelector('.burger-btn');
    const page = document.querySelector('.body');
    const burgerClose = document.querySelector('.burger-close')
    const navigationLink = document.querySelector('.navigation__link');
    navigation.addEventListener('click', () => {
    if (navigation.classList='navigation navigation_active') {
        navigation.classList.remove('navigation_active');
        burgerClose.classList.remove('burger-close_active');
        page.classList.remove('body_hide');
    }
    });
    burger.addEventListener('click', () => {
        navigation.classList.toggle('navigation_active');
        burgerClose.classList.add('burger-close_active');
        page.classList.add('body_hide');
    });
    burgerClose.addEventListener('click', () => {
        navigation.classList.remove('navigation_active');
        burgerClose.classList.remove('burger-close_active');
        page.classList.remove('body_hide');
    });
};

window.addEventListener('resize', function() {
    if (window.innerWidth > 380) navigation.classList.remove('navigation_active');
  });

 /* document.addEventListener('click', (e) => {
    let element = e.target;
    console.log(element);

  })*/