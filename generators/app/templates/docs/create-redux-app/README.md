# Generator create-redux-app

This project was bootstrapped with [Create Redux App](https://github.com/delvallejonatan/generator-create-redux-app). Here you can find information on how to perform common tasks.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-create-redux-app using [npm](https://www.npmjs.com/) ( **You’ll need to have Node >= 4 on your machine**  [node.js](https://nodejs.org/)).

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

### `npm run generate`

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s and `container`s.


## User Guide

- [Folder Structure](#folder-structure)
- [Redux Dev Tools](#redux-dev-tools)
- [Yarn](#yarn)
- [Import Export Containers and Components](#import-export-containers-and-components)
- [Git Hooks](#git-hooks)
- [ESLint](#eslint)
- [Routing](#routing)
- [Styled Components](#styled-components)
- [Can I use Sass with this boilerplate?](#can-i-use-sass-with-this-boilerplate?)
- [Generators](#generators)
- [Reselect](#reselect)
- [Recompose](#recompose)
- [Redux Actions](#redux-actions)
- [Create React App config](#create-react-app-config)


## Folder Structure

create-redux-app override create-redux-app folder structure.
Your project folders should look like this:

```
my-app/
  README.md
  package.json
  yarn.lock
  docs/
  generators/
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


## Yarn

[Yarn](https://yarnpkg.com/en/) is a package manager for your code. Fast, reliable, and secure dependency management.<br>

**Fast:** Yarn caches every package it downloads so it never needs to download the same package again. It also parallelizes operations to maximize resource utilization so install times are faster than ever.

**Reliable:** Using a detailed, concise lockfile format and a deterministic algorithm for installs, Yarn is able to guarantee that an install that worked on one system will work exactly the same way on any other system.

**Secure:** Yarn uses checksums to verify the integrity of every installed package before its code is executed.

### Usage

#### `yarn install` or `yarn`
Installs all the dependencies defined in a package.json file.

#### `yarn add`
Adds a package to use in your current package.

#### `yarn remove`
Removes an unused package from your current package.

## Import Export Containers and Components

### Export
To Export Components or Containers there is an `index.js` file in each root folder so you have to export it there first in order to import outside the root folder.
  ```
  index.js/
    export { default as Comp1 } from './Comp1'
    export { default as Comp2 } from './Comp2'
  ```

### Import
To import Components or Containers doit like follow:
  - Inside the same folder (Components/Containers) <br>
    ```
    import Comp1 from './Comp1'
    import Cont1 from './Cont1'
    ```
  - Outside the same folder (Components/Containers) <br>
    ```
    import { Comp1 } from '../components'
    import { Cont1 } from '../containers'
    ```

## Git Hooks

We use [Husky](https://github.com/typicode/husky) to create Git Hooks. There is a pre commit hook than run eslint to prevent bad commits. You can add more by editing the package.json.<br>
```
// Edit package.json

{
  "scripts": {
    "precommit": "npm run lint",
    "prepush": "whatever...",
    "...": "..."
  }
}
```

### Uninstall

```
npm uninstall husky --save-dev
```
And delete the `pre` scripts in`package.json`


## ESLint

You can add/remove rules or even extend plugins if you want. We extend `react-app` and have some specific rules.
```
// Edit package.json

"eslintConfig": {
  "extends": "react-app",
  "rules": {
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "react/jsx-space-before-closing": [
      2,
      "always"
    ],
    "react/jsx-closing-bracket-location": [
      2,
      "tag-aligned"
    ],
    "semi": [
      "error",
      "never"
    ],
    "max-len": [
      "error",
      80
    ]
  }
}
```

## Routing

The best option for routing is [React Router](https://reacttraining.com/react-router/) specifically its new version for the web [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start). <br>
`src/routes/index.js` is the starter point of the app, where all the routes are specified and render the containers and components. Specify here all your routes, redirects, transitions, etc.


## Styled Components

[styled-components](https://styled-components.com/) allow you to write actual CSS code in your JavaScript to style your components,
removing the mapping between components and styles.

See the
[official documentation](https://github.com/styled-components/styled-components)
for more information!

### Usage

This creates two react components, `<Title>` and `<Wrapper>`:

```JSX
import React from 'react'

import styled from 'styled-components'

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`
```

*(The CSS rules are automatically vendor prefixed, so you don't have to think about it!)*

You render them like so:

```JSX
// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

For further examples see the
[official documentation](https://github.com/styled-components/styled-components).


## Can I use Sass with this boilerplate?

Yes, although we advise against it and **do not support this**. We selected
[`styled-components`](https://github.com/styled-components/styled-components)
over Sass because its approach is more powerful: instead of trying to
give a styling language programmatic abilities, it pulls logic and configuration
out into JS where we believe those features belong.

If you _really_ still want (or need) to use Sass [then...](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)


## Generators

```Shell
npm run generate
```

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s and `container`s. You can
also run `npm run generate <part>` to skip the first selection. (e.g. `npm run
generate container`). This generators are outside yeoman so you can change them to fit your necessities, for this just go to `generators/index.js`, see [plop documentation](https://plopjs.com/documentation/) for more information.


## Reselect

To prevent useless renders in (Redux) connected components, you must also make sure that the mapStateToProps function doesn’t return new objects each time it is called.
The problem is that each time mapStateToProps runs, it returns a new object, even if the underlying objects didn’t change. As a consequence, the component re renders every time something in the state changes — while id should only render if the part of the state we are requiring change.<br>

[Reselect](https://github.com/reactjs/reselect) solves this problem by using memoization. Instead of computing the props directly in mapStateToProps, you use a selector from reselect, which returns the same output if the input didn’t change.


## Recompose

Because a need of `shouldComponentUpdate`, sometime you have to transform a simple, functional component to a class-based component. This adds more lines of code, and every line of code has a cost — to write, to debug, and to maintain.
Fortunately, you can implement the `shouldComponentUpdate` logic in a higher-order component (HOC) thanks to [recompose](https://github.com/acdlite/recompose). It’s a functional utility belt for React, providing for instance the `pure()` HOC.
Now instead  of export the component we can do `export default pure(componentName)` an this will be pure without transforming to a class-based component.


## Redux Actions

Flux standard action (FSA) defines four properties that are allowed on an action:
  - type: Required. A string or Symbol indicating the action type.
  - payload: Optional. Any value or object containing data related to the action.
  - error: Optional. A boolean that, when true, indicates that the payload is an Error object.
  - meta: Optional. Any value or object containing data that isn’t part of the payload<br>
If you adopt FSA (and you will, right?), then you can also consider some libraries that are designed to work with it. [redux-actions](https://github.com/acdlite/redux-actions) is the most popular. Then just export the `createAction` function.<br>

```js
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes'
import { createAction } from 'redux-actions'

export const increment = createAction(INCREMENT_COUNTER)

export const decrement = createAction(DECREMENT_COUNTER)
```


## Create React App config

You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## License

[MIT License](https://github.com/delvallejonatan/generator-create-redux-app/blob/master/LICENSE)
