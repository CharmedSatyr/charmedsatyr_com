const del = require('del');
const gulp = require('gulp');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

/* DELETE PREVIOUS BUILD */
gulp.task('clean', () => del(['build/']));

/* MOVE FONTS, IMAGES, AND OTHER SUPPORTING FILES TO build */
// php, txt, and ico files
gulp.task('files', () =>
  gulp.src(['src/*.php', 'src/*.txt', 'src/*.ico']).pipe(gulp.dest('build/'))
);

// local fonts
gulp.task('local-fonts', () =>
  gulp.src('src/fonts/**', { base: 'src/fonts' }).pipe(gulp.dest('build/fonts'))
);

// javascript
gulp.task('js', () => gulp.src(['src/js/*.js'], { base: 'src/js' }).pipe(gulp.dest('build/js/')));

// other resources
gulp.task('resources', () =>
  gulp.src('src/resources/**', { base: 'src/resources' }).pipe(gulp.dest('build/resources'))
);

// Combined resources tasks
gulp.task('pre-render', gulp.series('clean', 'files', 'local-fonts', 'js', 'resources'));

/* Create CSS */
// Handle Sass
gulp.task('sass', () => {
  return gulp
    .src('src/style/*.scss')
    .pipe(
      sass({
        'sourcemap=none': true,
      })
    )
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('build/style'));
});

// Move non-Sass files
gulp.task('css', () =>
  gulp.src(['src/style/*.css'], { base: 'src/style' }).pipe(gulp.dest('build/style/'))
);

// Combined style task
gulp.task('style', gulp.parallel('sass', 'css'));

/* Render Pug files to HTML */
// Render index.html
gulp.task('index', () => {
  const target = gulp.src('src/index.pug', { reada: true });
  return target.pipe(pug()).pipe(gulp.dest('build/'));
});

// Render thanks.html
gulp.task('thanks', () => {
  return gulp
    .src('src/thanksAndError.pug')
    .pipe(
      pug({
        data: {
          thanksTop: 'Thanks For Your Message!',
          thanksSub: "I'll be in touch.",
        },
      })
    )
    .pipe(concat('thanks.html'))
    .pipe(gulp.dest('build/'));
});

// Render error404.html
gulp.task('missing', () => {
  return gulp
    .src('src/thanksAndError.pug')
    .pipe(
      pug({
        data: {
          missingTop: 'Page Not Found',
          missingSub: 'Please check the address.',
        },
      })
    )
    .pipe(concat('error404.html'))
    .pipe(gulp.dest('build'));
});

// Render error501.html
gulp.task('fiveOhOne', () => {
  return gulp
    .src('src/thanksAndError.pug')
    .pipe(
      pug({
        data: {
          fiveOhOneTop: 'There Seems To Be A Problem',
          fiveOhOneSub: 'Please check the address.',
        },
      })
    )
    .pipe(concat('error501.html'))
    .pipe(gulp.dest('build/'));
});

// Render error418.html
gulp.task('teapot', () => {
  return gulp
    .src('src/thanksAndError.pug')
    .pipe(
      pug({
        data: {
          teapotTop: 'Error 418',
          teapotSub: 'Your request was neither short nor stout.',
        },
      })
    )
    .pipe(concat('error418.html'))
    .pipe(gulp.dest('build/'));
});

// Combined Pug rendering task
gulp.task('pug', gulp.parallel('index', 'thanks', 'missing', 'fiveOhOne', 'teapot'));

/* All tasks */
gulp.task('build', gulp.series('pre-render', 'style', 'pug'));
