var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var config = require('../config');
var browser = require('browser-sync');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('clean', del.bind(null, [config.root.src + '/js/*']));

gulp.task('tsc', () => {
  console.log('TSファイルのコンパイルをします。');
  var tsProject = ts.createProject('tsconfig.json');
  // 出力ファイルをconcatで参照できるようにreturnする
  return gulp.src(config.tasks.ts.src)
    .pipe(plumber())
    .pipe(sourcemaps.init()) /* ソースマップを出力させる場合 */
    // TSファイルのコンパイル
    .pipe(ts(tsProject()))
    // BabelでES6(ES2005)→ES5系に変換
    .pipe(babel())
    // ファイル圧縮
    .pipe(uglify(config.tasks.uglify.options))
    .pipe(sourcemaps.write('.')) /* ソースマップを出力させる場合 */
    .pipe(gulp.dest(config.tasks.ts.dest));
});

gulp.task('concat', (done) => {
  console.log('JSファイルを統合します。');
  gulp.src(['src/js/file1.js', 'src/js/file2.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(config.tasks.concat.dest));
  done();
});

gulp.task('browserify', (done) => {
  // babelifyでimport/export をブラウザで利用できるように変換
  browserify({
        entries: 'src/js/main.js'
    })
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.tasks.browserify.dest));
  done();
});

gulp.task('javascript', gulp.series('clean', 'tsc', 'concat', 'browserify', (done) => {
  console.log('リロード');
  browser.reload();
  done();
}));
