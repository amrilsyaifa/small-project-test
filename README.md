# Small Project App

Thanks for taking the time to contribute !

## Setup

- Clone this project
- Create .env.local

```shell
REACT_APP_API_ENDPOINT=https://jsonplaceholder.typicode.com
```

- Install the dependencies

```shell
yarn
yarn start
```

## Description

This Project using pre-commit [Husky](https://typicode.github.io/husky/#/), [Eslint](https://eslint.org/docs/user-guide/getting-started), [Prettier](https://prettier.io/)

Don't forget to setup your IDE with `eslint` and `prettier`.

## Project structure

- **Src** this is a root folder, have file root configuration.
- **Contexts** contains global contexts (separated from the redux store)
- **Hooks** contains generic hooks.
- **Layouts** contains building setup layout this application.
- **Libraries** contains the custom library from third party.
- **Pages** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **Reusables** contains generic components used inside the application.
- **Routers** contains all the config routing.
- **Store** contains config redux.

## Tests

Run tests with `yarn test`.

## Check Lint Format

Run tests with `yarn lint`.

## Check Formater Prettier

Run tests with `yarn format`.
