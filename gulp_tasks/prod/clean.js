// prod_clean => This cleans the prod folder which contains the previous prod version

const gulp = require('gulp');
const del = require('del');

gulp.task('prod_clean', function(done) {
	return del(['docs/**', 'dist/**']);
});