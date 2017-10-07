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
