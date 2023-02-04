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
        if ((parent.contains('accordion__item_active') && elementClicked.value !== 'accordion__button') ||
            (parent.contains('accordion__content') && elementClicked.value !== 'accordion__button') ||
            elementClicked.contains('accordion__item')) {
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

/*drop down in contacts */
const contactsButton = document.querySelector('.dropdown__header');
const contactsImg = document.querySelector('.contacts__image');
const dropList = document.querySelector('.dropdown__content');
const dropItems = document.querySelectorAll('.dropdown__item');
const dropTitle = document.querySelector('.dropdown-city');
const info = document.querySelector('.info');
const cityValue = document.querySelector('.city-value');
const phoneValue = document.querySelector('.phone-value');
const addressValue = document.querySelector('.address-value');
const phoneLink = document.querySelector('.phone-link');
const cardsData = [
    {
		city: 'Yonkers, NY',
		phone: '+1 914 678 0003',
		address: '511 Warburton Ave',
	},
	{
		city: 'Canandaigua, NY',
		phone: '+1 585 393 0001',
		address: '151 Charlotte Street',
	},
	{
		city: 'Sherrill, NY',
		phone: '+1 315 908 0004',
		address: '14 WEST Noyes BLVD',
	},
	{
		city: 'New York City',
		phone: '+1 212 456 0002',
		address: '9 East 91st Street',
	}
]

contactsButton.addEventListener('click', (event) => {
    toggleDropDown();
    info.classList.add('info_inactive');
});

dropItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        const itemClicked = event.target
        dropTitle.textContent = itemClicked.textContent;
        toggleDropDown();
        contactsButton.classList.add('header_active')
        addInfo(itemClicked.textContent);
        info.classList.remove('info_inactive');
        toggleImage();
    })
})

function toggleDropDown() {
    contactsButton.classList.toggle('header_inactive');
    contactsButton.classList.toggle('header_active');
    dropList.classList.toggle('dropdown__inactive');
};

function toggleImage() {
    contactsImg.classList.toggle('contacts__image_show');
    contactsImg.classList.toggle('contacts__image_hide');
}

function addInfo(selected) {
    cardsData.forEach((card) => {
        if (card.city === selected) {
            cityValue.textContent = card.city;
            phoneValue.textContent = card.phone;
            addressValue.textContent = card.address;
            phoneLink.setAttribute('href', `tel:${phoneValue.textContent}`);
        };
    });
}