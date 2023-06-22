
const access_key = "71e0cd78e417492b893104444232106"
let query = ""
const url = "http://api.weatherapi.com/v1/current.json"


let weatherAPI = {}

const vejr = document.querySelector("#vejr");




var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#knap');

var city1 = document.querySelector('#cityoutput1')
var descrip1 = document.querySelector('#description1')
var temp1 = document.querySelector('#temp1')
var wind1 = document.querySelector('#wind1')
var status_info1 = document.querySelector('#status1')
var status_img1 = document.querySelector('#img1');
var city2 = document.querySelector('#cityoutput2')
var descrip2 = document.querySelector('#description2')
var temp2 = document.querySelector('#temp2')
var wind2 = document.querySelector('#wind2')
var status_info2 = document.querySelector('#status2')
var status_img2 = document.querySelector('#img2');


btn.addEventListener('click', getWeather)


const successCallback = (position) => {
  userWeather(position)
  
};

const errorCallback = (error) => {
  console.log(error);
};

let loc = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


async function userWeather(position) {

  let lat = position.coords.latitude
  let long = position.coords.longitude
  
  query = lat + "," + long
  const response = await fetch(url + "?key=" + access_key + "&q=" + query);
  const json = await response.json();
  weatherAPI = json;
  city2.innerHTML = weatherAPI.location.country + ": " +  weatherAPI.location.name
  temp2.innerHTML ="Temperatur: " + weatherAPI.current.temp_c + " Celcius"
  wind2.innerHTML = "Vind: " +  weatherAPI.current.wind_kph + " km/t"
  description2.innerHTML = weatherAPI.location.localtime
  status_info2.innerHTML = weatherAPI.current.condition.text 
  status_img2.setAttribute('src', weatherAPI.current.condition.icon)

}


async function getWeather() {
  query = inputval.value
  const response = await fetch(url + "?key=" + access_key + "&q=" + query);
  const json = await response.json();
  weatherAPI = json;
  
  city1.innerHTML = weatherAPI.location.country + ": " +  weatherAPI.location.name
  temp1.innerHTML ="Temperatur: " + weatherAPI.current.temp_c + " Celcius"
  wind1.innerHTML ="Vind: " +  weatherAPI.current.wind_kph + " km/t"
  description1.innerHTML = weatherAPI.location.localtime
  status_info1.innerHTML = weatherAPI.current.condition.text 
  status_img1.setAttribute('src', weatherAPI.current.condition.icon)
  
  
}






/* ---------------------------------- SERVER ----------------------------------- */
/* var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(weatherAPI);

  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

 */