//NOW
const nowCity = document.getElementsByClassName('now_city');
const nowTemperature = document.getElementsByClassName('now_temperature');
const nowWeather = document.getElementsByClassName('now_weather_icon');

const newCity = document.querySelector('input');
const checkCity = document.querySelector('button');
const addCityToLocation = document.getElementById('add_city');
const isCurrentCity = document.getElementsByClassName('now_city');
const isAddedLocationsList = document.getElementById('location_list');
let isCitiesFromAddedLocations = document.getElementsByClassName('city_added_location_container');
let deleteCity = document.getElementsByClassName('delete_added_locations_item');

//FORECAST
const isForecastCity = document.getElementById('forecast_city')
const isForecastDate = document.getElementsByClassName('forecast_date');
const isForecastTime = document.getElementsByClassName('forecast_time');
const isForecastTemperature = document.getElementsByClassName('forecast_temperature');
const isForecastWeather = document.getElementsByClassName('forecast_weather');
const isForecastFeelsLike = document.getElementsByClassName('forecast_feels_like');
const isForecastIcon = document.getElementsByClassName('forecast_icon');

addCityToLocation.addEventListener('click', addCity);
checkCity.addEventListener('click',() => showCity(newCity.value));
// const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const serverUrl = 'https://api.openweathermap.org/data/2.5/forecast';
// const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const apiKey = '1041b355b3b6422eb66d9f5e517f7b52';

function changeCityTab(evt, cityName) {
    let i;
    let tabContent;
    let tabLinks;
    tabContent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab_links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}

function showCity(city) {
    const url = `${serverUrl}?q=${city}&appid=${apiKey}&cnt=6`;
    const response = fetch(url);
    const promise = response.then((response) => response.json());
    promise.then((result) => changeNowCity(result.city.name));
    promise.then((result) => changeNowTemperature(result.list[0].main.temp));
    promise.then((result) => changeNowWeatherIcon(result.list[0].weather[0].icon));
    // ADD Details
    promise.then((result) => updateDetailsCurrentCity(result.city.name));
    promise.then((result) => updateDetailsCurrentTemperature(result.list[0].main.temp));
    promise.then((result) => updateDetailsCurrentFeelsLike(result.list[0].main.feels_like));
    promise.then((result) => updateDetailsCurrentWeather(result.list[0].weather[0].description));
    promise.then((result) => updateDetailsCurrentSunrise(result.city.sunrise))
    promise.then((result) => updateDetailsCurrentSunset(result.city.sunset));
    // ADD Forecast
    promise.then((result) => updateForecastCity(result.city.name));
    promise.then((result) => updateForecastDateAndTime(result.list[0].dt));
    promise.then((result) => updateForecastTemperature(result.list[0].main.temp));
    promise.then((result) => updateForecastFeelsLike(result.list[0].main.feels_like));
    promise.then((result) => updateForecastWeatherMain(result.list[0].weather[0].main));
    promise.then((result) => updateForecastWeatherIcon(result.list[0].weather[0].icon));
    newCity.value = '';
    event.preventDefault();
}

//NOW
function changeNowCity (city) {
    nowCity[0].textContent = city;
}

function changeNowTemperature (temp) {
    nowTemperature[0].innerHTML = `${Math.round(temp-273.15)}<span>&deg</span>`;
}

function changeNowWeatherIcon (icon) {
    nowWeather[0].innerHTML = `<img style="width: 150px;" src="./icon_img/${icon}.png">`;
}

// DETAILS
function updateDetailsCurrentCity(item) {
    const detailsCurrentCity = document.querySelector('.details_current_city')
    detailsCurrentCity.textContent = item;
}

function updateDetailsCurrentTemperature(item) {
    const currentTemperature = document.querySelector('.current_temperature');
    item = Math.round(item - 273.15);
    currentTemperature.innerHTML = item;
}

function updateDetailsCurrentFeelsLike(item) {
    const currentFeelsLike = document.querySelector('.current_feels_like');
    item = Math.round(item - 273.15);
    currentFeelsLike.textContent = item;
}

function updateDetailsCurrentWeather(item) {
    const currentWeather = document.querySelector('.current_weather');
    item = item[0].toUpperCase() + item.slice(1);
    currentWeather.textContent = item;
}

function updateDetailsCurrentSunrise(item) {
    const currentSunrise = document.querySelector('.current_sunrise');
    const sunrise = new Date (item*1000);
    let hours = sunrise.getHours();
    if (hours < 10) {
        hours = '0' + String(hours);
    }
    let minutes = sunrise.getMinutes();
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    currentSunrise.textContent = ` ${hours}:${minutes}`;
}

function updateDetailsCurrentSunset(item) {
    const currentSunset = document.querySelector('.current_sunset');
    const sunset = new Date (item*1000);
    let hours = sunset.getHours();
    if (hours < 10) {
        hours = '0' + String(hours);
    }
    let minutes = sunset.getMinutes();
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    currentSunset.textContent = ` ${hours}:${minutes}`;
}

//FORECAST
function updateForecastCity(city) {
    isForecastCity.textContent = city;
}

function updateForecastDateAndTime(date) {
    const isDate = new Date (date*1000);
    const TIME = isDate.toUTCString().substr(-12,5); // время
    const DAY = isDate.toUTCString().substr(-24,6); // день
    isForecastTime[0].textContent = TIME;
    isForecastDate[0].textContent = DAY;
}

function updateForecastTemperature(temp) {
    isForecastTemperature[0].innerHTML = `Temperature: ${Math.round(temp-273.15)}<span>&deg</span>`;
}

function updateForecastFeelsLike(feelsLike) {
    isForecastFeelsLike[0].innerHTML = `Feels like: ${Math.round(feelsLike-273.15)}<span>&deg</span>`;
}

function updateForecastWeatherMain (main) {
    isForecastWeather[0].textContent = main;
}

function updateForecastWeatherIcon(icon) {
    isForecastIcon[0].innerHTML = `<img style="width: 40px;" src="./icon_img/${icon}.png">`;
}

//RENDER
function addCity () {
    isAddedLocationsList.insertAdjacentHTML('afterbegin',
        `<li class="added_location_container_item">
            <div class="city_added_location_container">${isCurrentCity[0].textContent}</div>
            <div class="delete_added_locations_item">&#10007</div>
        </li>`);
    isCitiesFromAddedLocations = document.getElementsByClassName('city_added_location_container');
    for (let city of isCitiesFromAddedLocations) {
        city.addEventListener('click', () => seeCity(city.textContent));
    }
    deleteCity = document.getElementsByClassName('delete_added_locations_item');
    for (let city of deleteCity) {
        city.addEventListener('click', () => showDelete(city));
    }
}

function seeCity(city){
    nowCity[0].textContent = city;
    showCity(city);
}

function showDelete(item) {
    item.parentElement.remove();
}
