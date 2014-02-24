module.exports = function (grunt) {
	'use strict';

	grunt.config('modernizr', {
		dists: {
			devFile: 'bower_components/modernizr/modernizr.js',
			outputFile: 'assets/js/vendor/modernizr.js',
			// Based on default settings on http://modernizr.com/download/
			extra: {
				'shiv': true,
				'printshiv': false,
				'load': true,
				'mq': false,
				'cssclasses': true
			},
			// Based on default settings on http://modernizr.com/download/
			extensibility: {
				'addtest': false,
				'prefixed': false,
				'teststyles': false,
				'testprops': false,
				'testallprops': false,
				'hasevents': false,
				'prefixes': false,
				'domprefixes': false
			},
			files: {
				src: ['assets/js/*.js', 'assets/sass/*.{scss,sass}']
			}
		}
	});

	grunt.loadNpmTasks('grunt-modernizr');
}
