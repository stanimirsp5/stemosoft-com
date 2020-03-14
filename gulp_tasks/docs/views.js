// docs_views
// Compile EJS views to HTML the docs folder root ('docs/')

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const log = require('fancy-log');
const replace = require('gulp-replace-path');

gulp.task('docs_views',function(){
	return gulp.src(['src/docs/*.ejs', 'src/docs/privacyPolicies/*.ejs'])
	.pipe((replace(/href\s*=\s*(['"])\/(.*?)(['"])/g,'href="./$2.html"')))
	.pipe(ejs({ site_analytics: process.env.ANALYTICS || "",asset: function(assetLoc){ return assetLoc; }, convertType: ".html"}, {}, { ext: '.html' }).on('error', log))
	.pipe(gulp.dest('./docs'))
});