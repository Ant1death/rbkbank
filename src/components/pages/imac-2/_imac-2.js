// slider course inner page
const createSlidersTypeOne = () => {
  document.querySelector("[data-slider-lnks]") &&
    new Swiper("[data-slider-lnks]", {
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 14,
      initialSlide: 0,
      navigation: {
        prevEl: "[data-slider-lnks-prv]",
        nextEl: "[data-slider-lnks-nxt]",
      },
      scrollbar: {
        el: "[data-slider-lnks-scrll]",
        draggable: true,
      },
      breakpoints: {
        501: {
          spaceBetween: 16,
        },
        1101: {
          slidesPerView: 3,
          initialSlide: 1,
          spaceBetween: 16,
        },
      },
    });
  document.querySelector("[data-slider-anchors]") &&
    document.documentElement.clientWidth <= 700 &&
    new Swiper("[data-slider-anchors]", {
      slidesPerView: "auto",
      spaceBetween: 15,
    });
};

// // anchors breadcrumbs logic
const logicAnchorsBreadcrumbs = () => {
  if (ANCHOR_BREADCRUMBS) {
    if (ANCHOR_BREADCRUMBS.getBoundingClientRect().top < -5) {
      ANCHOR_BREADCRUMBS.insertAdjacentHTML(
        "afterend",
        `
                <div id="anchors-breadcrumbs-placeholder" style="height: ${ANCHOR_BREADCRUMBS.clientHeight}px; margin-top: ${parseFloat(
          getComputedStyle(ANCHOR_BREADCRUMBS).marginTop
        )}px"></div>
            `
      );

      ANCHOR_BREADCRUMBS.classList.add("fixed");
    }
  }
  if (document.getElementById("anchors-breadcrumbs-placeholder")) {
    const placeholder = document.getElementById("anchors-breadcrumbs-placeholder");
    if (placeholder.getBoundingClientRect().top >= 0) {
      ANCHOR_BREADCRUMBS.classList.remove("fixed");
      placeholder.remove();
    }
  }
};