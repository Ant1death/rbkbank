// --> body scroll lock
// =include ../../node_modules/body-scroll-lock/lib/bodyScrollLock.min.js
// --> slider
// =include ../../node_modules/swiper/swiper-bundle.min.js
// --> scrollBar
// =include ../../node_modules/simplebar/dist/simplebar.min.js
// --> range slider
// =include ../../node_modules/nouislider/dist/nouislider.min.js
// --> datapicker
// =include ../../node_modules/flatpickr/dist/flatpickr.min.js
// =include ../../node_modules/flatpickr/dist/l10n/ru.js
window.addEventListener("load", function () {
  // GLOBAL FUNCTION
  //=include global/**/*.js

  // COMPONENTS
  //=include ../components/**/*.js
  
  // EVENTS
  //=include events/**/*.js

  // PAGE LOADED
  //=include page-load.js

  const reviewSlider = this.document.querySelector('.reviews-slider__wrapper');
  if(reviewSlider) {
    const swiper = new Swiper('.reviews-slider__wrapper', {
      // configure Swiper to use modules
      loop: true,
      direction: 'horizontal',
      allowTouchMove: false,
      draggable: false,
      simulateTouch: false,
      slidesPerView: 3.5,
      spaceBetween: 20,
      breakpoints: {
        1200: {
          direction: 'horizontal',
          allowTouchMove: false,
          draggable: false,
          simulateTouch: false,
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1024: {
          direction: 'horizontal',
          allowTouchMove: false,
          draggable: false,
          simulateTouch: false,
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          direction: 'horizontal',
          allowTouchMove: false,
          draggable: false,
          simulateTouch: false,
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1.2,
          allowTouchMove: true,
          draggable: true,
          simulateTouch: true,
          spaceBetween: 15,
        },
      },
      navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
      },
      loop: false,
        
      // And if we need scrollbar
    });
  
  }
  
  const cardsContainer = document.querySelector('.card__wrapper');
  let originalButtonText = 'Открыть меню';

  cardsContainer.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('card__wrapper-more')) {
      const cardItem = target.closest('.card__wrapper-item');

      if (cardItem) {
        cardItem.classList.toggle('active');
        target.classList.toggle('active');

        const hiddenElement = cardItem.querySelector('.card__wrapper-hidden');
        if (hiddenElement) {
          hiddenElement.classList.toggle('active');

          if (target.classList.contains('active')) {
            originalButtonText = target.innerText;
            target.innerText = 'Свернуть';
          } else {
            target.innerText = originalButtonText;
          }
        }
      }
    }
  });
});