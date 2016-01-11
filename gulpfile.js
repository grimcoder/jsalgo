/**
 * Created by taraskovtun on 1/11/16.
 */
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');


gulp.task('default', ['watch']);

gulp.task('watch', function () {
    gulp.watch('test/*.js', ['test'])
    gulp.watch('*.js', ['test'])
})


gulp.task('test', function () {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: ['spec']}))
        .on('error', util.log);
});