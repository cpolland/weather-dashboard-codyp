//search box variables
var searchInput = document.getElementById('city-form');


var searchBtn = document.getElementById("searchbtn")

//current city variables
var currentCity = document.getElementById('current-city');
var currentTemp = document.getElementById('current-temp');
var currentWind = document.getElementById('current-wind');
var currentHumd = document.getElementById('current-humd');
var currentUv = document.getElementById('current-uv')

var APIKey = "210b8c93ced365f2d43815addf6bdaba";

searchBtn.addEventListener('click',function(){
    var cityInputEl = document.getElementById('city-current').value
    getWeather(cityInputEl)
    console.log(cityInputEl)
})

//Weather fetch variable 
var getWeather = (city) =>{
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";    
fetch(queryURL)
    .then(res => res.json())
    .then(posts => { 
        console.log(posts)
        var cityName = document.getElementById("current-city")
        cityName.textContent = posts.name
        var currentTemp = document.getElementById('current-temp')
        currentTemp.textContent = posts.main.temp
        getForcast(posts.coord.lat, posts.coord.lon)
        
    })
}
//I need to log local city input and display it to the current city section
//Asign the local city conditions to elements 
//I need to aquire 5 day forcast and it conditions 
//I need to log all previous searched cities

function getForcast(lat, lon){
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
    fetch(queryURL)
    .then(res => res.json())
    .then(posts => { 
        console.log(posts)
        var cityName = document.getElementById("current-city")
        
    })
}