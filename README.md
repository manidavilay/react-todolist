# React simple todo list

This project is a simple todo list made in React and Typescript where you can add different tasks, with a description, and a deadline

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## To add sass to our project

### `npm i -D node-sass`
### `npm i -D @types/node-sass`

Next we create our .scss files in each of our component (one scss file for each component).
Then we import our .scss file in our .tsx file.

### `npm i -D npm-run-all`

Lastly we create the following npm run scripts

```
"scripts": {
    "build:css": "node-sass src/ -o src/ ",
    "watch:css": "npm run build:css && node-sass src/ -o src/ -w -r",
    "start:js": "react-scripts-ts start",
    "start": "npm-run-all -p watch:css start:js",
    "build:js": "react-scripts-ts build",
    "build": "npm-run-all build:*",
    "test": "react-scripts-ts test --env=jsdom",
    "eject": "react-scripts-ts eject",
  },
```