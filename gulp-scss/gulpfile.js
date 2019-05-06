// load 
const del = require('del');
const gulp = require("gulp");
const browsersync_server = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');

// const del = require('del');

// delete all assets in dist

// compile SCSS files

function cleanAssets(done) {

    return del(

        ['dist/**/*.html', 'dist/fonts/**/*', 'dist/img/**/*'], 

        { force: true }

    );

}

 

// publish HTML files src into dist

// publish HTML files src into dist

function publishHtml(done) {

    return gulp.src('src/**/*.html')
  
      .pipe(htmlmin({ collapseWhitespace: true }))
  
      .pipe(gulp.dest('dist'));
  
  }
  
   
  
  // watch files
  
  function watchFiles(done) {
  
    gulp.watch("src/**/*.html", gulp.series(publishHtml, reload));
    gulp.watch("src/scss/**/*.scss", gulp.series(compileScss, reload));}
 

// Copy all fonts from src/fonts into dist

function publishFonts(done) {

    return gulp.src('src/fonts/**/*')

      .pipe(gulp.dest('dist/fonts'));

}

 

// Copy all images from src/img into dist

function publishImages(done) {

  return gulp.src('src/img/**/*')

    .pipe(gulp.dest('dist/img'));

}

// browserSync server

function serve(done) {

    browsersync_server.init({

        server: {

            baseDir: './dist/'

        }

    });

    done();

}
// compile SCSS files



// browserSync reload

function reload(done) {

    browsersync_server.reload();

    done();}


function compileScss(done) {

        return gulp.src('src/scss/**/*.scss')
      
          .pipe(sass().on('error', sass.logError))
      
          .pipe(gulp.dest('dist/css'));
    }



exports.publish = gulp.series(cleanAssets, publishHtml, publishFonts, publishImages); //series-...proste obalí seznam funkcí
exports.kotatko_hlida = gulp.series(cleanAssets, publishHtml,compileScss,serve, watchFiles);
