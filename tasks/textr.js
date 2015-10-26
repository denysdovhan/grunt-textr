/*
 * grunt-textr
 * https://github.com/denysdovhan/grunt-textr
 *
 * Copyright (c) 2015 Denys Dovhan
 * Licensed under the MIT license.
 */

'use strict';
var textr = require('textr');

module.exports = function (grunt) {
  grunt.registerMultiTask('textr', 'Transform text with Textr', function () {

    var options = this.options();
    var plugins = options.plugins || [];
    delete options.plugins;

    this.files.forEach(function (file) {
      grunt.file.read(file.src[0]);

      var tf = textr(options);
      tf.use.apply(tf, plugins);

      grunt.file.write(file.dest, tf(grunt.file.read(file.src[0])));

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
