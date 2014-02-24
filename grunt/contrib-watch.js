module.exports = function (grunt) {
	'use strict';

	grunt.config('watch', {
		options: {
			livereload: true
		},
		compass: {
			files: ['assets/sass/*.{scss,sass}'],
			tasks: [] // @TODO
		},
		scripts: {
			files: ['assets/js/*.js', '!assets/js/*.min.js'],
			tasks: ['jshint', 'requirejs'],
			options: {
				debounceDelay: 500
			}
		},
		markup: {
			files: ['*.php']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
}
