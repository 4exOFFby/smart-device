import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {modalOpenHandler, buttonOpen} from './modules/modal';
import {scrollHandler} from './header-scroll';
import {scrollFeedbackHandler, scrollButton} from './scroll-to-feedback';
import {textHiddenHandler, buttonMoreInfo, aboutParagraphs} from './about-as';
import {footerButtons, footerMenuHandler} from './footer-popup';

buttonOpen.addEventListener('click', (evt) => modalOpenHandler(evt));

window.onscroll = () => scrollHandler();

scrollButton.addEventListener('click', (evt) => scrollFeedbackHandler(evt));

buttonMoreInfo.addEventListener('click', (evt) => textHiddenHandler(evt, aboutParagraphs));

footerButtons[0].addEventListener('click', (evt) => footerMenuHandler(evt, 0, 1));
footerButtons[1].addEventListener('click', (evt) => footerMenuHandler(evt, 1, 0));


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

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
