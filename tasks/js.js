const { src, dest } = require("gulp");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");
const include = require("gulp-include");
const rename = require("gulp-rename");

module.exports = function js() {
    return src(["src/js/main.js"])
      .pipe(rename('main.min.js'))
      .pipe(include())
      .pipe(map.init())
      .pipe(map.write("../sourcemaps/"))
      .pipe(dest("build/js"))
      .pipe(bs.stream());
};
