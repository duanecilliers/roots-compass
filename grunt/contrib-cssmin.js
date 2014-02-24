module.exports = function (grunt) {
	'use strict';

	grunt.config('cssmin', {
		minify: {
			expand: true,
			cwd: 'assets/css/',
			src: ['app.css'],
			dest: 'assets/css/',
			ext: '.min.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
}
