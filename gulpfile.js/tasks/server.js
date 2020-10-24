var gulp = require("gulp");

var browser = require("browser-sync");
var config = require('../config.json');

gulp.task("server", function() {
    browser({
        server: {
            baseDir: config.tasks.server.baseDir
        }
    });
});
