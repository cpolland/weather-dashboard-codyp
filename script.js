var searchInput = document.getElementById("city-form");
var searchBtn = document.getElementById("searchbtn");
var recentSearchedCities = document.getElementById("search-history");
//current city variables
var currentCity = document.getElementById("current-city");
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumd = document.getElementById("current-humd");
var currentUv = document.getElementById("current-uv");

var APIKey = "210b8c93ced365f2d43815addf6bdaba";
var searchHistory = [];

//event listener tfor searched city and saves it to local storage
searchBtn.addEventListener("click", function () {
  var cityInputEl = document.getElementById("city-current").value;
  getWeather(cityInputEl);
  searchHistory.push(cityInputEl);
  storeCity();
});

function storeCity() {
  localStorage.setItem("cities", JSON.stringify(searchHistory));
}

function renderSearchHistoy() {
  recentSearchedCities.innerHTML = "";
  for (let i = 0; i < searchHistory.length; i++) {
    var history = searchHistory[i];

    var li = document.createElement("li");
    li.textContent = history;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    li.appendChild(button);
    recentSearchedCities.appendChild(li);
  }
}

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
    APIKey +
    "&units=imperial";
  fetch(queryURL)
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      var currentUv = document.getElementById("current-uv");
      currentUv.textContent = "UV: " + posts.current.uvi;
    });
  // Get Weather Icon for current City
  fetch(queryURL)
    .then((res) => res.json())
    .then((posts) => {
      var weatherIcon = document.getElementById("weather-icon");
      if (posts.current.weather[0].main === "Clouds") {
        weatherIcon.textContent = "⛅️";
      } else if (posts.current.weather[0].main === "Clear") {
        weatherIcon.textContent = "☀️";
      } else if (posts.current.weather[0].main === "Rain") {
        weatherIcon.textContent = "🌧";
      } else if (posts.current.weather[0].main === "Thunderstorm") {
        weatherIcon.textContent = "🌩";
      }
    });

  //Get 5 day Forcast
  fetch(queryURL)
    .then((res) => res.json())
    .then((posts) => {
      //Temp
      var dayOneTemp = document.getElementById("day-one-temp");
      dayOneTemp.textContent = "Temp: " + posts.daily[1].temp.day + " ℉";
      var dayTwoTemp = document.getElementById("day-two-temp");
      dayTwoTemp.textContent = "Temp: " + posts.daily[2].temp.day + " ℉";
      var dayThreeTemp = document.getElementById("day-three-temp");
      dayThreeTemp.textContent = "Temp: " + posts.daily[3].temp.day + " ℉";
      var dayFourTemp = document.getElementById("day-four-temp");
      dayFourTemp.textContent = "Temp: " + posts.daily[4].temp.day + " ℉";
      var dayFiveTemp = document.getElementById("day-five-temp");
      dayFiveTemp.textContent = "Temp: " + posts.daily[5].temp.day + " ℉";
      //wind
      var dayOneWind = document.getElementById("day-one-wind");
      dayOneWind.textContent = "Wind: " + posts.daily[1].wind_speed + " mph";
      var dayTwoWind = document.getElementById("day-two-wind");
      dayTwoWind.textContent = "Wind: " + posts.daily[2].wind_speed + " mph";
      var dayThreeWind = document.getElementById("day-three-wind");
      dayThreeWind.textContent = "Wind: " + posts.daily[3].wind_speed + " mph";
      var dayTwoWind = document.getElementById("day-four-wind");
      dayTwoWind.textContent = "Wind: " + posts.daily[4].wind_speed + " mph";
      var dayFiveWind = document.getElementById("day-five-wind");
      dayFiveWind.textContent = "Wind: " + posts.daily[5].wind_speed + " mph";
      //Humidity
      var dayOneHumd = document.getElementById("day-one-humidity");
      dayOneHumd.textContent = "Humidity: " + posts.daily[1].humidity + " %";
      var dayTwoHumd = document.getElementById("day-two-humidity");
      dayTwoHumd.textContent = "Humidity: " + posts.daily[2].humidity + " %";
      var dayThreeHumd = document.getElementById("day-three-humidity");
      dayThreeHumd.textContent = "Humidity: " + posts.daily[3].humidity + " %";
      var dayFourHumd = document.getElementById("day-four-humidity");
      dayFourHumd.textContent = "Humidity: " + posts.daily[4].humidity + " %";
      var dayFiveHumd = document.getElementById("day-five-humidity");
      dayFiveHumd.textContent = "Humidity: " + posts.daily[5].humidity + " %";
    });
}
// Get the current date

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

//Current Date
var currentDate = document.getElementById("current-city-date");
currentDate.textContent = today;
//Next 5 Days date
var dayOne = function () {
  dd = dd++;
  if ((mm === 01, 03, 05, 07, 08, 10, 12)) {
    !dd < 31;
  }
  return dd;
};
// Renders consecutive dates in the 5 day forcasts
var tomorrow = document.getElementById("date-one");
tomorrow.textContent = mm + "/" + dayOne(dd++) + "/" + yyyy;
var secondDay = document.getElementById("date-two");
secondDay.textContent = mm + "/" + dayOne(dd++) + "/" + yyyy;
var thirdDay = document.getElementById("date-three");
thirdDay.textContent = mm + "/" + dayOne(dd++) + "/" + yyyy;
var fourthDay = document.getElementById("date-four");
fourthDay.textContent = mm + "/" + dayOne(dd++) + "/" + yyyy;
var fifthDay = document.getElementById("date-five");
fifthDay.textContent = mm + "/" + dayOne(dd++) + "/" + yyyy;
