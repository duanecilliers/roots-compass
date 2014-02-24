module.exports = function (grunt) {
	'use strict';

	grunt.config('jshint', {
		options: {
			jshintrc: '.jshintrc',
			ignores: ['assets/js/*.min.js', 'assets/js/modernizr.js']
		},
		files: ['assets/js/*.js', 'assets/js/test/**/*.js'],
		grunt: {
			options: {
				jshintrc: '.gruntjshintrc'
			},
			files: {
				src: ['Gruntfile.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
}
