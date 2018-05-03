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

### `npm run generate`

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s and `container`s.


## User Guide

- [Folder Structure](#folder-structure)
- [Redux Dev Tools](#redux-dev-tools)
- [Absolute Paths](#absolute-paths)
- [Import Export Containers and Components](#import-export-containers-and-components)
- [Git Hooks](#git-hooks)
- [Prettier](#prettier)
- [Routing](#routing)
- [Styled Components](#styled-components)
- [Adding Sass Preprocessor](#adding-sass-preprocessor)
- [Generators](#generators)
- [Reselect](#reselect)
- [Recompose](#recompose)
- [Redux Actions](#redux-actions)
- [Create React App config](#create-react-app-config)


## Folder Structure

create-redux-app override create-redux-app folder structure.
Once the generator runs your project folders should look like this:

```
my-app/
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


## Absolute Paths

  By default ES6 modules in create-react-app use relative paths, which is fine for cases where the files you’re importing are relatively close within the file tree
  so if the file is in the same folder and next to the file you're importing from, just use relative paths like so:

  ```js
  import { createGoal } from ‘./actions’
  import { selectAuth } from ‘./selectors’
  ```
  But using relative paths is a real pain when you start dealing with deeply nested tree structures because you end up with dot-dot syndrome. Because of the `.env` file at the root level now we can now do absolute path like this:

  ```js
  import { editUser } from ‘containers/AppContainer/actions’
  import { selectAuth } from ‘containers/AppContainer/selectors
  ```


## Import Export Containers and Components

### Export
To Export Components or Containers there is an `index.js` file in each root folder so you have to export it there first in order to import outside the root folder.
  ```js
  index.js/
    export { default as Comp1 } from './Comp1'
    export { default as Comp2 } from './Comp2'
  ```

### Import
To import Components or Containers doit like follow:
  - Inside the same folder (Components/Containers) <br>
    ```js
    import Comp1 from './Comp1'
    import Cont1 from './Cont1'
    ```
  - Outside the same folder (Components/Containers) <br>
    ```js
    import { Comp1 } from '../components'
    import { Cont1 } from '../containers'
    ```

## Git Hooks

We use [Husky](https://github.com/typicode/husky) to create Git Hooks. There is a pre commit hook than run prettier to ensure good code format. You can also create a prepush hook.<br>
```
// Edit package.json

{
  "scripts": {
    "precommit": "lint-staged",
    "prepush": "whatever...",
    "...": "..."
  },
  "lint-staged": {
    "{,!(build)/**/}*.js": [
      "npm run prettier -- --write",
      "git add"
    ]
  }
}
```

### Uninstall

```bash
npm uninstall husky --save-dev
```
And delete the `pre` scripts in`package.json`


## Prettier

You can add/remove rules if you want `prettier [opts] [filename ...]`. Prettier runs in a precommit hooks to ensure good code formating.
```
// Edit package.json

"scripts": {
  "prettier": "prettier --single-quote --trailing-comma es5 --no-semi",
  "format": "npm run prettier -- --write '{,!(build|generators)/**/}*.js'",
  "precommit": "lint-staged",
  "eslint-check": "eslint --print-config .eslintrc.js | eslint-config-prettier-check"
},
"lint-staged": {
  "{,!(build|generators)/**/}*.js": [
    "npm run prettier -- --write",
    "git add"
  ]
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


## Adding Sass Preprocessor

Can I use Sass with this boilerplate? yes, although we advise against it and **do not support this**. We selected
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

### Usage

Examples:

- Without Reselect
  ```js
  function mapStateToProps (state) {
    return {
      counter: state.counter
    }
  }
  ```
- With Reselect
  ```js
  import { createStructuredSelector, createSelector } from 'reselect'

  const mapStateToProps = createStructuredSelector({
    counter: createSelector(
      (state) => state.counter,
      (counterState) => counterState
    ),
  })
  ```
For further examples see the [official documentation](https://github.com/reactjs/reselect#createstructuredselectorinputselectors-selectorcreator--createselector).

### Uninstall

```bash
npm uninstall reselect --save
```
**Note**<br>
If you uninstall reselect, generating a container with a selector feature from the command line (`npm run generate`) will throw an error.


## Recompose

Because a need of `shouldComponentUpdate`, sometime you have to transform a simple, functional component to a class-based component. This adds more lines of code, and every line of code has a cost — to write, to debug, and to maintain.
Fortunately, you can implement the `shouldComponentUpdate` logic thanks to [recompose](https://github.com/acdlite/recompose). It’s a functional utility belt for React, providing for instance the `pure()` HOC.
Now instead  of export the component we can do `export default pure(componentName)` an this will be pure without transforming to a class-based component.

### Usage

Component will only update for specific keys.
```js
import onlyUpdateForKeys from ‘recompose/onlyUpdateForKeys’

const componentName = ({ resource, ids, data, children }) => (
    ...
);
export default onlyUpdateForKeys([‘ids’, ‘data’])(componentName)
```

Be more specific and target only the props that I know may change
```js
import shouldUpdate from ‘recompose/shouldUpdate’

const componentName = ({ resource, ids, data, children }) => (
    ...
);
const checkPropsChange = (props, nextProps) =>
 (nextProps.ids !== props.ids ||
  nextProps.data !== props.data);
export default shouldUpdate(checkPropsChange)(componentName)
```

Make your component pure even if is not a class based component
```js
import pure from ‘recompose/pure

const componentName = ({ resource, ids, data, children }) => (
    ...
);
export default pure(componentName)
```

### Uninstall

```bash
npm uninstall recompose --save
```
**Note**<br>
If you uninstall recompose, generating a pure component from the command line (`npm run generate`) will throw an error.


## Redux Actions

If you adopt Flux standard action (FSA) and you will, right ?, then you can also consider some libraries that are designed to work with it. [redux-actions](https://github.com/acdlite/redux-actions) is the most popular. Then just export the `createAction` function.

### Usage

```js
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes'
import { createAction } from 'redux-actions'

export const increment = createAction(INCREMENT_COUNTER)

export const decrement = createAction(DECREMENT_COUNTER)
```
More examples
```js
const inc = createAction(INCREMENT)
inc() // { type: INCREMENT }
inc(1)  // { type: INCREMENT, payload: 1 }

const addUser = createAction(ADD_USER, (name, lastName) => ({name, lastName}) )
addUser('John', 'Doe') // { type: ADD_USER, payload: { name: 'John', lastName: 'Doe' } }
addUser(new Error('no user')) // { type: ADD_USER, error: true, payload: /* error */ }
```
### Uninstall

```bash
npm uninstall redux-actions --save
```


## Create React App config

You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## License

[MIT License](https://github.com/jonidelv/generator-create-redux-app/blob/master/LICENSE)
