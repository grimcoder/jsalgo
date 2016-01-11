/**
 * Created by taraskovtun on 1/11/16.
 */
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');


gulp.task('default', ['test', 'watch']);



gulp.task('testlinkedlist', ['testlinkedlist', 'watchlist']);


gulp.task('watchlist', function () {
    gulp.watch('test/*.js', ['testlinkedlist'])
    gulp.watch('*.js', ['testlinkedlist'])
})


gulp.task('watch', function () {
    gulp.watch('test/*.js', ['test'])
    gulp.watch('*.js', ['test'])
})

gulp.task('test', function () {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: ['spec']}))
        .on('error', util.log);
});

gulp.task('testlinkedlist', function () {
    return gulp.src(['test/linkedlist.js'], { read: false })
        .pipe(mocha({ reporter: ['spec']}))
        .on('error', util.log);
});