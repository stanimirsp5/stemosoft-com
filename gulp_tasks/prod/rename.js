const gulp = require('gulp');
const fs = require('fs');

gulp.task('prod_rename',function(done){
	fs.rename('docs', 'dist',function(err){
		if (err){ throw err; }
		done();
	});
});