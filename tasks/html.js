const { src, dest } = require("gulp");
const include = require("gulp-file-include");
const bs = require("browser-sync");
const pug = require("gulp-pug");

module.exports = function html() {
  return src(["./src/*.pug"])
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest("build"))
    .pipe(bs.stream());
};
