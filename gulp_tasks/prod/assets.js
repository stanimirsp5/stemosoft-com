// prod_assets
// Move the necessary images to the prod folder ('dist/assets')

const gulp = require('gulp');

gulp.task('prod_assets', function(done){
	gulp.src(['src/docs/assets/**/*']).pipe(gulp.dest('dist/')); // Transfer every asset
	return gulp.src(['./README.md',"./LICENSE"]).pipe(gulp.dest('dist/')); // Transfer readme and license
});