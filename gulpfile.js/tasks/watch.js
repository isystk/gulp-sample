var gulp = require("gulp");
var config = require('../config');

//変更を監視
gulp.task("watch", (done) => {
  gulp.watch(config.tasks.sass.src,  
    gulp.series("sass")
  );
  gulp.watch(config.tasks.ts.src,  
    gulp.series("javascript")
  );
  done();
})
