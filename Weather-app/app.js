const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=a0db3adca91aa5265c1b342dc13fc210&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  //   console.log(response.body.current);
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees out.  It feels like " +
      response.body.current.feelslike +
      " degrees out."
  );
});

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam1oaWx0b24iLCJhIjoiY2tjdGZhNHpjMXkyYzJ5bW91dWg4aW5kaSJ9.LMkqpNEbSrP68S5zXYDFaw&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
