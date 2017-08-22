var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
	return gulp.src(['extension/*.less'])
		.pipe(less({style: 'compressed'}).on('error', gutil.log))
		.pipe(autoprefixer('last 10 versions', 'ie 9'))
		.pipe(gulp.dest('extension'));
});

