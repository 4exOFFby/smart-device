
const modal = document.querySelector('.modal-feedback');
const buttonOpen = document.querySelector('.main-navigation__callback-button');
const body = document.querySelector('body');


const stopListenerOnFocus = (object, method) => {
  object.addEventListener(method, (evt) => {
    evt.stopImmediatePropagation();
  });
};


const onModalEscDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalCloseHandler();
  }
};


function modalCloseHandler() {
  if (modal) {
    const modalForm = modal.querySelector('.modal-feedback__form');
    modal.classList.add('modal-feedback--close');
    body.classList.remove('feedback-form--open');
    modalForm.reset();
  }
  document.removeEventListener('keydown', onModalEscDown);
  modal.removeEventListener('click', modalCloseHandler);
}


const modalOpenHandler = (evt) => {
  evt.preventDefault();
  if (modal) {
    body.classList.add('feedback-form--open');
    const modalForm = modal.querySelector('.modal-feedback__form');
    const buttonClose = modal.querySelector('.feedback-form__button-close');
    const inputName = modal.querySelector('input[type="text"]');
    modal.classList.remove('modal-feedback--close');
    inputName.focus();
    document.addEventListener('keydown', onModalEscDown);
    modal.addEventListener('click', modalCloseHandler);
    // stopListenerOnFocus(modalForm, 'keydown');
    stopListenerOnFocus(modalForm, 'click');
    if (buttonClose) {
      buttonClose.addEventListener('click', modalCloseHandler);
    }
  }
};

export {modalOpenHandler, buttonOpen};
