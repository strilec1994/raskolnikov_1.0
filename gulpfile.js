'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');



function buildCSS(done){
  gulp.src('./assets/scss/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
      //.pipe(shorthand())
  .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})) 
  .pipe(gulp.dest('./assets/css/')) 
  .pipe(sass({outputStyle: 'compressed'}))         
  .pipe(rename({suffix: '.min'})) 
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./assets/css/'))  
  .pipe(browserSync.stream()); 
  done();
}

//function copyCSS(done){
//  gulp.src('./assets/css/main.min.css')
//  .pipe(rename('style.css'))
//  .pipe(gulp.dest('./assets/css'));
//  done();
//}

 
function concatCSS () {
  return gulp.src(['./assets/css/template.css', './assets/css/main.min.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./'));
};


  function sync(done){
    browserSync.init({
      server: {baseDir: './'},
      port: 3000
    });
    done();
  }   
  function browserReload(done){
    browserSync.reload();
    done();
  }
  
  function watchFiles() 
  {
    gulp.watch('./assets/scss/**/*', buildCSS);
    //gulp.watch('./assets/css/**/*', copyCSS);
    gulp.watch('./assets/css/**/*', concatCSS);

   // gulp.watch('./src/*.html', htmlMin);
   // gulp.watch('./src/**/*.php', browserReload);
   // gulp.watch('./src/**/*.js', browserReload); 
   // gulp.watch('./src/img/*', imgMin);
  }
  //gulp.task(imgMin); 
  gulp.task('default', gulp.parallel(sync, watchFiles));
  gulp.task(sync); 