var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/**/*.css").on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
