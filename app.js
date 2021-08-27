var inputArea = document.getElementById('InputArea');
var showName = document.querySelector('.showName');
var showTemp = document.querySelector('.showTemp');
var showWeather = document.querySelector('.showWeather');


var btn = document.querySelector('.btn');

const apikey = "0245372323dd8b5e0e6fe23234e23ac5";
const units = "metric";

btn.addEventListener('click' ,function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputArea.value +"&appid="+ apikey +"&units="+ units)
    .then(response => response.json()).then(data => {
        const nameVal = data.name;
        const tempVal = data.main.temp;
        const weatherval = data.weather[0].description;
        const icon = data.weather[0].icon;

        const imgURL = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";

        showName.innerHTML = "Temprature of " + nameVal + " is " + "<span>"+ tempVal + "<sup>o</sup>C" + "</span>";
        showWeather.innerHTML = "Weather of " + nameVal + " is " + "<span>"+ weatherval+"</span>";
        document.querySelector('#showImg').src = imgURL;
        document.querySelector('.showArea').style.backgroundColor = "salmon";
        
    })
    .catch(err => alert("City Not Found"));
})