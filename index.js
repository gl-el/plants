const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.burger-btn');
const page = document.querySelector('.body');
const burgerClose = document.querySelector('.burger-close')
const navigationLink = document.querySelector('.navigation__link');

document.addEventListener('DOMContentLoaded', function () {toggleMenu(burger, navigation, burgerClose)});
function toggleMenu(button, menu, restPage) {
    button.addEventListener('click', () => {
        addNavigation(menu, restPage, page)
    });
    menu.addEventListener('click', () => {
        removeNavigation(menu, restPage, page)
    });
    restPage.addEventListener('click', () => {
        removeNavigation(menu, restPage, page)
    });
};

function removeNavigation(menu, restPage, noScroll) {
    if (menu.classList = 'navigation navigation_active') {
        menu.classList.remove('navigation_active');
        restPage.classList.remove('burger-close_active');
        noScroll.classList.remove('body_hide');
        console.log(menu, restPage, noScroll);
    }
}

function addNavigation(menu, restPage, noScroll) {
    menu.classList.toggle('navigation_active');
    restPage.classList.add('burger-close_active');
    noScroll.classList.add('body_hide');
    console.log(menu, restPage, noScroll);
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 380) navigation.classList.remove('navigation_active');
});

