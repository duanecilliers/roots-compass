module.exports = function (grunt) {
	'use strict';

	grunt.config('versioning', {
		options: {
			cwd: 'assets',
			output: 'php',
			outputConfigDir: 'assets'
		},
		dist: {
			files: [{
				assets: [{
					src: ['assets/js/app.min.js'],
					dest: 'assets/js/app.min.js'
				}],
				key: 'global',
				dest: 'js',
				type: 'js',
				ext: '.min.js'
			}, {
				assets: [{
					src: ['assets/css/app.min.css'],
					dest: 'assets/css/app.min.css'
				}],
				key: 'global',
				dest: 'css',
				type: 'css',
				ext: '.min.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-static-versioning');
}
