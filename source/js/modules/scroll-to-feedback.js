const scrollButton = document.querySelector('.main-screen__link');
const scrollSection = document.querySelector('#feedback');

const scrollFeedbackHandler = (evt) => {
  evt.preventDefault();
  if (scrollSection) {
    scrollSection.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
};

export {scrollFeedbackHandler, scrollButton, scrollSection};
