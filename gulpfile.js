var del = require('del');
var gulp = require('gulp');

var jsFiles = '/**/*.js';
var mapFiles = '/**/*.js.map';
var typingFiles = '/**/*.d.ts';

gulp.task('clean.app', function (done) {
	var dir = './source';
	return del([dir + jsFiles, dir + mapFiles, dir + typingFiles], done);
});

gulp.task('clean.server', function (done) {
	var dir = './server';
	var typingsFolder = '/typings/*.d.ts';
	var typingsSubfolders = '/typings/**/*.d.ts';
	return del([dir + jsFiles
			, dir + mapFiles
			, dir + typingFiles
			, '!' + dir + typingsFolder
			, '!' + dir + typingsSubfolders], done); 
});