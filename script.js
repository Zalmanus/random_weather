// DOM Elements
const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather-btn');
const cityNameElement = document.getElementById('city-name');
const dateElement = document.getElementById('date');
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const conditionsElement = document.getElementById('conditions');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const precipitationElement = document.getElementById('precipitation');
const feelsLikeElement = document.getElementById('feels-like');
const bodyElement = document.body;

// Weather conditions and icons
const weatherConditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Stormy', 'Snowy', 'Foggy', 'Windy'];
const weatherIcons = ['fa-sun', 'fa-cloud-sun', 'fa-cloud', 'fa-cloud-rain', 'fa-poo-storm', 'fa-snowflake', 'fa-smog', 'fa-wind'];
const weatherClasses = ['sunny', 'sunny', 'cloudy', 'rainy', 'stormy', 'snowy', 'cloudy', 'cloudy'];

// Weather background gradients
const weatherBackgrounds = [
    'linear-gradient(135deg, #ff9d00, #ffcc00, #ff9d00)',
    'linear-gradient(135deg, #6dd5ed, #2193b0, #6dd5ed)',
    'linear-gradient(135deg, #636fa4, #636fa4, #a5b1c2)',
    'linear-gradient(135deg, #000046, #1cb5e0, #000046)',
    'linear-gradient(135deg, #141e30, #243b55, #141e30)',
    'linear-gradient(135deg, #8e9eab, #eef2f3, #8e9eab)',
    'linear-gradient(135deg, #c9d6ff, #e2e2e2, #c9d6ff)',
    'linear-gradient(135deg, #74ebd5, #acb6e5, #74ebd5)'
];

// Update weather display
function updateWeather(city) {
    // Generate random weather data
    const randIndex = Math.floor(Math.random() * weatherConditions.length);
    const temperature = Math.floor(Math.random() * 56) - 15;
    const humidity = Math.floor(Math.random() * 86) + 10;
    const wind = Math.floor(Math.random() * 51);
    const precipitation = Math.floor(Math.random() * 101);
    
    // Calculate feels like temperature
    let feelsLike = temperature;
    if (humidity > 70) feelsLike += 2;
    if (wind > 15) feelsLike -= 2;
    if (randIndex === 0) feelsLike += 2;
    if (randIndex === 5) feelsLike -= 3;
    
    // Update DOM elements
    cityNameElement.textContent = city;
    temperatureElement.textContent = `${temperature}°C`;
    conditionsElement.textContent = weatherConditions[randIndex];
    humidityElement.textContent = `${humidity}%`;
    windElement.textContent = `${wind} km/h`;
    precipitationElement.textContent = `${precipitation}%`;
    feelsLikeElement.textContent = `${feelsLike}°C`;
    
    // Update weather icon
    weatherIconElement.className = `fas ${weatherIcons[randIndex]} ${weatherClasses[randIndex]}`;
    
    // Update background
    bodyElement.style.background = weatherBackgrounds[randIndex];
    
    // Update date
    const now = new Date();
    dateElement.textContent = now.toLocaleDateString('en-US', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });
}

// Event listeners
getWeatherBtn.addEventListener('click', () => {
    updateWeather(cityInput.value.trim() || 'Where-Are-Yurk');
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') updateWeather(cityInput.value.trim() || 'Where-Are-Yurk');
});

// Initialize
updateWeather('Where-Are-Yurk');