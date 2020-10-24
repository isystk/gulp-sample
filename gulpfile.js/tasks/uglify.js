var gulp = require("gulp");
var uglify = require("gulp-uglify");
var config = require('../config.json');
var browser = require("browser-sync");

gulp.task("uglify", function(done) {
  gulp.src([config.root.src + "/js/**/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest(config.root.dest + "/js"))
      .pipe(browser.reload({stream:true}));
  done();
});
