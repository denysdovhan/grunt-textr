# grunt-textr [![Build Status][travis-bange]][travis-status]

[![Greenkeeper badge](https://badges.greenkeeper.io/denysdovhan/grunt-textr.svg)](https://greenkeeper.io/)

> Grunt plugin for [Textr][textr] — framework for compose text transformation functions

## Install

You may install this plugin with this command:

```sh
npm install grunt-textr --save-dev
```

## Usage

Use this plugin like this:

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    textr: {
      options: {
        locale: 'en-us',
        plugins: [
          require('typographic-quotes'),
          require('typographic-ellipses'),
          require('typographic-single-spaces')
        ]
      },
      files: {
        'dist/foo.md': 'src/bar.md'
      }
    }
});

grunt.registerTask('default', ['textr']);
```

## Options

### options
Type: `Object`
Default value: `{}`

All passed options, except `options.plugins`, will be used for creating new transform stream (see [`textr` defaults][textr-defaults])

### options.plugins
Type: `Array`
Default value: `[]`

Array of transform functions.

## License

[MIT][mit-license] © [Denys Dovhan][denysdovhan]

[travis-bange]: https://travis-ci.org/denysdovhan/grunt-textr.svg
[travis-status]: https://travis-ci.org/denysdovhan/grunt-textr
[textr]: https://github.com/shuvalov-anton/textr
[textr-defaults]: https://github.com/shuvalov-anton/textr#textrdefaults
[mit-license]: http://opensource.org/licenses/MIT
[denysdovhan]: http://denysdovhan.com/
