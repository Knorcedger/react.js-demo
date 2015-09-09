var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 3000,
		ui: {
			port: 3001,
			weinre: {
				port: 3002
			}
		},
		// files: ['./*', './**/*'],
		reloadDelay: 0,
		open: false
	});

});

gulp.task('watch', function() {
	console.log('watcher started');
	gulp.watch(['src/*', './*.html'], ['compile']);
});

gulp.task('compile', ['babel'], function() {
	console.log('reload');
	return browserSync.reload();
});

gulp.task('babel', function () {
	console.log('babel');
	return gulp.src('src/*')
		.pipe(babel())
		.pipe(gulp.dest('build/'));
});

gulp.task('run', ['serve', 'watch']);
