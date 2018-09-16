const Generator = require('yeoman-generator')
const path = require('path')
const to = require('to-case')
const yosay = require('yosay')

const projectGenerator = Generator.extend({
  prompting: {
    welcome() {
      this.log(
        yosay(
          "'Allo 'allo! This generator add Redux, " +
            'styled-components and some useful tools and libraries like ' +
            'auto-generate boilerplate code to the most common ' +
            'React starter Create React App'
        )
      )
    },
    ask() {
      return this.prompt([
        {
          name: 'projectName',
          type: 'input',
          message: 'Project name:',
          default: path.basename(this.destinationPath()),
        },
        {
          name: 'projectDescription',
          type: 'input',
          message: 'Project description:',
        },
        {
          name: 'projectVersion',
          type: 'input',
          message: 'Project version:',
          default: '0.1.0',
        },
        {
          name: 'authorName',
          type: 'input',
          message: 'Author name:',
          store: true,
        },
      ]).then(answers => {
        this.projectName = answers.projectName
        this.projectDescription = answers.projectDescription
        this.projectVersion = answers.projectVersion
        this.authorName = answers.authorName
      })
    },
  },

  writing: {
    public() {
      this.fs.copyTpl(this.templatePath('public/index.html'), this.destinationPath('public/index.html'), {
        projectName: to.title(this.projectName),
      })
      this.fs.copyTpl(this.templatePath('public/manifest.json'), this.destinationPath('public/manifest.json'), {
        projectName: to.title(this.projectName),
      })
      this.fs.copy(this.templatePath('public/favicon.ico'), this.destinationPath('public/favicon.ico'))
    },

    readme() {
      this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
        projectName: to.title(this.projectName),
      })
    },

    gitignore() {
      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    },

    gitattributes() {
      this.fs.copy(this.templatePath('gitattributes'), this.destinationPath('.gitattributes'))
    },

    editorconfig() {
      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'))
    },

    prettierrc() {
      this.fs.copy(this.templatePath('prettierrc'), this.destinationPath('.prettierrc'))
    },

    eslintignore() {
      this.fs.copy(this.templatePath('eslintignore'), this.destinationPath('.eslintignore'))
    },

    eslintrc() {
      this.fs.copy(this.templatePath('eslintrc.json'), this.destinationPath('.eslintrc.json'))
    },

    env() {
      this.fs.copy(this.templatePath('env'), this.destinationPath('.env'))
    },

    generators() {
      this.fs.copy(this.templatePath('generators'), this.destinationPath('generators'))
    },

    docs() {
      this.fs.copy(this.templatePath('docs'), this.destinationPath('docs'))
    },

    src() {
      this.fs.copy(this.templatePath('src'), this.destinationPath('src'))
    },

    packageJSON() {
      this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
        projectName: this.projectName,
        projectDescription: this.projectDescription,
        projectVersion: this.projectVersion,
        authorName: this.authorName,
      })
    },
  },

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: true,
    })
  },
})

module.exports = projectGenerator
