var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function(done) {
  gulp.src("sass/**/*scss")
      .pipe(sass({
        outputStyle: "expanded"
      }))
      .pipe(gulp.dest("./css"));
  done();
});

var uglify = require("gulp-uglify");

gulp.task("js", function(done) {
    gulp.src(["js/**/*.js","!js/min/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./js/min"));
  done();
});

