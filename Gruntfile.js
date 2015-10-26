/*
 * grunt-textr
 * https://github.com/denysdovhan/grunt-textr
 *
 * Copyright (c) 2015 Denys Dovhan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    clean: {
      tests: ['tmp']
    },

    textr: {
      original: {
        files: {
          'tmp/original': 'test/fixture'
        }
      },
      transform: {
        options: {
          locale: 'en-us',
          plugins: [
            require('typographic-quotes'),
            require('typographic-ellipses'),
            require('typographic-single-spaces')
          ]
        },
        files: {
          'tmp/transformed': 'test/fixture'
        }
      }
    },

    nodeunit: {
      tests: ['test/test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'textr', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
