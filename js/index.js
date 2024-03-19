//City
function seachCity(event) {
  event.preventDefault();
  let searcher = document.querySelector("#city");

  var city = searcher.value;
  let apiKey = "7145tacf48aad88be65c0b31aoec2f85";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  document.querySelector("#new-city").innerHTML = `${searcher.value}`;

  //let h1 = document.querySelector("h1");
  //h1.innerHTML = `${city.value}`;

  axios.get(apiUrl).then(displayTemperature);
}

let cityImput = document.querySelector("#city-form");
cityImput.addEventListener("submit", seachCity);

//Date
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

//API
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
