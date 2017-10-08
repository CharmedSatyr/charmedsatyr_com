const gulp = require('gulp')
const concat = require('gulp-concat')
const pug = require('gulp-pug')

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

//All tasks
gulp.task('default', ['index', 'thanks', 'missing', 'fiveOhOne'])
