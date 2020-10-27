var gulp = require("gulp");

var browser = require("browser-sync");
var config = require('../config');

gulp.task("server", () => {
    browser({
        server: {
            baseDir: config.tasks.server.baseDir
        }
    });
});
