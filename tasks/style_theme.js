const fs = require("fs");

module.exports = function style_theme(done) {
  const content = fs.readFile("src/scss/settings/_colors.scss", "utf8", (err, data) => {
    let strRoot = ":root{\n";
    for (const property of data.split("\n").filter((row) => row.includes("$"))) {
      const nameProperty = property.trim().replace(/\:.+\;/, "");
      strRoot += `@include theme-colors(${nameProperty}: #{${nameProperty}});\n`;
    }
    strRoot += "}";
    fs.writeFile("src/scss/global/_theme-color.scss", strRoot, () => {});
  });

  done();
};
