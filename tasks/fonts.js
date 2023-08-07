const fs = require("fs");

module.exports = function fonts(done) {
  
  // const FONT_FAMILY = [{ name: "Suisse Intl", weight: [500, 400], style: "normal" }];
  const FONT_FAMILY = [];

  let styleString = "";

  for (const font of FONT_FAMILY) {
    fs.readdir(`src/fonts/${font.name}/`, (err, items) => {
      if (items) {
        let i = 0;

        for (const item of items) {
          let fontname = item.replace(".ttf", "");
          styleString += `${i ? "\r\n" : ""}@font-face {\r\nfont-family: "${
            font.name
          }";\r\nsrc: local("${fontname}"),\r\nurl('../fonts/${fontname}.woff2') format('woff2'),\r\nurl('../fonts/${fontname}.woff') format('woff');\r\nfont-weight: ${
            font.weight[i]
          };\r\nfont-style: ${Array.isArray(font.style) ? font.style[i] : font.style};\r\nfont-display: swap;\r\n}`;
          i++;
        }
        fs.writeFile("src/scss/global/_fonts.scss", styleString, () => {});
      }
    });
  }

  done();
};
