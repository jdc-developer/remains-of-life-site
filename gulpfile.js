var concat = require('gulp-concat');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var uglifycss = require('gulp-uglifycss');

gulp.task('watch', function() {
  gulp.watch(['./dev/assets/css/**/*', '!dev/assets/css/style.css', '!dev/assets/css/lib.css'], gulp.series('sass'));
  gulp.watch(['./dev/assets/js/**/*', '!dev/assets/js/script-min.js', '!dev/assets/js/lib.js'], gulp.series('js'));
  gulp.watch('./dev/assets/images/**/*', gulp.series('img'));
  gulp.watch('./dev/*.html',  gulp.series('html'));
  gulp.watch('./dev/assets/css/fonts/**/*',  gulp.series('fonts'));
});

gulp.task('html', () => {
    return gulp.src(['dev/*.html', 'dev/sitemap.xml'])
      .pipe(gulp.dest('./dist/'))
});

gulp.task('fonts', () => {
    return gulp.src('dev/assets/fonts/**')
      .pipe(gulp.dest('./dist/assets/fonts'))
});

gulp.task('sass', () => {
    return gulp.src('dev/assets/css/style.scss')
      .pipe(sass())
      .pipe(uglifycss())
      .pipe(gulp.dest('./dist/assets/css'))
      .pipe(gulp.dest('./dev/assets/css'));
});

gulp.task('libjs', () => {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js',
      'node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.js',
      'node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.messagestore.js',
      'node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.fallbacks.js',
      'node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.parser.js',
      'node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.emitter.js',
      'node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.emitter.bidi.js',
      'node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.language.js',
      'node_modules/lightbox2/dist/js/lightbox.min.js'])
      .pipe(concat('lib.js'))
      .pipe(gulp.dest('./dist/assets/js'))
      .pipe(gulp.dest('./dev/assets/js'));
});


gulp.task('libcss', () => {
    return gulp.src(['node_modules/flexboxgrid/dist/flexboxgrid.min.css',
      'node_modules/animate.css/animate.min.css',
      'node_modules/lightbox2/dist/css/lightbox.min.css'])
      .pipe(concat('lib.css'))
      .pipe(uglifycss())
      .pipe(gulp.dest('./dist/assets/css'))
      .pipe(gulp.dest('./dev/assets/css'));
});

gulp.task('img', () => {
    return gulp.src(['dev/assets/images/**/*'])
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('js', () => {
    return gulp.src(['dev/assets/js/**/*.js', '!dev/assets/js/script-min.js',
     '!dev/assets/js/lib.js'])
      .pipe(concat('script.js'))
      .pipe(minify({
          noSource: true
      }))
      .pipe(gulp.dest('./dist/assets/js'))
      .pipe(gulp.dest('./dev/assets/js'));
});

gulp.task('default', gulp.series('fonts', 'html', 'img', 'js', 'libjs', 'libcss', 'sass'));