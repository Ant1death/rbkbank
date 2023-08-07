window.addEventListener("scroll", (e) => {
  logicAnchorsBreadcrumbs();
  if (document.querySelector("[data-event-ftr-up]")) {
    if (window.scrollY >= document.documentElement.clientHeight / 2) {
      document.querySelector("[data-event-ftr-up]").classList.add("active");

      const fixed = document.querySelector('.fixed__block-wrapper');

      if (fixed) document.querySelector("[data-event-ftr-up]").classList.add("active-fixed");
    } else document.querySelector("[data-event-ftr-up]").classList.remove("active");
  }
});