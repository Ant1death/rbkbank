// anchor breadcrumbs
const ANCHOR_BREADCRUMBS = document.querySelector("[data-event-anchors]");

viewportHeight();

// auto height navigation block
if (document.documentElement.clientWidth < 900 && document.documentElement.clientWidth > 500 && document.querySelector("[data-evnt-hdr-nv]")) {
  const nav = document.querySelector("[data-evnt-hdr-nv]");
  nav.dataset.height = nav.clientHeight + "px";
  nav.style.height = nav.clientHeight + "px";
}

createSlidersTypeOne();

// init scrollBar
for (const block of document.querySelectorAll("[data-scroll-dflt]")) {
  document.documentElement.clientWidth > 1100 &&
    new SimpleBar(block, {
      autoHide: false,
    });
}

// init range slider
for (const slider of document.querySelectorAll("[data-range-dflt]")) {
  const inputs = slider.closest("[data-event-rng]").querySelectorAll("[data-event-rng-inpt]");

  noUiSlider.create(slider, {
    start: [parseFloat(slider.dataset.rangeStart), parseFloat(slider.dataset.rangeEnd)],
    connect: true,
    range: {
      min: parseFloat(slider.dataset.rangeMin),
      max: parseFloat(slider.dataset.rangeMax),
    },
  });

  slider.noUiSlider.on("update", (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  for (const input of inputs) {
    input.addEventListener("change", () => {
      let arr = [];
      for (const input2 of inputs) {
        arr.push(input2 === input ? input.value : null);
      }
      slider.noUiSlider.set(arr);
    });
  }
}

// init datepicker
flatpickr("[data-datepicker]", {
  "locale": "ru",
  dateFormat: "d.m.Y",
  mode: "range"
});

// init modal option filter toolbar settings
if (document.documentElement.clientWidth <= 900 && document.querySelector('[data-modal-tlbr]')) {
  const modal = document.querySelector('[data-modal-tlbr]');
  const modalWindow = modal.querySelector('[data-modal-tlbr-wndw]')
  const modalContent = modal.querySelector('[data-modal-tlbr-cntnt]')

  modal.classList.add('modal')
  modalWindow.classList.add('modal__window')
  modalContent.classList.add('modal__content')
}

// init slider test
initTestSlider()

changeActiveTags('.feedback-student__tag', 'feedback-student__tag-active')
changeActiveTags('.feedback-student__sort-item', 'feedback-student__sort-active')
changeActiveTag()
showMoreText()
showMoreBlok()
showMoreComments()
showModal()
checkAssessment()

scrolling()
fixedMenu()
openBurger()
spinnerBtn()
sortTable()
sortTableMobile()
showSpinnerNavigation()
changeRange()