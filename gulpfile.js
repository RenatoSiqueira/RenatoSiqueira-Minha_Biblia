const gulp 				= require("gulp")
const sass 				= require("gulp-sass")
const notify  			= require("gulp-notify")
const htmlmin 	    	= require("gulp-htmlmin")
const minifycss			= require("gulp-minify-css") 
const browserSync		= require('browser-sync').create()

/* Task compile scss to css */
gulp.task("sass", function() {
	return gulp.src("./src/scss/style.scss")
				.pipe(sass({outPutStyle: 'compressed'}))
				.on('error', notify.onError({title: "erro scss", message: "<%= error.message %>"}))
				.pipe(minifycss())
				.pipe(gulp.dest("./public/css"))
				.pipe(browserSync.stream())
});


/* Task minify html */
gulp.task("html", function() {
	return gulp.src("./src/**/*.ejs")
				.pipe(htmlmin({collapseWhitespace: true}))
				.pipe(gulp.dest("./views"))
				.pipe(browserSync.stream())
});

/* Task server local */
gulp.task("server", function() {
	browserSync.init({
		proxy: "http://localhost:3000/"
	});

	/* Watch */
	gulp.watch("./src/scss/**/*.scss", ['sass']);
	gulp.watch("./src/**/*.ejs", ['html']);
});

gulp.task("default", ["sass", "html", "server"]);