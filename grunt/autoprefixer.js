module.exports = function (grunt) {
	'use strict';

	grunt.config('autoprefixer', {
		options: {
			browsers: ['last 1 version']
		},
		dist: {
			files: [{
				expand: true,
				cwd: 'assets/css/',
				src: '{,*/}*.css',
				dest: 'assets/css/'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
}
