
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '80723d9211msh4781c404ac4519dp14e3d8jsn414c6f579a62',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        deltemp.innerHTML = response.temp
        delfeels_like.innerHTML = response.feels_like
        delhumidity.innerHTML = response.humidity
        delwind_speed.innerHTML = response.wind_speed
        delwind_degrees.innerHTML = response.wind_degrees
        delsunrise.innerHTML = response.sunrise
        delsunset.innerHTML = response.sunset
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        newtemp.innerHTML = response.temp
        newfeels_like.innerHTML = response.feels_like
        newhumidity.innerHTML = response.humidity
        newwind_speed.innerHTML = response.wind_speed
        newwind_degrees.innerHTML = response.wind_degrees
        newsunrise.innerHTML = response.sunrise
        newsunset.innerHTML = response.sunset
    })

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        luctemp.innerHTML = response.temp
        lucfeels_like.innerHTML = response.feels_like
        luchumidity.innerHTML = response.humidity
        lucwind_speed.innerHTML = response.wind_speed
        lucwind_degrees.innerHTML = response.wind_degrees
        lucsunrise.innerHTML = response.sunrise
        lucsunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
} 

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Nagpur")

