const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// Imagenes
const imagemin = require('gulp-imagemin');//Version 7.1.0

//Compile CSS Dev
function css(done) {
  src('src/styles/styles.scss') // Source
      .pipe( sass() ) // Compiling...
      .pipe( dest('src/') ) // Save
  done();
}
function dev(done) {
  watch('src/styles/*.scss', css);
  done();
}
//Compile Images Min size Production
function imagenes(done) {
  src('src/assets/img/**/*')
      .pipe( imagemin({ optimizationLevel: 3}) )
      .pipe( dest('dist/img') )
  done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;

exports.default = series(imagenes,css, dev);
