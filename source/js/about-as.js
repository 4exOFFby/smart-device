const aboutAsTextContainer = document.querySelector('.about-as__text-wrapper');
const aboutParagraphs = aboutAsTextContainer.children;
const buttonMoreInfo = document.querySelector('.about-as__link');
const MAX_COUNT_PARAGRAPHS = 1;
const INDEX_HIDDEN_PARAGRAPH = 2;

const checkCount = (arr) => {
  for (let i = 0; i < aboutParagraphs.length; i++) {
    if (i > MAX_COUNT_PARAGRAPHS) {
      arr[i].classList.toggle('visually-hidden');
    }
  }
};

checkCount(aboutParagraphs);

const textHiddenHandler = (evt, arr) => {
  evt.preventDefault();
  buttonMoreInfo.textContent = 'Свернуть';
  checkCount(arr);
  if (aboutParagraphs[INDEX_HIDDEN_PARAGRAPH].classList.contains('visually-hidden')) {
    buttonMoreInfo.textContent = 'Подробнее';
  }
};


export {textHiddenHandler, buttonMoreInfo, aboutParagraphs};
