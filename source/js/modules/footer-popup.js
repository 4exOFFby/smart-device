const footerPopupContainers = document.querySelectorAll('.main-footer__categories-wrapper');
const footerButtons = document.querySelectorAll('.main-footer__categories-button');
const footerLists = document.querySelectorAll('.main-footer__categories-list');

footerPopupContainers.forEach((item) => item.classList.remove('main-footer__categories-wrapper--no-js'));

const footerMenuHandler = (evt, indexOn, indexOff) => {
  evt.target.classList.toggle('main-footer__categories-button--opened');
  if (footerLists[indexOn]) {
    footerLists[indexOn].classList.toggle('main-footer__categories-list--opened');
  }

  if (footerLists[indexOff]) {
    footerLists[indexOff].classList.remove('main-footer__categories-list--opened');
  }

  if (footerButtons[indexOff]) {
    footerButtons[indexOff].classList.remove('main-footer__categories-button--opened');
  }
};


export {footerButtons, footerMenuHandler};
