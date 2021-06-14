# Portfolio

Hello, this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)(CRA). I refurbished the innerworkings of the CRA into a modularized folder structure. Each directory contains files that are directly related to that directory. Furthermore, if we look at src/containers/Home you will see an index.js file. This is a common structure throughout my react apps. I do this to package the components used in that directory. For example, the Home component will be imported into the HomeContainer which will then be imported into index.js. This creates a unilateral data flow that is easy to follow as well as observe the advantages React provides in browser data managament (state).

## Start Your Engines... or Yarns?

### `yarn install && yarn start`

This command will do two things. Firstly, it will install yarn, a package manager than can be read about [here](https://yarnpkg.com/). Secondly, it runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console or the terminal of your code editor platform.

## Firebase

### Hosting
I used the [Firebase](https://firebase.google.com/docs/hosting/) CLI to host my project. The webpage can be found [here](https://n1ch0las.web.app/#/).

## User Interface

### Material-UI
[Material-UI](https://material-ui.com/) was used for all of the styling components.
[Grid](https://material-ui.com/components/grid/) component was used heavily for the project cards.