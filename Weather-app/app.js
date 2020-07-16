const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=a0db3adca91aa5265c1b342dc13fc210&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
