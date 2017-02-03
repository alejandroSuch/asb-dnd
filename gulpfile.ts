
var gulp = require('gulp'),
  runSequence = require('run-sequence'),
  sourcemaps = require('gulp-sourcemaps'),
  tsc  = require('gulp-typescript'),
  embedTemplates  = require('gulp-inline-ng2-template'),
  exec = require('child_process').exec;

//----
//build steps
gulp.task('build', function (done) {
  
  runSequence(
    'clean',
    'compile-typings'
  );

});

//----
//clearing the output dir
gulp.task('clean', function (done) {
  exec('rm -rf lib', function (err, stdOut, stdErr) {
    if (err){
      done(err);
    } else {
      done();
    }
  });
});

//----
//typescript compilation including sourcemaps and template embedding
gulp.task('compile-typings', function() {

    //loading typings file
    var tsProject = tsc.createProject('src/tsconfig.json');

    return  tsProject.src('src/**/*.ts')
        .pipe(embedTemplates({ 
            base:'/src',
            useRelativePaths: true 
        }))
        .pipe(tsProject())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('lib'));
});

