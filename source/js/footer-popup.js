const footerButtons = document.querySelectorAll('.main-footer__categories-button');
const footerLists = document.querySelectorAll('.main-footer__categories-list');


const footerMenuHandler = (evt, indexOn, indexOff) => {
  evt.target.classList.toggle('main-footer__categories-button--opened');
  footerLists[indexOn].classList.toggle('main-footer__categories-list--opened');
  footerLists[indexOff].classList.remove('main-footer__categories-list--opened');
  footerButtons[indexOff].classList.remove('main-footer__categories-button--opened');
};


export {footerButtons, footerMenuHandler};
