const footerPopupContainers = document.querySelectorAll('.main-footer__categories-wrapper');
const footerButtons = document.querySelectorAll('.main-footer__categories-button');
const footerLists = document.querySelectorAll('.main-footer__categories-list');
const footerPopupButtons = document.querySelectorAll('.main-footer__categories-title-wrapper');

footerPopupContainers.forEach((item) => item.classList.remove('main-footer__categories-wrapper--no-js'));

const footerMenuHandler = (indexOn, indexOff) => {
  if (footerLists[indexOn]) {
    footerLists[indexOn].classList.toggle('main-footer__categories-list--opened');
    footerButtons[indexOn].classList.toggle('main-footer__categories-button--opened');
  }

  if (footerLists[indexOff]) {
    footerLists[indexOff].classList.remove('main-footer__categories-list--opened');
  }

  if (footerButtons[indexOff]) {
    footerButtons[indexOff].classList.remove('main-footer__categories-button--opened');
  }
};


export {footerButtons, footerMenuHandler, footerPopupButtons};
