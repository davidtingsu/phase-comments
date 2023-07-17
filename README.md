# phase-comments

Phase Frontend Test: “Comments”

Implement comment threads pinned on the canvas with React.
Requirements:
- [x] A page with canvas (can use any graphics libraries like PIXI to implement)
- [x] Display a static image on the canvas
- [Bonus] Canvas can zoom in/out and pan around
- [Bonus] Display more than one image
- [] Start a comment thread anywhere in the canvas
- [] Clicking anywhere on the image displayed in the canvas should add a new
comment marker to the canvas and open the comment dialog
- Comment markers should exist in the canvas and retain the position relative to
the displayed image (independent of the pan and zoom)
- [Bonus] If comments are placed on a particular image they should be attached to
that image, so that if the image to be moved or removed all comments placed on
it should move with it.

- Comment dialog:
- Should be implemented outside of the canvas in React.
- Should not change scale if the canvas is zoomed in or zoomed out.
- Should have a thread of comments and a field to add a new comment.
- Can be closed
- Should have a way to resolve the thread. If the thread is resolved, the
corresponding marker on the canvas should be deleted as well.
- [Bonus] have ability for multiple users to leave comments in any thread (user
authentication is not required)

- Comments:
- Should display it’s content
- Display the time it was posted at
- Display the username who wrote the comment

This implementation doesn’t need to have the backend and can rely on client side technologies
for keeping user data.
Example video for visual reference (UI doesn’t have to be replicated exactly like on the video):
https://drive.google.com/file/d/1G98D8yq4Y2eJRJHdtCi9NxjjmiVQdoGT/view

Checklist:
● Have no performance issues
● Should be able to run in Chrome, Firefox, Safari

● Readable code, comments
● Unit tests
● [Bonus] Any additional tests that you think

------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
