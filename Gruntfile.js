module.exports = function (grunt) {
	'use strict';

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});

	// Load per-task config from separate files.
	grunt.loadTasks('grunt');

	// Register alias tasks
	grunt.registerTask('build',
		'Build site files for testing or deployment.',
		['jshint', 'compass', 'modernizr', 'requirejs', 'autoprefixer', 'cssmin', 'versioning', 'clean']);

	grunt.registerTask('dev',
		'Start live-reloading and watch for file changes.',
		['watch']);

	grunt.registerTask('default', ['dev']);
};
