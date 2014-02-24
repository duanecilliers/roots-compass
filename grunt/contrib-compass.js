module.exports = function (grunt) {
	'use strict';

	grunt.config('compass', {
		options: {
			sassDir: 'assets/sass',
			cssDir: 'assets/css',
			generatedImagesDir: 'assets/img/dist',
			imagesDir: 'assets/img',
			javascriptsDir: 'assets/js',
			fontsDir: 'assets/fonts',
			importPath: 'bower_components',
			httpImagesPath: 'assets/img',
			httpGeneratedImagesPath: 'assets/img/dist',
			httpFontsPath: 'css/fonts',
			relativeAssets: true
		},
		server: {
			options: {
				debugInfo: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
}
