var gulp = require("gulp");
require('require-dir')('./tasks', { recurse: true });

// 開発環境
gulp.task("dev", gulp.series(gulp.parallel("server","watch")))
// 本番環境
gulp.task("prod", gulp.series(gulp.parallel("server")))
// デフォルト
gulp.task("default", gulp.series("dev"))
