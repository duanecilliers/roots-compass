module.exports = function (grunt) {
	'use strict';

	// Load all Grunt tasks using matchdep
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
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
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				ignores: ['assets/js/*.min.js']
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
		},
		modernizr: {
			dists: {
				devFile: "bower_components/modernizr/modernizr.js",
				outputFile: "assets/js/_modernizr.js",
				// Based on default settings on http://modernizr.com/download/
				extra: {
					"shiv": true,
					"printshiv": false,
					"load": true,
					"mq": false,
					"cssclasses": true
				},
				// Based on default settings on http://modernizr.com/download/
				extensibility: {
					"addtest": false,
					"prefixed": false,
					"teststyles": false,
					"testprops": false,
					"testallprops": false,
					"hasevents": false,
					"prefixes": false,
					"domprefixes": false
				},
				files: {
					src: ['assets/js/*.js', 'assets/sass/*.{scss,sass}']
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: './',
					mainConfigFile: 'assets/js/_config.js',
					name: 'bower_components/almond/almond.js',
					out: 'assets/js/scripts.min.js',
					done: function (done, output) {
						var duplicates = require('rjs-build-analysis').duplicates(output);

						if (duplicates.length > 0) {
							grunt.log.subhead('Duplicates found in require build');
							grunt.log.warn(duplicates);
							done(new Error('r.js built duplicate modules, please check the excludes option.'));
						}

						done();
					}
				}
			},
			optimize: 'uglify',
			uglify: {
				toplevel: true,
				ascii_only: true,
				beautify: true,
				max_line_length: 1000,
				no_mange: true
			}
		}
	});
};
