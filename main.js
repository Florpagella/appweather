// const API_KEY = `e9c564746c9fae7f7abc234568c8f8ca
// `;

const API = {
    key: "e9c564746c9fae7f7abc234568c8f8ca",
    url: "https://api.openweathermap.org/data/2.5/weather"
} 
const card = document.getElementById("weathercard");
const city = document.getElementById("city");
const date = document.getElementById("date");
const tempImg = document.getElementById("temp-img");
const weather = document.getElementById("weather");
const range = document.getElementById("range");



async function search(query) {
    try{
        const response = await fetch(`${API.url}?q=${query}&appid=${API.key}&lang=es&units=metric`);
        const data = await response.json();
        card.style.display = "block";
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        data.date = (new Date()).toLocaleDateString();
        temp.innerHTML = data.main.temp;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${data.main.temp_min}°C / ${data.main.temp_max}°C`;
        updateImg(data);
        

    }catch(error){
        console.error(error);
        alert("Ciudad no encontrada");
    }
}

function updateImg(data) {  
    const temp = data.main.temp;
    let src = "img/tempMedia.png";
    if (temp > 26) {
        src = "img/tempAlta.png";
    } else if (temp < 20) {
        src = "img/tempBaja.png";
    }
    tempImg.src = src;
}


function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
    }



const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("searchbox");
searchform.addEventListener("submit", onSubmit, true);


