const cityInput = document.getElementById("cityInput");
const button = document.getElementById("button");
const cityOutput = document.getElementById("cityName");
const descOutput = document.getElementById("description");
const tempOutput = document.getElementById("temperture");
const windOutput = document.getElementById("wind");

const apiKey = "3045dd712ffe6e702e3245525ac7fa38";


function convertToCel(value) {
    return (value-273).toFixed(0);
}

async function getWeather() {
    
    var weatherResult =await (await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`))
        .json();

    setInfo(weatherResult);
}


function setInfo(data) {
    var cityName = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];

    cityOutput.innerHTML = `City name: ${cityName}`;
    descOutput.innerHTML = `description: ${description}`;
    tempOutput.innerHTML = `temperature: ${convertToCel(temp)}`;
    windOutput.innerHTML = `wind: ${wind} Km/h`;
}



button.addEventListener("click" , getWeather);
