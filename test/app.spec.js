/* global describe before it */

const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path  = require('path');

describe('generator-create-redux-app', () => {
  describe('Run yeoman generator-create-redux-app ', () => {
    before(() => helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'projectName',
        projectDescription: 'projectDescription',
        projectVersion: 'projectVersion',
        authorName: 'authorName',
      })
      .toPromise());

    // test included files
    [{
      desc : 'generates an index.html file',
      files: ['public/index.html'],
    }, {
      desc : 'generates a favicon.ico file',
      files: ['public/favicon.ico'],
    }, {
      desc : 'generates a manifest.json file',
      files: ['public/manifest.json'],
    }, {
      desc : 'generates a docs folder',
      files: ['docs'],
    }, {
      desc : 'generates a generators folder',
      files: ['generators'],
    }, {
      desc : 'generates a src folder',
      files: ['src'],
    }, {
      desc : 'generates an .editorconfig file',
      files: ['.editorconfig'],
    }, {
      desc : 'generates a .gitignore file',
      files: ['.gitignore'],
    }, {
      desc : 'generates a package.json file',
      files: ['package.json'],
    }, {
      desc : 'generates a README.md file',
      files: ['README.md'],
    }].forEach((fileCase) => {
      it(fileCase.desc, () => {
        assert.file(fileCase.files);
      });
    });
  });
});
