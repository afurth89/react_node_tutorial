// ** Basic task skeleton **

// gulp.task('default', function() {
// 	// place code for default task here
// })

var gulp = require('gulp'),
		gulpReact = require('gulp-react'),
	  gulpNodemon = require('gulp-nodemon')

gulp.task('jsx', function (cb) {
	return gulp.src('*.jsx')
						 .pipe(gulpReact())
						 .pipe(gulp.dest('lib'))
})

gulp.task('node', ['jsx'], function () {
	gulpNodemon({
		script: 'lib/app.js',
		ext: 'js'
	})
})

gulp.task('default', function () {
	gulp.start('node')
})

