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
  const cardsContainer = document.querySelector('.card__wrapper');

  cardsContainer.addEventListener('click', function (event) {
    const target = event.target;

    // Check if the clicked element contains the class "card__wrapper-more"
    if (target.classList.contains('card__wrapper-more')) {
      // Find the parent "card__wrapper-item"
      const cardItem = target.closest('.card__wrapper-item');

      if (cardItem) {
        // Add "active" class to relevant elements within the same card item
        cardItem.classList.toggle('active');
        target.classList.toggle('active');

        const hiddenElement = cardItem.querySelector('.card__wrapper-hidden');
        if (hiddenElement) {
          hiddenElement.classList.toggle('active');
        }
      }
    }
  });
});