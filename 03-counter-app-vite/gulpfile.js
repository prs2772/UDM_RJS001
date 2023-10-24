const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('compile-sass', shell.task([
  'node-sass ./src/styles/styles.scss ./src/styles.css --watch'
]));

gulp.task('vite', shell.task([
  'vite'
]));

gulp.task('default', gulp.parallel('compile-sass', 'vite'));
