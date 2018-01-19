const request = require('request');

var getWeather = (lat, lng, callback) => {
  request ({
    url: `https://api.darksky.net/forecast/376db6a396613eed9b0dea40b561441b/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch Weather');
    }

  });
};



module.exports.getWeather = getWeather;
