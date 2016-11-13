var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');

gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('mocha', function () {
       return gulp.src('\public\qa\tests-about.js', {read: false})
            .pipe(mocha({reporter: 'nyan'}));
    }

);