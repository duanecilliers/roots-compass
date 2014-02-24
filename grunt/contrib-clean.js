module.exports = function (grunt) {
	'use strict';

	grunt.config('clean', {
		build: ['assets/js/app.min.js', 'assets/css/app.css', 'assets/css/app.min.css']
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
}
