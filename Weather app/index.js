var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#submitBtn')
var city = document.querySelector('#cityoutput')
var description = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "7c906022a3c64f1749ce75f62cb61d8e"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{ 
    
    fetch('https://api.openweathermap.org/data/3.0/onecall?q='+inputvalue.value+'&appid='+apik)
    .then(res=>res.json())
    
    .then(data =>
        {
            var nameval=data['name']
            var descrip = data['weather'][0]['description']
            var temperature = data['main']['temp']
            var windspeed = data['wind']['speed']

            city.innerHTML=`weather of <span>${nameval}<span>`
            temp.innerHTML=`Temperature: <span>${  convertion(temperature)} C</span>`
            description.innerHTML=`Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML=`Wind Speed : <span>${windspeed} km/h<span>`
        })

        .catch(err => {
            console.error(err);
            alert('An error occurred while fetching data. Please check the city name and try again.');
        });
})