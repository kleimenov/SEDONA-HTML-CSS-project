
/*-------*/

const notificationElement = document.querySelector('.notification');
const iconElement = document.querySelector('.weather-icon');
const tempElement =document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');

//to display the weather
function displayWeather() {
    iconElement.innerHTML = `<img class="weather-pic" src="assets/${weather.iconId}.png"/>`;

    tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;

    descElement.innerHTML = weather.description; 


    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

}

function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}

function fahrenheitToCelsius(temperature) {
    return 9/5 * (temperature - 32);
}

tempElement.addEventListener('click', function() {

    if(weather.temperature.value==="undefined") {return};

    if(weather.temperature.unit === 'celsius') {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}° <span>F</span>`;

        weather.temperature.unit ="fahrenheit";
    }
    else {
        /*
        let celsius = fahrenheitToCelsius(weather.temperature.value);
        celsius = Math.floor(celsius);
        */
       tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;
        
       weather.temperature.unit ="celsius";
    }
}

)


getWeather()
const weather ={};
weather.temperature = {
    unit: "celsius"
}

// app consts and var
const KELVIN = 273;

//API key
const key = 'password';


function getWeather() {
    // let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${key}`;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=Sedona&appid=password`;

    fetch(api).then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value=Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    });
}