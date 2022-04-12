//search box variables
var searchInput = document.getElementById('#city-form');
var cityInputEl = document.getElementById('#city')
var testCity = "Denver"


//current city variables
var currentCity = document.getElementById('current-city');
var currentTemp = document.getElementById('current-temp');
var currentWind = document.getElementById('current-wind');
var currentHumd = document.getElementById('current-humd');
var currentUv = document.getElementById('current-uv')

var city;
var APIKey = "210b8c93ced365f2d43815addf6bdaba";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + testCity + "&appid=" + APIKey;

//Weather fetch variable 
var getWeather = () =>{
return fetch(queryURL)
    .then(res => res.json())
    .then(posts => console.log(posts))
}

var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;






//add event listners to log the inputs
searchInput.addEventListener('input', event => {
    event.preventDefault
    var cityTerm = event.target.value;

    if (cityTerm === '') {
        alert("Please type a city")
    } else {
        console.log(cityTerm);
    }
})



//I need to log local city input and display it to the current city section
//Asign the local city conditions to elements 
//I need to aquire 5 day forcast and it conditions 
//I need to log all previous searched cities