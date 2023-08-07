// init slider test
const initTestSlider = () => {
  if (document.querySelector("[data-slider-tst]")) {
    new Swiper(document.querySelector("[data-slider-tst]"), {
      spaceBetween: 20,
      slidesPerView: "auto",
      centeredSlides: true,
      grabCursor: true,
      simulateTouch: false,
      allowTouchMove: false,
      //   autoHeight: true,
      breakpoints: {
        1101: {
          spaceBetween: -20,
          //   autoHeight: false
        },
      },
      navigation: {
        nextEl: '[data-event-sldr-arrw="next"]',
        prevEl: '[data-event-sldr-arrw="prev"]',
      },
      on: {
        activeIndexChange: ({
          activeIndex
        }) => {
          const element = document.querySelector("[data-event-sldr-amnt-strt]");
          if (element) element.textContent = activeIndex;

          const amount = document.querySelector('.test-amount--mobile')
          if (!amount) return

          if (window.innerWidth < 701 && activeIndex != 0)
            amount.classList.add('test-amount--show')
          else
            amount.classList.remove('test-amount--show')
        },
      },
    });
  }
};