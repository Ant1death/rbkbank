// open navigation submodal
const toggleSubmodalMenu = function () {
  const modal = document.querySelector(`[data-number-modal="${this.dataset.numberNav}"]`);

  if (document.documentElement.clientWidth > 900) {
    const paddingH = document.documentElement.clientWidth > 1100 ? 35 : 30;
    const height = modal.style.height ? "" : modal.scrollHeight + paddingH + "px";

    for (const mdl of document.querySelectorAll(`[data-number-modal]`)) {
      if (modal !== mdl) {
        mdl.classList.remove("active");
        mdl.style.height = "";
      }
    }

    modal.classList.toggle("active");
    modal.style.height = height;
  } else {
    document.documentElement.clientWidth > 500 && checkSize.call(document.querySelector('[data-evnt-hdr-nv]'))
    if(document.documentElement.clientWidth <= 500){
      modal.style.height = modal.scrollHeight + 'px';
    }

    for (const mdl of document.querySelectorAll(`[data-number-modal]`)) {
      if (modal !== mdl) mdl.classList.remove("active");
    }
    
    document.querySelector('[data-evnt-hdr-btn-mdl-innr]').classList.toggle("active")
    modal.classList.toggle("active");
  }
};
