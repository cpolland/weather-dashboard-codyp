//search box variables
var searchTextBox = document.getElementById('weather-search');
var searchBtn = document.getElementById('search-btn');

//current city variables
var currentCity = document.getElementById('current-city');
var currentTemp = document.getElementById('current-temp');
var currentWind = document.getElementById('current-wind');
var currentHumd = document.getElementById('current-humd');
var currentUv = document.getElementById('current-uv');




//weater API key
var APIKey = "210b8c93ced365f2d43815addf6bdaba";
var city;


function pullWeather(searchTextBox) {
    //weather request
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
}