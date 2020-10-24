var gulp = require("gulp");
var config = require('../config.json');

//変更を監視
gulp.task("watch", () => {
  gulp.watch(config.root.src + "/sass/**/*scss",  
    gulp.parallel("sass")
  );
  gulp.watch(config.root.src + "/js/**/*.js",  
    gulp.parallel("uglify")
  );
})
