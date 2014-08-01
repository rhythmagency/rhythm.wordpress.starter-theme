'use strict';

module.exports = function (grunt) {
	var _ = require('lodash');

	// Load all grunt plugins
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// TODO: add production and development tasks for each case.

	grunt.initConfig({
		'config': {
			'paths': {
				'js': './js',
				// TODO: change node modules folder name - add to documentation and possibly automate this
				'js_node_modules': './js/node_modules/theme_module',
				'css': './css'
			},
			'files': {
				'js': '<%= config.paths.js_node_modules %>/**/*.js',
				'js_app': '<%= config.paths.js %>/app.js',
				'js_app_min': '<%= config.paths.js %>/app.min.js',
				'css': '<%= config.paths.css %>/**/*.scss',
				'css_app': '<%= config.paths.css %>/app.scss',
				'css_app_min': '<%= config.paths.css %>/app.css'
			},
			'watch': {
				'js': '<%= config.paths.js %>/**/*.js',
				'js_node_modules': '<%= config.paths.js_node_modules %>/**/*.js',
				'css': '<%= config.paths.css %>/**/*.scss'
			}
		},

		'uglify': {
			'build': {
				'options': {
					'beautify': true
				},
				'files': {
					'<%= config.files.js_app_min %>': ['<%= config.files.js_app_min %>']
				}
			}
		},
		'browserify': {
			'build': {
				'files': {
					'<%= config.files.js_app_min %>': ['<%= config.files.js_app %>']
				}
			}
		},
		'sass': {
			'build': {
				'options': {
					'sourceMap': true
				},
				'files': {
					'<%= config.files.css_app_min %>': ['<%= config.files.css_app %>']
				}
			}
		},
		'watch': {
			'options': {
				'debounceDelay': 150
			},
			'js': {
				'files': '<%= config.files.js %>',
				'tasks': 'build:js'
			},
			'css': {
				'files': '<%= config.files.css %>',
				'tasks': 'build:css'
			}
		},
		'build': {
			'js': ['browserify'], //TODO: add uglify for production
			'css': ['sass']
		},
		'concurrent': {
			'watch': {
				'options': {
					'logConcurrentOutput': true
				},
				'tasks': ['watch:js', 'watch:css']
			}
		}
	});

	grunt.task.registerMultiTask('build', 'Build files.', function () {
		grunt.task.run(this.data);
	});

	grunt.task.registerTask('default', ['build', 'concurrent']);
};