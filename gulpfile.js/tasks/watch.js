var gulp = require("gulp");
var config = require('../config');

//変更を監視
gulp.task("watch", () => {
  gulp.watch(config.tasks.sass.src,  
    gulp.parallel("sass")
  );
  gulp.watch(config.tasks.ts.src,  
    gulp.parallel("tsc")
  );
})
