const scrollButton = document.querySelector('.main-screen__link');

const scrollFeedbackHandler = (evt) => {
  evt.preventDefault();
  const element = document.querySelector('#feedback');
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
};

export {scrollFeedbackHandler, scrollButton};
