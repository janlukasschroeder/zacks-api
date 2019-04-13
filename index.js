#!/usr/bin/env node

const h = require('./helpers');
const config = require('./config');

const format = symbol => data => {
  const tmp = data[symbol];
  return {
    ticker: tmp.ticker,
    name: tmp.name,
    zacksRankText: tmp.zacks_rank_text,
    zacksRank: tmp.zacks_rank,
    updatedAt: new Date(tmp.updated).toISOString()
  };
};

const print = data => console.log(JSON.stringify(data, null, 2));

const handleError = e => {
  console.log(e);
};

/**
 * getZacksData
 * @param symbol
 * @returns {Promise}
 */
module.exports.getData = symbol => {
  const _symbol = symbol.toUpperCase();
  const query = config.zacks.baseUrl + `index?t=${_symbol}`;
  return h
    .fetch(query)
    .then(format(_symbol))
    .catch(handleError);
};

/**
 * Run as command line tool
 */
if (require.main === module) {
  const symbol = process.argv[2];

  if (!symbol) {
    console.info(
      '\nTicker symbol missing. Attach the ticker symbol at the end.\n\nExample: zacks-api TSLA\n'
    );
    return;
  }

  this.getData(symbol)
    .then(print)
    .catch(handleError);
}
