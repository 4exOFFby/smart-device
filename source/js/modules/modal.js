
const modal = document.querySelector('.modal-feedback');
const buttonOpen = document.querySelector('.main-navigation__callback-button');
const body = document.querySelector('body');

const modalOpenHandler = (evt) => {
  evt.preventDefault();
  body.classList.add('feedback-form--open');
  if (modal) {
    const buttonClose = modal.querySelector('.feedback-form__button-close');
    const inputName = modal.querySelector('input[type="text"]');
    modal.classList.remove('modal-feedback--close');
    inputName.focus();
    if (buttonClose) {
      buttonClose.addEventListener('click', modalCloseHandler);
    }
  }
};

const modalCloseHandler = () => {
  const inputNumber = modal.querySelector('input[name="user-number"]');
  const inputName = modal.querySelector('input[type="text"]');
  if (modal) {
    modal.classList.add('modal-feedback--close');
    body.classList.remove('feedback-form--open');
    inputNumber.value = '';
    inputName.value = '';
  }
};

export {modalOpenHandler, buttonOpen};
