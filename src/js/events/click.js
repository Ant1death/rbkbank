// --> click
window.addEventListener("click", (e) => {
  // navigation button
  if (e.target.closest("[data-evnt-hdr-btn-elmnt]")) {
    const parent = e.target.closest("[data-evnt-hdr-btn]");
    const firstLi = parent.querySelector("[data-number-nav]");
    toggleStatus.call(parent, {});
    if (document.documentElement.clientWidth > 900 && !document.querySelector("[data-number-nav].active") && parent.classList.contains("active")) {
      toggleStatus.call(null, {
        mode: "close",
        selector: "[data-number-nav]"
      });
      toggleStatus.call(firstLi, {});
      toggleSubmodalMenu.call(firstLi, {});
    }
  } else !e.target.closest("[data-evnt-hdr-btn-mdl]") && toggleStatus({
    mode: "close",
    selector: "[data-evnt-hdr-btn]"
  });

  // navigation submenu
  if (e.target.closest("[data-number-nav]")) {
    const _this = e.target.closest("[data-number-nav]");
    toggleStatus.call(_this, {});
    toggleStatus.call(_this, {
      mode: "close",
      selector: "[data-number-nav]"
    });

    toggleSubmodalMenu.call(_this, {});
  }

  // burger header
  if (e.target.closest("[data-evnt-brgr]")) {
    const nav = document.querySelector("[data-evnt-hdr-nv]");

    document.documentElement.clientWidth <= 500 ? toggleModal({
      modal: nav
    }) : toggleStatus.call(nav, {});

    toggleStatus.call(e.target.closest("[data-evnt-brgr]"), {
      modificator: "open"
    });
  } else {
    if (!e.target.closest("[data-evnt-hdr-nv]") && document.documentElement.clientWidth > 500) {
      toggleStatus.call(null, {
        mode: "close",
        modificator: "open",
        selector: "[data-evnt-brgr]"
      });
      toggleStatus.call(null, {
        mode: "close",
        selector: "[data-evnt-hdr-nv]"
      });
    }
  }

  // submenu header back
  if (e.target.closest("[data-evnt-hdr-btn-bck]")) {
    const nav = document.querySelector("[data-evnt-hdr-nv]");
    const modal = e.target.closest("[data-number-modal]");

    if (document.documentElement.clientWidth > 500) nav.style.height = nav.dataset.height;
    if (document.documentElement.clientWidth <= 500) modal.style.height = "";

    toggleStatus.call(modal, {});
    toggleStatus.call(document.querySelector("[data-evnt-hdr-btn-mdl-innr]"), {});
  }

  // select button
  if (e.target.closest("[data-evnt-slct-bttn]")) {
    toggleStatus.call(e.target.closest("[data-select-input]"), {});
  } else {
    toggleStatus.call(null, {
      mode: "close",
      selector: "[data-select-input]"
    });
  }

  // select button element
  if (e.target.closest("[data-select-input-element]")) {
    const selectorElement = "[data-select-input-element]";
    const element = e.target.closest(selectorElement);
    const parent = element.closest("[data-select-input]");
    const buttonText = parent.querySelector("[data-evnt-slct-bttn-txt]");

    let image = parent.querySelector('img')

    // if (image)
    //   image.src = element.querySelector('img').src;


    toggleStatus({
      mode: "close",
      selector: selectorElement
    });
    toggleStatus.call(element, {});

    buttonText.textContent = element.textContent;

    for (const grid of document.querySelectorAll(`[data-select-input-table`)) {
      const classList = grid.classList;
      grid.dataset.selectInputTable === element.dataset.selectInputElement ? classList.remove("hidden") : classList.add("hidden");
    }
  }

  // up page
  if (e.target.closest("[data-event-ftr-up]")) upPage();

  // anchor
  if (e.target.closest('a[href^="#"]')) {
    e.preventDefault();
    let href = e.target.closest('a[href^="#"]').getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);

    if (scrollTarget) {
      const topOffset = document.documentElement.clientWidth > 700 ? 100 : 60;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
  // button options filter mobile
  if (e.target.closest("[data-event-fltr-bttn]")) {
    e.preventDefault();
    toggleModal({
      modal: document.querySelector("[data-modal-tlbr]")
    });
    document.querySelector(".header") && document.querySelector(".header").classList.add("hidden");
  }

  // button options filter mobile close
  if (e.target.closest("[data-event-mdl-cls]")) {
    e.preventDefault();
    toggleModal({
      modal: document.querySelector("[data-modal-tlbr]")
    });
    document.querySelector(".header") && document.querySelector(".header").classList.remove("hidden");
  }
  // button options filter mobile outside
  if (e.target.closest(".modal.active") && !e.target.closest("[data-modal-tlbr-wndw]")) {
    document.querySelector(".header") && document.querySelector(".header").classList.remove("hidden");
    toggleModal({
      modal: document.querySelector("[data-modal-tlbr]")
    });
  }
  // next slide inner card (test slider)
  if (e.target.closest("[data-event-sldr-arrw]")) {
    e.preventDefault();
  }

  // --> dropdown select
  // toggle
  if (e.target.closest("[data-event-drpdwn-slct-bttn]")) {
    e.preventDefault();
    toggleStatus.call(e.target.closest("[data-event-drpdwn-slct]"), {});
  } else {
    if (!e.target.closest("[data-event-drpdwn-slct-mdl]")) toggleStatus({
      mode: "close",
      selector: "[data-event-drpdwn-slct]"
    });
  }
  // pick
  if (e.target.closest("[data-event-drpdwn-slct-elmnt]")) {
    const selector = "[data-event-drpdwn-slct-elmnt]";
    const element = e.target.closest(selector);
    const parentSelector = "[data-event-drpdwn-slct]";
    const parent = element.closest(parentSelector);
    const buttonText = parent.querySelector("[data-event-drpdwn-slct-bttn-txt]");
    const input = parent.querySelector("[data-event-drpdwn-slct-inpt]");

    toggleStatus({
      mode: "close",
      selector: selector,
      parent: parent
    });
    toggleStatus.call(element, {});
    toggleStatus({
      mode: "close",
      selector: parentSelector
    });

    buttonText.textContent = element.textContent;
    input.value = element.textContent;
  }
});