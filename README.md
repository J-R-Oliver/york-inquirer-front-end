# York Inquirer Front-End

![Netlify](https://github.com/J-R-Oliver/york-inquirer-front-end/workflows/Netlify/badge.svg)

<table>
<tr>
<td>
The York Inquirer is a news website, that allows an aggregation of articles, article and comment ratings, and user-discussion. Users submit articles and comments to the site which are then voted up or down by the community.
</td>
</tr>
</table>

<img src="https://i.imgur.com/FxExxVa.png" alt="York Inquirer article list view" width="450" height="644"> <img src="https://i.imgur.com/xmFILQX.png" alt="York Inquirer article view" width="450" height="644">

## Demo

**Front-End**

The hosted version of the front-end project: https://yorkinquirer.jamesoliver.dev

**Back-End**

The hosted version of the back-end project: https://the-york-inquirer.herokuapp.com/api \
The repository for the back-end project: https://github.com/J-R-Oliver/york-inquirer-back-end

## Getting Started

If you wish to contribute to the project please follow the following instructions to setup a development environment on your local machine.

### Prerequisites

To install this project you will need to have:

- [Node.js](https://nodejs.org)

Built using `Node.js v14`.

### Installation

To start, please `fork` and `clone` the repository to your local machine. First you will need to install the dependencies.

```
npm install
```

The following command sets up the development environment and starts a live development server.

```
npm start
```

## Contributing

Any and all contributions are welcome! To fix a bug or add a feature please:

- Fork the repository
- Create a new branch: `git checkout -b name-of-feature`
- Save any changes you have made
- Add your changes: `git add *`
- Commit your changes: `git commit -m 'clear and concise commit message'`
- Push your changes back to your fork: `git push origin name-of-feature`
- Create pull request

Prior to any `commit` or `push` a full test and linting run will be started. This has been automated using [Husky](https://github.com/typicode/husky).

## Bug Requests

If you find a bug, unexpected behaviour or failed query, please report by creating an issue [here](https://github.com/J-R-Oliver/york-inquirer-front-end/issues). Please include as much information as possible including request details and response details.

## Testing

Tests have been written for utility functions using [Jest](https://jestjs.io). A pre-written script has been made to initiate a test run.

```
npm test-utils
```

## Linting

This project is being linted with `eslint` and `stylelint` configured with the following rule sets:

- [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Prettier](https://github.com/prettier/eslint-config-prettier)
- [Stylelint Standard](https://github.com/stylelint/stylelint-config-standard)
- [Stylelint Idiomatic Order](https://github.com/ream88/stylelint-config-idiomatic-order)
- [Stylelint Styled Components](https://github.com/styled-components/stylelint-config-styled-components)

## Built With

- [React](https://reactjs.org) - a JavaScript library for building user interfaces.
- [Reach Router](https://reach.tech/router) - a small, simple router for React.
- [Styled Components](https://styled-components.com) - a tool for styling React components with locally scoped CSS.
- [Axios](https://github.com/axios/axios) - a promise based HTTP client for the browser and node.js.

## Developers

| [<img src="https://avatars0.githubusercontent.com/u/57285673?s=460&u=f84015efaae37809b255feece51e0516fe750767&v=4 =250x250" alt="James Oliver" width="175" height="175">](https://github.com/J-R-Oliver) |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [James Oliver](https://github.com/J-R-Oliver)                                                                                                                                                            |
