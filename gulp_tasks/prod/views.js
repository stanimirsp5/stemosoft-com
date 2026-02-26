const gulp = require('gulp');
const ejs = require('gulp-ejs');
const log = require('fancy-log');
const replace = require('gulp-replace-path');
const rename = require('gulp-rename');

gulp.task('prod_views',function(){
	return gulp.src(['src/docs/*.ejs', 'src/docs/privacyPolicies/*.ejs'])
	.pipe(replace(/href\s*=\s*(['"])\/(.*?)(['"])/g,'href="./$2.html"')) // replace hrefs
	.pipe(replace("./.html", "./index.html"))
	.pipe(ejs({ site_analytics: process.env.ANALYTICS || "",asset: function(assetLoc){ return assetLoc; }, convertType: ".html"}, {}, { ext: '.html' }).on('error', log)) // process EJS syntax
	.pipe(rename({ extname: '.html' }))  // rename output to .html
	.pipe(gulp.dest('./dist')) // output to /docs folder
});
