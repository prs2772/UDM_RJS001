const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { spawn } = require('child_process');

// Imagenes
const imagemin = require('gulp-imagemin');//Version 7.1.0 

//Compile CSS Dev
function css(done) {
  src('src/styles/styles.scss') // Source
      .pipe( sass() ) // Compiling...
      .pipe( dest('src/') ) // Save
  done();
}
//Compile Images Min size Production
function imagenes(done) {
  src('src/assets/img/**/*')
      .pipe( imagemin({ optimizationLevel: 3}) )
      .pipe( dest('dist/img') )
  done();
}

//DEV Options
function dev(done) {
  watch('src/styles/**/*.scss', css);
  watch('src/assets/img/**/*', imagenes);
  done();
}
function vite() {
  const viteProcess = spawn('vite --host', [], {
    stdio: 'inherit', // Redirige la entrada y salida estándar a la consola
    shell: true,
  });

  viteProcess.on('close', (code) => {
    if (code === 0) {
      done();
    } else {
      done(`Vite task exited with code ${code}`);
    }
  });
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.vite = vite;

exports.default = series(css,imagenes,parallel(dev,vite));
