var cp = require('child_process');

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('build-internal', ['html-build', 'other-build']);

gulp.task('other-build', ['jekyll-build'], function () {
	return gulp.src(['.tmp/**', '!.tmp/**/*.html'])
		.pipe(gulp.dest('_site'));
});

gulp.task('html-build', ['jekyll-build'], function () {
	return gulp.src('.tmp/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('_site'));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['build-internal'], function () {
	browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'build-internal'], function () {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
	return gulp.src('css/main.scss')
        .pipe(sass({
	includePaths: ['scss'],
	onError: browserSync.notify
}))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest('_site/css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	gulp.watch('css/*.scss', ['sass']);
	gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', 'pages/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('build', ['sass', 'build-internal']);
