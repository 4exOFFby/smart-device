const modal = document.querySelector('.modal-feedback');
const buttonOpen = document.querySelector('.main-navigation__callback-button');
const buttonClose = modal.querySelector('.feedback-form__button-close');
const body = document.querySelector('body');


const modalOpenHandler = (evt) => {
  evt.preventDefault();
  body.classList.add('feedback-form--open');
  modal.classList.remove('modal-feedback--close');
  buttonClose.addEventListener('click', modalCloseHandler);
};

const modalCloseHandler = () => {
  modal.classList.add('modal-feedback--close');
  body.classList.remove('feedback-form--open');
};

buttonOpen.addEventListener('click', modalOpenHandler);

export {modalOpenHandler, buttonOpen};
