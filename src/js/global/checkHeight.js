const checkSize = function (styles) {
    console.log(styles);
  if (!styles) {
    this.style.height = this.scrollHeight + "px";
    return;
  }
  for (const s of styles) {
    let result;
    switch (s) {
      case "width":
        result = this.scrollWidth;
        break;
      case "height":
        result = this.scrollHeight;
        break;
    }
    this.style[s] = result + "px";
  }
};
