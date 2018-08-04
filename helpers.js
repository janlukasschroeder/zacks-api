const moment = require('moment');
const numberToWord = require('number-to-words');
const https = require('https');
const csv = require("csvtojson");


/**
 *
 * @param t0Value
 * @param t1Value
 * @returns {number}
 */
module.exports.getGrowthPercentage = (t0Value, t1Value) => {
  const result = (t1Value - t0Value) / t0Value * 100;
  const intResult = parseInt(result);
  return intResult;
};

module.exports.getMonthDelta = (t0Date, t1Date) => {
  return Math.ceil(moment(t1Date).diff(moment(t0Date), 'months', true));
};

/**
 *
 * @param word
 * @returns {*}
 */
exports.toWord = (word) => {
  return numberToWord.toWords(word);
};

/**
 * HTTPS GET API
 * resolve returns JSON-parsed response
 *
 * @param query
 * @returns {Promise}
 */
exports.fetch = (query) => {

  return new Promise((resolve, reject) => {

    https.get(query, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        try {
          if (resp.headers['content-type'] === 'text/csv;charset=UTF-8') {
            csv({
              noheader:false
              // output: "csv"
            })
              .fromString(data)
              .then((csvRow)=>{
                // console.log(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
                resolve(transformData(csvRow));
              })
          } else {
            resolve(JSON.parse(data));
          }
        }
        catch (err) {
          console.log(query);
          console.log(data);
          reject(err);
        }
      });

    }).on('error', (err) => {
      console.log('Error: ' + err.message);
      reject(err);
    });

  });
};

function transformData(data) {

  const out = {
    type: Object.keys(data[0])[0],
    statement: []
  };

  Object.keys(data[0]).forEach((key, i) => {
    if (i > 0) {
      const row = {
        reportDate: data[0][key]
      };

      out.statement.push(row);
    }
  });

  return out;
}