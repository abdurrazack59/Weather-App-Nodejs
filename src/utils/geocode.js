const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWJkdXJyYXphY2siLCJhIjoiY2s0MnFzZXFqMDAxcTNscXNmZ2Ric2E1ZiJ9.bSTddREIiIWCED4LM_Ws8Q&limit=1`;

  request({ url: encodeURI(url), json: true }, (error, response) => {
    if (error) {
      callback(`Unable to connect to ${error.hostname}`, undefined);
    } else if (response.body.message || response.body.features.length === 0) {
      callback(`Unable to find the match`, undefined);
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      const location = response.body.features[0].place_name;
      const data = {
        latitude,
        longitude,
        location,
      };
      callback(undefined, data);
    }
  });
};

module.exports = geocode;
