# Generator create-redux-app

This project was bootstrapped with [Create Redux App](https://github.com/jonidelv/generator-create-redux-app). Here you can find information on how to perform common tasks.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-create-redux-app using [npm](https://www.npmjs.com/) ( **You’ll need to have Node >= 6.10.3 on your machine**  [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-create-redux-app
```

Then generate your new project:

```bash
mkdir project-name
cd project-name
yo create-redux-app
```

Once the installation is done, you can run some commands inside the project folder:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changes since the last commit.

[Read more about testing.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## User Guide

- [Folder Structure](#folder-structure)
- [Redux Dev Tools](#redux-dev-tools)
- [Git Hooks](#git-hooks)
- [Prettier](#prettier)
- [ESLint](#eslint)
- [Routing](#routing)
- [Emotion Js](#emotion-js)
- [Adding Sass Preprocessor](#adding-sass-preprocessor)
- [Redux Store](#redux-store)
- [Create React App config](#create-react-app-config)


## Folder Structure

create-redux-app override create-redux-app folder structure.
Once the generator runs your project folders should look like this:

```
my-app/
  docs/
  public/
    index.html
    favicon.ico
  src/
    actions/
    assets/
    components/
    constants/
    containers/
    reducers/
    routes/
    store/
    tests/
    styles/
    utils/
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.


## Redux Dev Tools

Create Redux App use [Redux DevTools Extension](http://extension.remotedev.io/). It provides access to the most popular monitors, is easy to configure and to filter actions.

### Installation

#### 1. For Chrome
 - from [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
 - or build it with `npm i && npm run build:extension` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./build/extension`;
 - or run it in dev mode with `npm i && npm start` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./dev`.

#### 2. For Firefox
 - from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/remotedev/);
 - or build it with `npm i && npm run build:firefox` and [load the extension's folder](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) `./build/firefox` (just select a file from inside the dir).

#### 3. For Electron
  - just specify `REDUX_DEVTOOLS` in [`electron-devtools-installer`](https://github.com/GPMDP/electron-devtools-installer).

#### 4. For other browsers and non-browser environment
  - use [`remote-redux-devtools`](https://github.com/zalmoxisus/remote-redux-devtools).


## Git Hooks

We use [Husky](https://github.com/typicode/husky) to create Git Hooks. There is a pre commit hook than run prettier to ensure good code format. You can also create a prepush hook.<br>
```
// Edit package.json

"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged"
  }
},
```

### Uninstall

```bash
npm uninstall husky --save-dev
```
And delete the `husky` key in`package.json`


## Prettier

You can add/remove rules if you want, just edit the `.prettierrc` file. Prettier runs in a precommit hooks to ensure good code formating with [pretty-quick](https://prettier.io/docs/en/precommit.html#option-2-pretty-quick-https-githubcom-azz-pretty-quick).
```
// Edit package.json

"scripts": {
  "format": "prettier --write '**/*.{js,jsx,json,md}'",
  "format:changed": "pretty-quick",
  "format:staged": "pretty-quick --staged",
  "eslint-check": "eslint --print-config .eslintrc.js | eslint-config-prettier-check"
},
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged"
  }
},
```

### Uninstall

```bash
npm uninstall eslint-config-prettier pretty-quick prettier --save-dev
```
Delete
```
"scripts": {
  "format": "prettier --write '**/*.{js,jsx,json,md}'",
  "format:changed": "pretty-quick",
  "format:staged": "pretty-quick --staged",
  "eslint-check": "eslint --print-config .eslintrc.js | eslint-config-prettier-check",
},
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged"
  }
},
```

## ESLint

You can add/remove rules or even extend plugins if you want. We extend **airbnb** ESLint rules.
```
// Edit eslintrc.json

{
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["prettier"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "jest": true,
    "browser": true,
    "node": true
  },
  "globals": {
    "DEBUG": false
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/first": 0
  }
}
```


## Routing

The best option for routing is [React Router](https://reacttraining.com/react-router/) specifically its new version for the web [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start). <br>
`src/routes/index.js` is the starter point of the app, where all the routes are specified and render the containers and components. Specify here all your routes, redirects, transitions, etc.


## Emotion Js

[emotion-js](https://emotion.sh/) allow you to write actual CSS code in your JavaScript to style your components,
removing the mapping between components and styles.

See the
[official documentation](https://emotion.sh/docs/introduction)
for more information!


## Adding Sass Preprocessor

Can I use Sass with this boilerplate? yes, although we advise against it and **do not support this**. We selected
[`styled-components`](https://github.com/styled-components/styled-components)
over Sass because its approach is more powerful: instead of trying to
give a styling language programmatic abilities, it pulls logic and configuration
out into JS where we believe those features belong.

If you _really_ still want (or need) to use Sass [then...](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)


## Redux Store

The Redux store is created this way so you can use it anywhere, even outside redux, in any js file.

```js
const { default: store } = process.env.NODE_ENV === 'production'
  ? require('./storeProd')
  : require('./storeDev')

module.exports = store()
```

### Usage

```js
import store from './store'

store.getState() // Get the state
store.dispatch() // Dispatch actions
```

## Create React App config

You can find the most recent version of the create-react-app guide [here](https://facebook.github.io/create-react-app/).


## License

[MIT License](https://github.com/jonidelv/generator-create-redux-app/blob/master/LICENSE)
