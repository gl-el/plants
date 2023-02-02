const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.burger-btn');
const page = document.querySelector('.body');
const burgerClose = document.querySelector('.burger-close')
const navigationLink = document.querySelector('.navigation__link');

document.addEventListener('DOMContentLoaded', function () { toggleMenu(burger, navigation, burgerClose) });
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
    }
}

function addNavigation(menu, restPage, noScroll) {
    menu.classList.toggle('navigation_active');
    restPage.classList.add('burger-close_active');
    noScroll.classList.add('body_hide');
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 380) navigation.classList.remove('navigation_active');
});

/*adding blur for service section cards*/

const serviceButtons = document.querySelectorAll('.service__button');
const cards = document.querySelectorAll('.card');
const MAX_ACTIVE = 2;
serviceButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonClicked = event.target;
        const buttonText = buttonClicked.textContent;
        buttonClicked.classList.toggle('service__button_active');
        const counter = document.querySelectorAll('.service__button_active').length;
        const buttonActive = document.querySelector('.service__button_active'); //needed only for first click, so just querySelector, not querySelectorAll
        if (counter === 1) { //on first active click add for all cards inactive class and remove it from clicked
            addAllCardsInactive(cards);
            removeCardsInactive(cards, buttonActive.textContent);
        } else if (counter === 0) { //remove inactive class if no buttons is active
            removeAllCardsInactive(cards)
        } else if (counter > MAX_ACTIVE) { //toggle cards and buttons class if pressed more buttons, that possible
            toggleButtonsClass(serviceButtons, button);
            toggleCardsInactive(cards, buttonText);
        } else if (button.classList.contains('service__button_active')) {//remove inactive if click on inactivated button
            button.classList.add('service__button_active');
            removeCardsInactive(cards, buttonText)
        } else {//add inactive if click on activated button
            button.classList.remove('service__button_active');
            addCardsInactive(cards, buttonText)
        }
    });
});

function addAllCardsInactive(cards) {
    cards.forEach((card) => card.classList.add('card_inactive'));
}

function removeAllCardsInactive(cards) {
    cards.forEach((card) => card.classList.remove('card_inactive'));
}

function removeCardsInactive(cards, text) {
    cards.forEach((card) => {
        if (card.textContent.includes(`${text}`)) {
            card.classList.remove('card_inactive')
        }
    });
}

function addCardsInactive(cards, text) {
    cards.forEach((card) => {
        if (card.textContent.includes(`${text}`)) {
            card.classList.add('card_inactive')
        }
    });
}

function toggleCardsInactive(cards, text) {
    cards.forEach((card) => {
        if (!card.textContent.includes(`${text}`)) {
            card.classList.add('card_inactive')
        } else {
            card.classList.remove('card_inactive')
        }
    });
}

function toggleButtonsClass(buttons, button) {
    buttons.forEach((button) => {
        button.classList.toggle('service__button_active');
    });
    button.classList.add('service__button_active');
}

/*accordion in prices section*/

const accordionButton = document.querySelectorAll('.accordion__item');
accordionButton.forEach((button) => {
    const accordionArrow = document.querySelector('.accordion__arrow');
    button.addEventListener('click', (event) => {
        const elementClicked = event.target.classList;
        const parent = event.target.parentNode.classList
        if (parent.contains('accordion__item_active') && elementClicked.value !== 'accordion__button') {
            button.classList.toggle('accordion__item_hide');
            button.classList.toggle('accordion__item_active');
        } else if (elementClicked.value !== 'accordion__button') {
            accordionButton.forEach((button) => {
                button.classList.add('accordion__item_hide');
                button.classList.remove('accordion__item_active');
            });
            button.classList.toggle('accordion__item_hide');
            button.classList.toggle('accordion__item_active');
            accordionArrow.classList.toggle('arrow_hide');
        }
    });
});