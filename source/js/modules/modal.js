
const modal = document.querySelector('.modal-feedback');
const buttonOpen = document.querySelector('.main-navigation__callback-button');
const buttonClose = modal.querySelector('.feedback-form__button-close');
const body = document.querySelector('body');
const inputName = modal.querySelector('input[type="text"]');


const modalOpenHandler = (evt) => {
  evt.preventDefault();
  body.classList.add('feedback-form--open');
  modal.classList.remove('modal-feedback--close');
  inputName.focus();
  buttonClose.addEventListener('click', modalCloseHandler);
};

const modalCloseHandler = () => {
  const inputNumber = modal.querySelector('input[name="user-number"]');
  modal.classList.add('modal-feedback--close');
  body.classList.remove('feedback-form--open');
  inputNumber.value = '';
  inputName.value = '';
};

buttonOpen.addEventListener('click', modalOpenHandler);

export {modalOpenHandler, buttonOpen};
