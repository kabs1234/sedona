const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemap = require("gulp-sourcemaps");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const terser = require("gulp-terser");
const imgmin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");
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

exports.styles = styles;

// minStyles

const minStyles = () => {
  return gulp.src("./source/scss/global/styles.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
    autoprefixer(),
    csso()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
}

exports.minStyles = minStyles;

// optimizeImages

const optimizeImages = () => {
  return gulp.src('source/images/**/*.{jpg,png,svg}')
    .pipe(imgmin([
      imgmin.optipng({optimizationLevel: 3}),
      imgmin.mozjpeg({progressive: true}),
      imgmin.svgo()
      ]))
    .pipe(gulp.dest('build/images'))
}

exports.optimizeImages = optimizeImages;

// copyImages

const copyImages = () => {
  return gulp.src('source/images/**/*.{jpg,png,svg}')
    .pipe(gulp.dest('build/images'))
}

exports.copyImages = copyImages;

// webP

const createWebp = () => {
  return gulp.src('source/images/**/*.{jpg,png}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('build/images'))
}

exports.createWebp = createWebp;

// html

const minHtml = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin( {collapseWhitespace: true, conservativeCollapse: true} ))
    .pipe(gulp.dest("build"));
}

exports.minHtml = minHtml

// scripts

const scripts = () => {
  return gulp.src("source/js/app.js")
    .pipe(terser())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('build/js'))
}

exports.scripts = scripts

// copy

const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2, woff}",
    "source/*.ico",
    "source/images/**/*.svg"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// clean

const clean = () => {
  return del("build")
};

exports.clean = clean;

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

exports.server = server;

// Watcher
const watcher = () => {
  gulp.watch('./source/scss/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browserSync.reload);
};

//build

const build = gulp.series(
  clean,
  copy,
  copyImages,
  // optimizeImages,
  gulp.parallel(
    minStyles,
    minHtml,
    scripts,
    createWebp
  )
)

exports.build = build

// Default task
exports.default = gulp.series(
  styles, server, watcher
);
