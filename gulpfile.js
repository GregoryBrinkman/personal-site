var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

// Set the browser that you want to support
//const AUTOPREFIXER_BROWSERS = [
  //'ie >= 10',
  //'ie_mob >= 10',
  //'ff >= 30',
  //'chrome >= 34',
  //'safari >= 7',
  //'opera >= 23',
  //'ios >= 7',
  //'android >= 4.4',
  //'bb >= 10'
//];

// Gulp task to minify CSS files
gulp.task('css', function () {
  return gulp.src('./public/personal/css/**/*.css')
    // Auto-prefix css styles for cross browser compatibility
    //.pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist/css'))
});


//gulp.task('js', function(){
  //return gulp.src('./public/personal/js/**/*.js')
    //pipe(sourcemaps.init())
    //pipe(concat('app.min.js'))
    //pipe(sourcemaps.write())
    //pipe(gulp.dest('./dist/js'))
//});


// Gulp task to minify JavaScript files
gulp.task('js', function() {
  return gulp.src('./public/personal/js/**/*.js')
    // Minify the file
    .pipe(uglify().on('error', function(e) {
      console.log(e);
    }))
    // Output
    .pipe(gulp.dest('./dist/js'))
});

// Gulp task to minify HTML files
gulp.task('html', function() {
  return gulp.src(['./public/personal/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// // Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'css',
    'html',
    'js'
  );
});

//gulp.task('css', function(){
  //return gulp.src('client/templates/*.less')
    //.pipe(less())
    //.pipe(minifyCSS())
    //.pipe(gulp.dest('build/css'))
//});
//
//gulp.task('js', function(){
  //return gulp.src('client/javascript/*.js')
    //.pipe(sourcemaps.init())
    //.pipe(concat('app.min.js'))
    //.pipe(sourcemaps.write())
    //.pipe(gulp.dest('build/js'))
//});
