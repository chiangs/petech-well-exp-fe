# Equinor, Johan Sverdrup - React Template

## Styles

Uses CSS modules to encapsulate component styles. BEM framework also implemented. Refer to index.css for global CSS variables as well as app global defaults which can be used or modified or overridden in the components.

Refer to Equinor style guide for further reference on colors, typography and pairings.

## Form Configuration

The generic form component takes in a JS configuration and utilizes custom hooks to handle changes and validation before submitting. Once valid, submit sends the form's data to the container to be handled.

The form follows best practices of form design patterns by signaling what is required or optional and providing validation error in one place as well as waiting for the user to hit submit instead of disabling the submit button.

The form configuration file should be in it's on file alongside the container file.
Here is what the form cofiguration object should look like to create a form with 2 input fields.
```js
// formNameConfig.js
export const formName = {
    inputName: {
        label: string, required,
        hint: string, optional,
        elementType: string constant from constants file, required,
        elementConfig: (required) {
            type: string constant from constants file
            hidden: boolean for password input fields, default should be true
            value: initialValue or empty string as default
        },
        validation: (optional) {
            valid: boolean, required, default should be false,
            email: boolean, optional, tied to email regex validator
            required: boolean, optional
            minLength: number, optional
            maxLength: number, optional
        }
    },
    inputName2: {
        ...same as above
    }
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
