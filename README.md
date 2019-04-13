# Zacks.com API

The API returns the Zacks rank (from 1 = strong buy, to 5 = strong sell)
of any given company by providing the ticker of the company
(e.g. `TSLA` for Tesla).

See here for more information on the Zacks rank: [www.zacks.com/education](https://www.zacks.com/education/stock-education)

# Example Response for Tesla

```json
{
  "ticker": "TSLA",
  "name": "Tesla, Inc.",
  "zacksRankText": "Strong Sell",
  "zacksRank": "5",
  "updatedAt": "2019-04-12T05:58:00.000Z"
}
```

# Setup

You can use the API in the command line, or develop your own application
using the API as imported package. How to set up either option is explained
below.

## Prerequisite

- Install Node.js if you haven't already. On Mac in the command line type `brew install node`. More information here: [nodejs.org](https://nodejs.org/en)

## 1. Option: Command Line

To use the Zacks API via the command line, type in your command line

- `npm install zacks-api --global` to install the package to access the API
- `zacks-api TSLA` to get the Zacks rank of Tesla (ticker: TSLA)
- Done! Now you should see the Zacks rank of Tesla.

## 2. Option: Develop your own application

To set up a new Node.js project, type in the command line

- `mkdir my-new-project && cd my-new-project` to create a new folder
- `npm init` to scaffold the Node.js project
- `touch index.js` to create the file `index.js`
- `npm install zacks-api` to install the library to access the API
- Copy/paste the example code below inside the `index.js` file

```js
const api = require('zacks-api');
api.getData('TSLA').then(console.log);
```

- `node index.js` to run the code inside the `index.js` file
- Done! Now you should see the Zacks rank of Tesla.
