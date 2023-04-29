const API_KEY = "a30d6735794ee9d93b05b4a8ec8fb26f";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const ctiy = document.querySelector("#weather span:last-child");
      ctiy.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}c `;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
