'use strict';

var grunt = require('grunt');

exports.textr = {
  original: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/original');
    var expected = grunt.file.read('test/fixture');
    test.equal(actual, expected, 'should return original text.');

    test.done();
  },
  transform: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/transformed');
    var expected = grunt.file.read('test/expected');
    test.equal(actual, expected, 'should return transformed text.');

    test.done();
  }
};
