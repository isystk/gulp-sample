var gulp = require("gulp");
require('require-dir')('./tasks', { recurse: true });

gulp.task("default", gulp.series(gulp.parallel("server","watch")))
