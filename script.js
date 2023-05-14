 const apiKey= "5e9ce514486a3060ffefd151585da2af";
 const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const searchBox= document.querySelector('.search input');
 const searchButton= document.querySelector('.search button');
 const weatherIcon= document.querySelector('.weather-icon');

 async function checkWeather(city){
    const response= await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data= await response.json();

    if(response.status == 404 || searchBox.value== "")
    {
        document.querySelector('.city').innerHTML= 'Location Not Found';
        document.querySelector('.temp').innerHTML=  "-°c";
        document.querySelector('.humidity').innerHTML= "-%";
        document.querySelector('.wind').innerHTML= "-km/h";
        weatherIcon.src= 'images/404.png';
    }
    else
    {
    
        document.querySelector('.city').innerHTML= data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML= data.main.humidity +"%";
        document.querySelector('.wind').innerHTML= data.wind.speed+ "km/h";
    
        icon= data.weather[0].main;
        weatherIcon.src= ["images/" , icon.toLowerCase(), ".png"].join('');
    }  
    document.querySelector('.weather').style.display= 'block';
    searchBox.value= "";

 }

 searchButton.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
 });
