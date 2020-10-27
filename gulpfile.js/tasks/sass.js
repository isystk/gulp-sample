var gulp = require("gulp");
var sass = require("gulp-sass");
var config = require('../config');
var browser = require("browser-sync");

gulp.task("sass", (done) => {
  gulp.src(config.tasks.sass.src)
      .pipe(sass(config.tasks.sass.sassOptions))
      .pipe(gulp.dest(config.tasks.sass.dest))
      .pipe(browser.reload({stream:true}));
  done();
});
