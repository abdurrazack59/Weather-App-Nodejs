const request = require("request");

const forecast = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d030a4e3880570ea43f5c2b9333ad2b3&query=${address}`;

  request({ url: encodeURI(url), json: true }, (error, response) => {
    if (error) {
      callback(`Unable to connect to ${error.hostname}`, undefined);
    } else if (response.body.error) {
      callback(response.body.error.info, undefined);
    } else {
      callback(undefined, response.body);
    }
  });
};

module.exports = forecast;
