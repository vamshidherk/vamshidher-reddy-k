const gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass")(require("sass"));
// var sass = require('gulp-sass')(require('sass'));

function style() {
  return gulp.src("./scss/**/*.scss").pipe(sass()).pipe(gulp.dest("./css"));
}
// Static server & watch scss + html files
// gulp.task('watch', gulp.series('sass', function() {
//     browserSync.init({
//         server: '.'
//         });
//         // scss file
//         gulp.watch('./scss/**/*.scss', ['sass'], browserSync.reload);
//         gulp.watch('./*.html').on('change', browserSync.reload);
//         gulp.watch('./js/**/*.js', browserSync.reload);
// }));
// // gulp.task('watch', ['sass'], function() {

// // });

// // Compile Sass into CSS & inject into browsers
// gulp.task('sass', function() {
// return gulp.src('./scss/**/*.scss')
// .pipe(sass().on('error', sass.logError))
// .pipe(gulp.dest('./css'))
// .pipe(browserSync.stream());
// });

// // default will also watch
// gulp.task('default', gulp.parallel('watch'));

exports.style = style;
