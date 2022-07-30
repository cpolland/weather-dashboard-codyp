var searchInput = document.getElementById("city-form");

var searchBtn = document.getElementById("searchbtn");

//current city variables
var currentCity = document.getElementById("current-city");
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumd = document.getElementById("current-humd");
var currentUv = document.getElementById("current-uv");

var APIKey = "210b8c93ced365f2d43815addf6bdaba";

searchBtn.addEventListener("click", function () {
  var cityInputEl = document.getElementById("city-current").value;
  getWeather(cityInputEl);
  console.log(cityInputEl);
});

//Weather fetch variable
var getWeather = (city) => {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";
  fetch(queryURL)
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      var cityName = document.getElementById("current-city");
      cityName.textContent = posts.name;
      var currentTemp = document.getElementById("current-temp");
      currentTemp.textContent = "Temp: " + posts.main.temp + " ℉";
      var currentWind = document.getElementById("current-wind");
      currentWind.textContent = "Wind: " + posts.wind.speed + " mph";
      var currentHumidity = document.getElementById("current-humd");
      currentHumidity.textContent = "Humidity: " + posts.main.humidity;

      currentUv.textContent = getForcast(posts.coord.lat, posts.coord.lon);
    });
};

function getForcast(lat, lon) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey;
  fetch(queryURL)
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      var currentUv = document.getElementById("current-uv");
      currentUv.textContent = "UV: " + posts.current.uvi;
    });
  // Get Weather Icon
  fetch(queryURL)
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts.current.weather[0].main);
      var weatherIcon = document.getElementById("weather-icon");
      if (posts.current.weather[0].main === "Clouds") {
        weatherIcon.textContent = "⛅️";
      }
    });
}
