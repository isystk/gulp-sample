var gulp = require("gulp");

var browser = require("browser-sync");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

var sass = require("gulp-sass");

gulp.task("sass", function(done) {
  gulp.src("sass/**/*scss")
      .pipe(sass({
        outputStyle: "expanded"
      }))
      .pipe(gulp.dest("./css"))
      .pipe(browser.reload({stream:true}));
  done();
});

var uglify = require("gulp-uglify");

gulp.task("js", function(done) {
  gulp.src(["js/**/*.js","!js/min/**/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("./js/min"))
      .pipe(browser.reload({stream:true}));
  done();
});

//変更を監視
gulp.task("watch", () => {
  gulp.watch("sass/**/*scss",  
    gulp.parallel("sass")
  );
  gulp.watch("js/**/*.js",  
    gulp.parallel("js")
  );
})

gulp.task("default", gulp.series(gulp.parallel("server","watch")))
