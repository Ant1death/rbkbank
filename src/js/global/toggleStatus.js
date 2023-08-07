const toggleStatus = function ({ mode = "toggle", modificator = "active", selector, blacklist, parent = false }) {
  if (mode === "toggle") {
    this.classList.toggle(modificator);
    return;
  }

  const list = parent ? parent.querySelectorAll(selector) : document.querySelectorAll(selector)

  for (const el of list) {
    el !== this && el.classList.remove(modificator);
  }
};
