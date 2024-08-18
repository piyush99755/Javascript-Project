
//nav menu 
document.querySelector('#open-nav-menu').addEventListener('click', function() {
    document.querySelector('header nav .wrapper').classList.add('nav-open');
});

document.querySelector('#close-nav-menu').addEventListener('click', function() {
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
});


//greeting section

function celciusToFahr(temperature) {
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}



const greetingText = 'Good Afternoon!';
const weatherCondition = 'Sunny';
const userLocation = 'London';
let temperature = 30;


let celciusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celciusToFahr(temperature).toFixed(1)}°F outside.`

document.querySelector('#greeting').innerHTML = greetingText;
document.querySelector('p#weather').innerHTML = celciusText;

document.querySelector('.weather-group').addEventListener('click', function(event) {

   if(event.target.id == 'celcius') {
        document.querySelector('p#weather').innerHTML = celciusText;

    } else if (event.target.id == 'fahr') {
        document.querySelector('p#weather').innerHTML = fahrText;
    }
    
});

let localTime = new Date();
document.querySelector('span[data-time = hours]').textContent = localTime.getHours();
document.querySelector('span[data-time = minutes]').textContent = localTime.getMinutes();
document.querySelector('span[data-time = seconds]').textContent = localTime.getSeconds();

setInterval(function(){
    let localTime = new Date();
    document.querySelector('span[data-time = hours]').textContent = localTime.getHours();
    document.querySelector('span[data-time = minutes]').textContent = localTime.getMinutes();
    document.querySelector('span[data-time = seconds]').textContent = localTime.getSeconds();
},
1000);