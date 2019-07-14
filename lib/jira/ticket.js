const config = require('./config');
const auth = require('./auth');
const request = require('axios');

module.exports = function (ticket) {
  return new Promise((resolve, reject) => {
    request
      .post(config.url + 'rest/api/2/issue/aaaaaaa/', { body: ticket }, config.req)
      .then(res => {
        if (res.status != 201) {
          reject(new Error(res.statusText));
        }
        resolve('Ticket created');
      })
      .catch(reject)
  });
}