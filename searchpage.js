const appKey = "f24f40b1c24505685fce3b8acd0fcffc";
var lat1,long1;

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("id3");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let pressure =document.getElementById("pressure-div");
let maxtemp =document.getElementById("maxtemp-div");
let mintemp =document.getElementById("mintemp-div");
let aqi=document.getElementById("aqi");

searchButton.addEventListener("click", findDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findDetails();
  }
}

function findDetails() {
  if (searchInput === "") {
      
      alert("Enter the city Name")
      
  }
    
    else {
        
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
    httpRequestAsync(searchLink, theResponse);
        
       
  }
 }

function theResponse(response) {
   let jsonObject = JSON.parse(response);
    console.log(jsonObject.coord.lat);
    console.log(jsonObject.coord.lon);
  lat1 = jsonObject.coord.lat;
long1 = jsonObject.coord.lon;
    let searchLink1 = "https://api.airvisual.com/v2/nearest_city?lat="+lat1+"&lon="+long1+"&key=CoAfZ2PMfP3Y6pJLs";
        
   httpRequestAsync(searchLink1, theResponse1); 
  
}

function theResponse1(response) {
   let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.data.city;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.data.current.weather.ic + ".png";
  pollution.innerHTML="PM 2.5 AQI:"+jsonObject.data.current.pollution.aqicn;
    var index=jsonObject.data.current.pollution.aqicn;
    checkIndex(index);
  temperature.innerHTML ="Temperature: "+jsonObject.data.current.weather.tp +" C";
  humidity.innerHTML = "Humidity: "+jsonObject.data.current.weather.hu + "%";
  pressure.innerHTML="Pressure: "+jsonObject.data.current.weather.pr+"mm of Hg";
  wspeed.innerHTML="Wind Speed: "+jsonObject.data.current.weather.ws+ " Km/hrs";
  
}

function checkIndex(index)
{
    
    if(index>0 && index<=50){
        aqi.innerHTML="Low";
        document.getElementById("aqi").style.color="limegreen";
    }
    else if(index>50 && index<=100){
        aqi.innerHTML="Moderate";
        document.getElementById("aqi").style.color="yellow";
    }
    else if(index>100 && index<=150){
        aqi.innerHTML="Unhealthy for sensitive people";
        document.getElementById("aqi").style.color="orange";
    }
    else if(index>150 && index<=200){
        aqi.innerHTML="Unhealthy";
        document.getElementById("aqi").style.color="orangered";
    }
    else if(index>200 && index<=300){
        aqi.innerHTML="Very Unhealthy";
        document.getElementById("aqi").style.color="darkred"
    }
    else if(index>300){
        aqi.innerHTML="Hazardous";
        document.getElementById("aqi").style.color="red";
    }
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
        
        }
    
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}
