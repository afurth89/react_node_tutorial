// ** Basic task skeleton **

// gulp.task('default', function() {
// 	// place code for default task here
// })

var gulp = require('gulp'),
		fs = require('fs'),
		reactTools = require('react-tools'),
		spawn = require('child_process').spawn

var transform = function (srcFile, destFile, cb) {
	console.log('Reading %s...', srcFile)

	var src = fs.readFile(srcFile, {encoding: 'utf8'}, function(readErr, data) {
		if (readErr) {
			cb(readErr)
		}             
		else {
			console.log('Writing %s', destFile)	
			fs.writeFile(destFile, reactTools.transform(data), function (writeErr) {
				if (writeErr) {
					cb(writeErr)
				}
				else {
					cb()
				}
			})
		}
	})
}

gulp.task('jsx', function (cb) {
	fs.mkdir('./lib', function (err) {
		transform('app.jsx', './lib/app.js', function (err) {
			cb(err)
		})
	})
})

gulp.task('node', ['jsx'], function () {
	spawn('node', ['./lib/app.js'], { stdio: 'inherit'})
})

gulp.task('default', function () {
	gulp.start('node')
})