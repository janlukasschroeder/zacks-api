const https = require('https');

/**
 * HTTPS GET API
 * resolve returns JSON-parsed response
 *
 * @param query
 * @returns {Promise}
 */
module.exports.fetch = (query) => {

  return new Promise((resolve, reject) => {

    https.get(query, (resp) => {
      let data = '';

      resp.on('data', (chunk) => data += chunk);

      resp.on('end', () => {
        try {
          resolve(JSON.parse(data));
        }
        catch (err) {
          reject(err);
        }
      });
    }).on('error', (err) => reject(err));
  });
};