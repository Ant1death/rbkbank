// --> Открытие\закрытие модалки
const toggleModal = ({ modal, mode = "toggle" }) => {

  const buttonUp = document.querySelector('[data-event-ftr-up]')
  buttonUp && buttonUp.classList.remove('active')

  const body = document.querySelector("body");
  let documentWidth = parseInt(document.documentElement.clientWidth);
  let windowsWidth = parseInt(window.innerWidth);
  let scrollbarWidth = windowsWidth - documentWidth;

  if (mode === "close" || body.closest(".open-modal")) {
    body.classList.remove("open-modal");
    bodyScrollLock.enableBodyScroll(modal);
    body.style.paddingRight = "";
    modal.classList.remove("active");
    // $(".modal").removeClass("active");
    // $(".modal__window").removeClass("active");
    return;
  }

  body.classList.add("open-modal");
  bodyScrollLock.disableBodyScroll(modal);
  body.style.paddingRight = scrollbarWidth + "px";
  modal.classList.add("active");
  // $(modal).addClass("active");
  // $(modal).find(".modal__window").addClass("active");
};
