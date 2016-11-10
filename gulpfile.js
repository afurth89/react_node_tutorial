// ** Basic task skeleton **

// gulp.task('default', function() {
// 	// place code for default task here
// })

var gulp = require('gulp'),
		gulpReact = require('gulp-react'),
	  gulpNodemon = require('gulp-nodemon'),
		gulpWatch = require('gulp-watch')

// Gulp will watch our index.jsx file and call our jsx task whenever the file is touched
gulp.task('watch-jsx', ['jsx'], function () {
	gulpWatch('**/*.jsx', { ignored: 'lib/' }, function () {
		gulp.start('jsx')
	})	
})

gulp.task('jsx', function (cb) {
	return gulp.src('**/*.jsx')
						 .pipe(gulpReact())
						 .pipe(gulp.dest('lib'))
})

gulp.task('node', ['watch-jsx'], function () {
	gulpNodemon({
		script: 'lib/app.js',
		ignore: ['gulpfile.js'],
		ext: 'js jsx'
	})
})

gulp.task('default', function () {
	gulp.start('node')
})

