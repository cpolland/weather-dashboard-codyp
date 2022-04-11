//search box variables
var searchInput = document.getElementById('text');
var searchBtn = document.getElementById('search-btn');

//current city variables
var currentCity = document.getElementById('current-city');
var currentTemp = document.getElementById('current-temp');
var currentWind = document.getElementById('current-wind');
var currentHumd = document.getElementById('current-humd');
var currentUv = document.getElementById('current-uv')

var city;
var APIKey = "210b8c93ced365f2d43815addf6bdaba";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + APIKey;

//search bar input
searchInput.addEventListener('input', event => {
    var cityTerm = event.target.value;
    
    
    
    
})


searchBtn.addEventListener("click",function(){
    
})


//fetch(queryURL)
   // .then(respone => respone.json())
  //  .then(data => console.log(data))