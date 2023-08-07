window.addEventListener("input", (e) => {
  // --> dropdown select
  // search
  if (e.target.closest("[data-event-drpdwn-slct-srch]")) {
    const parent = e.target.closest("[data-event-drpdwn-slct]");
    const elements = parent.querySelectorAll("[data-event-drpdwn-slct-elmnt]");
    const empty = parent.querySelector("[data-event-drpdwn-slct-empt]");

    let isAll = true;
    for (const element of elements) {
      if (element.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
        element.classList.remove("hidden");
        isAll = false;
      } else element.classList.add("hidden");
    }

    isAll ? empty.classList.remove("hidden") : empty.classList.add("hidden");
  }
  // mobilet select
  if (e.target.closest("[data-event-drpdwn-slct-mb]")) {
    const parent = e.target.closest("[data-event-drpdwn-slct]");
    const input = parent.querySelector("[data-event-drpdwn-slct-inpt]");

    input.value = e.target.value;
  }

  // review star
  if (e.target.closest("[data-event-assssmnt-str]")) {
    const _this = e.target.closest("[data-event-assssmnt-str]");

    toggleStatus.call(_this, {});
    toggleStatus.call(_this, { mode: "close", selector: "[data-event-assssmnt-str]" });
  }

  // init textarea
  if (e.target.closest("[data-textarea]")) {
    const element = e.target.closest("[data-textarea]");

    // element.style.height = "5px";
    element.style.height = element.scrollHeight +  2 + "px";
  }
});
