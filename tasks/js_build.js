const { src, dest } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");

module.exports = function js_build() {
  return src("build/js/main.min.js")
    // .pipe(
    //   babel({
    //     presets: ["@babel/env"],
    //   })
    // )
    // .pipe(uglify())
    .pipe(dest("build/js"));
};
