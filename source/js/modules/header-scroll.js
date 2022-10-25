const scrollHeader = document.querySelector('.main-header');
const sticky = scrollHeader.offsetTop;

function scrollHandler() {
  if (window.pageYOffset > sticky) {
    scrollHeader.classList.add('main-header--sticky');
  } else {
    scrollHeader.classList.remove('main-header--sticky');
  }
}

export {scrollHandler};
