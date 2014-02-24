module.exports = function (grunt) {
	'use strict';

	grunt.config('requirejs', {
		compile: {
			options: {
				baseUrl: '.',
				mainConfigFile: 'assets/js/config/require.js',
				deps: ['assets/js/app'],
				insertRequire: ['assets/js/app'],
				name: 'bower_components/almond/almond',
				out: './assets/js/app.min.js',
				optimize: 'uglify2',
				generateSourceMaps: true,
				preserveLicenseComments: false

				// done: function (done, output) {
				// 	var duplicates = require('rjs-build-analysis').duplicates(output);

				// 	if (duplicates.length > 0) {
				// 		grunt.log.subhead('Duplicates found in require build');
				// 		grunt.log.warn(duplicates);
				// 		done(new Error('r.js built duplicate modules, please check the excludes option.'));
				// 	}

				// 	done();
				// }
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
}
