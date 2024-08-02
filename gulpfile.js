const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

// Styles
const styles = () => {
  return gulp.src('./source/scss/global/styles.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browserSync.stream());
};

// Server
const server = (done) => {
  browserSync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher
const watcher = () => {
  gulp.watch('./source/scss/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browserSync.reload);
};

// Default task
exports.default = gulp.series(
  styles, server, watcher
);
