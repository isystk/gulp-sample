var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require('gulp-uglify');
var config = require("../config");
var browser = require("browser-sync");

gulp.task("tsc", function() {
  gulp.src(config.tasks.ts.src)
    .pipe(ts(config.tasks.ts.options))
    .js
    .pipe(gulp.dest(config.tasks.ts.dest))
    .pipe(uglify(config.tasks.uglify.options))
    .pipe(gulp.dest(config.tasks.uglify.dest))
    .pipe(browser.reload({stream:true}));
});
