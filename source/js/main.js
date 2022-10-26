import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {modalOpenHandler, buttonOpen} from './modules/modal';
import {scrollHandler} from './modules/header-scroll';
import {scrollFeedbackHandler, scrollButton, scrollSection} from './modules/scroll-to-feedback';
import {textHiddenHandler, buttonMoreInfo, aboutParagraphs} from './modules/about-as';
import {footerButtons, footerMenuHandler, footerPopupButtons} from './modules/footer-popup';
import {renderPhoneNumberMask} from './modules/phone-mask';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  if (buttonOpen) {
    buttonOpen.addEventListener('click', (evt) => modalOpenHandler(evt));
  }

  if (scrollSection) {
    window.onscroll = () => scrollHandler();
  }

  if (scrollButton) {
    scrollButton.addEventListener('click', (evt) => scrollFeedbackHandler(evt));
  }

  if (buttonMoreInfo) {
    buttonMoreInfo.addEventListener('click', (evt) => textHiddenHandler(evt, aboutParagraphs));
  }

  renderPhoneNumberMask();

  if (footerButtons[0]) {
    footerPopupButtons[0].addEventListener('click', () => footerMenuHandler(0, 1));
  }

  if (footerButtons[1]) {
    footerPopupButtons[1].addEventListener('click', () => footerMenuHandler(1, 0));
  }

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
