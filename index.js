

let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let searchButton = document.getElementById("butn1");
let searchInput = document.getElementById("id3");
let pollution = document.getElementById("pollution");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let pressure =document.getElementById("pressure-div");
let wspeed =document.getElementById("wspeed");
let aqi=document.getElementById("aqi");

        
   let searchLink = "https://api.airvisual.com/v2/nearest_city?key=CoAfZ2PMfP3Y6pJLs";
        
   httpRequestAsync(searchLink, theResponse);
  


 

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  
  cityName.innerHTML = jsonObject.data.city;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.data.current.weather.ic + ".png";
  pollution.innerHTML=jsonObject.data.current.pollution.aqicn;
    var index=jsonObject.data.current.pollution.aqicn;
   checkIndex(index);
  temperature.innerHTML ="Temperature: "+jsonObject.data.current.weather.tp +" C\n";
  humidity.innerHTML = "Humidity: "+jsonObject.data.current.weather.hu + "%\n";
  pressure.innerHTML="Pressure: "+jsonObject.data.current.weather.pr+" mm of Hg";
  wspeed.innerHTML="Wind Speed: "+jsonObject.data.current.weather.ws+ " Km/hr\n";
  
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
