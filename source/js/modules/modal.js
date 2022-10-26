
const modal = document.querySelector('.modal-feedback');
const buttonOpen = document.querySelector('.main-navigation__callback-button');
const body = document.querySelector('body');

function getFocusable(context = 'document') {
  return Array.from(context.querySelectorAll('button, [href], input:not([type="hidden"]), textarea, select, [tabindex]:not([tabindex="-1"])')).filter(function (el) {
    return !el.closest('[hidden]');
  });
}

const focusableItems = getFocusable(modal);

const stopFocusBehindModal = (evt) => {
  if (evt.keyCode === 9) {
    const focusedItem = evt.target;
    const focusedItemIndex = focusableItems.indexOf(focusedItem);
    if (evt.shiftKey) {
      if (!modal.contains(evt.target) || focusedItemIndex === 0) {
        focusableItems[focusableItems.length - 1].focus();
        evt.preventDefault();
      }
    } else {
      if (!modal.contains(evt.target) || focusedItemIndex === focusableItems.length - 1) {
        focusableItems[0].focus();
        evt.preventDefault();
      }
    }
  }
};

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
  document.removeEventListener('keydown', stopFocusBehindModal);
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
    document.addEventListener('keydown', stopFocusBehindModal);
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
