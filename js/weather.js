const API_KEY = "5287968adace99aa40cba5ee0d91cfc5"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")

        city.innerHTML = ` / ${data.name}`;
        weather.innerHTML = `${data.main.temp}°C, ${data.weather[0].main}`
    })
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)