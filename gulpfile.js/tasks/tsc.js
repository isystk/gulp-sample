var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require('gulp-uglify');
var config = require("../config");
var browser = require("browser-sync");
var babel = require('gulp-babel');
var ts = require('gulp-typescript');

tsProject = ts.createProject('tsconfig.json', function() {
  typescript: require('typescript')
});

gulp.task("tsc", function() {
  gulp.src(config.tasks.ts.src)
    .pipe(ts(tsProject()))
    .pipe(babel())
    .pipe(gulp.dest(config.tasks.ts.dest))
    .pipe(uglify(config.tasks.uglify.options))
    .pipe(gulp.dest(config.tasks.uglify.dest))
    .pipe(browser.reload({stream:true}));
});
