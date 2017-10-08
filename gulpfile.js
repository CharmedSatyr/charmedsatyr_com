const gulp = require('gulp')
const concat = require('gulp-concat')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')

//Render index.html
gulp.task('index', function buildHTML() {
  return gulp
    .src('index.pug')
    .pipe(
      pug({
        // Your options in here.
        //
      })
    )
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'))
})

//Render thanks.html
gulp.task('thanks', function buildHTML() {
  return gulp
    .src('thanksAndError.pug')
    .pipe(
      pug({
        data: {
          thanksTop: 'Thanks For Your Message!',
          thanksSub: "I'll be in touch."
        }
      })
    )
    .pipe(concat('thanks.html'))
    .pipe(gulp.dest('./'))
})

//Render error404.html
gulp.task('missing', function buildHTML() {
  return gulp
    .src('thanksAndError.pug')
    .pipe(
      pug({
        data: {
          missingTop: 'Page Not Found',
          missingSub: 'Please check the address.'
        }
      })
    )
    .pipe(concat('error404.html'))
    .pipe(gulp.dest('./'))
})

//Render error501.html
gulp.task('fiveOhOne', function buildHTML() {
  return gulp
    .src('thanksAndError.pug')
    .pipe(
      pug({
        data: {
          fiveOhOneTop: 'There Seems To Be A Problem',
          fiveOhOneSub: 'Please check the address.'
        }
      })
    )
    .pipe(concat('error501.html'))
    .pipe(gulp.dest('./'))
})

//Handle styles
gulp.task('style', function() {
  return gulp
    .src('style/*.scss')
    .pipe(
      sass({
        'sourcemap=none': true
      })
    )
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('style/'))
})

//All tasks
gulp.task('default', ['index', 'thanks', 'missing', 'fiveOhOne', 'style'])
