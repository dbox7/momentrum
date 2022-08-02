const KEY_COORDS = 'Coords';
const API_KEY = '0f2521086fa210a70b351c88a79620d0';
const weatherContainer = document.querySelector('.js-weather');

function saveCoords(posObj) {
    localStorage.setItem(KEY_COORDS, JSON.stringify(posObj));
}

function showWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(responce){
            return responce.json();
        })
        .then(function(json) {
            const temp = new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 2 }).format(json.main.temp);
            const location = json.name;
            weatherContainer.innerText = `${temp}°C\n${location}`;
        });
    
}

function geoGoodHandler(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const positionObj = {
        latitude,
        longitude
    }
    saveCoords(positionObj);
    showWeather(latitude, longitude);
}

function geoBadHandler() {
    console.log('Ошибка определения геопозиции');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(geoGoodHandler, geoBadHandler);
}

function getCoords() {
    const coords = localStorage.getItem(KEY_COORDS);
    const loadedCoords = JSON.parse(coords);
    coords? showWeather(loadedCoords.latitude, loadedCoords.longitude) : askForCoords();
}

function init() {
    getCoords();
}

init();