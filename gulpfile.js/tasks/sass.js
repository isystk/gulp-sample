var gulp = require("gulp");
var sass = require("gulp-sass");
var config = require('../config.json');
var browser = require("browser-sync");

gulp.task("sass", function(done) {
  gulp.src(config.root.src + "/sass/**/*scss")
      .pipe(sass(config.tasks.sass.sassOptions))
      .pipe(gulp.dest(config.root.dest + "/css"))
      .pipe(browser.reload({stream:true}));
  done();
});
