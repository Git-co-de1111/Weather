//https://wttr.in/chhattisgarh?format=%C+%t+%w+%h

// low 1 to 16, medium 17 to 25, heigh 36 to 40

const searchBox = document.querySelector("#searchBox");
const searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", () => {
    let userInput = searchBox.value.trim();
    stateOrCountry.innerText = userInput;
    weather(userInput);
});


var temperature;
var windSpeed;
var humidity;

const stateOrCountry = document.querySelector("#inputName");

async function weather(userInput) {
    const URL = `https://wttr.in/${encodeURIComponent(userInput)}?format=%C+%t+%w+%h`;
    let response = await fetch(URL);
    let data = await response.text();
    let parts = data.split(" ");
        condition = parts[0];
        temperature = parts[1];
        windSpeed = parts[2];
        humidity = parts[3];
   var temperatureDisplay = document.querySelector("#temperature");
   temperatureDisplay.innerText = temperature.slice(1);
   var wind = document.querySelector("#windSpeed");
   wind.innerText = windSpeed.slice(1);
   var humidityDisplay = document.querySelector("#humidity");
   humidityDisplay.innerText = humidity;
};
