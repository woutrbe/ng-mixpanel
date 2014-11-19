var gulp 	= require('gulp'),
	rename 	= require('gulp-rename'),
	uglify	= require('gulp-uglify'),
	bump	= require('gulp-bump');

gulp.task('release', function() {
	return gulp.src('src/ng-mixpanel.js')
			.pipe(uglify())
			.pipe(rename('ng-mixpanel.min.js'))
			.pipe(gulp.dest('release/'));
});

gulp.task('bump', function() {
	return gulp.src('./*.json')
			.pipe(bump({type: 'minor'}))
			.pipe(gulp.dest('./'));
})