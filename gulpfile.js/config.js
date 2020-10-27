module.exports = {
  root: {
    src: "./src",
    dest: "./public"
  },
  tasks: {
    server: {
      baseDir: "./public"
    },
    sass: {
      src: "./src/sass/**/*.scss",
      dest: "./public/css",
      sassOptions: {
        outputStyle: "expanded"
      }
    },
    ts: {
      src: "./src/ts/**/*.ts",
      dest: "./src/js"
    },
    uglify: {
      dest: "./public/js",
      options: {
        compress: true, 
        mangle: true, 
        output: {
          beautify: false 
        }
      }
    }

  }
};

