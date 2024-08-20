//global objects/variables

const galleryImages = [
    {
        src:"./assets/gallery/image1.jpg",
        alt:"Thumbnail Image 1"

    },

    {
        src:"./assets/gallery/image2.jpg",
        alt:"Thumbnail Image 2"

    },

    {
        src:"./assets/gallery/image3.jpg",
        alt:"Thumbnail Image 3"

    }
]

function menuHandler() {
    //nav menu 
    document.querySelector('#open-nav-menu').addEventListener('click', function() {
    document.querySelector('header nav .wrapper').classList.add('nav-open');
    });

    document.querySelector('#close-nav-menu').addEventListener('click', function() {
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
    });

}

function celciusToFahr(temperature) {
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

//greeting section

function greetingHandler() {
    let greetingText;
    let currentHour = new Date().getHours();

    if(currentHour < 12){
        greetingText = 'Good Morning!';
    }else if(currentHour < 19){
        greetingText = 'Good Afternoon!';
    }else if(currentHour < 24){
        greetingText= 'Good Evening!';
    }else{
        greetingText = 'Welcome!';
    }

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


}

function timeHandler() {
    let localTime = new Date();
    document.querySelector('span[data-time = hours]').textContent = localTime.getHours();
    document.querySelector('span[data-time = minutes]').textContent = localTime.getMinutes();
    document.querySelector('span[data-time = seconds]').textContent = localTime.getSeconds();

    //local time section
    setInterval(function(){
    let localTime = new Date();
    document.querySelector('span[data-time = hours]').textContent = localTime.getHours().toString().padStart(2, '0');
    document.querySelector('span[data-time = minutes]').textContent = localTime.getMinutes().toString().padStart(2, '0');
    document.querySelector('span[data-time = seconds]').textContent = localTime.getSeconds().toString().padStart(2, '0');
},
1000);

}

//gallery section

function galleryHandler() {
    let mainImage = document.querySelector('#gallery > img');
    let thumbnail = document.querySelector('#gallery .thumbnails');
    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;


galleryImages.forEach(function(image, index) {
   let thumb = document.createElement('img');
   thumb.src = image.src;
   thumb.alt = image.src;
   thumb.dataset.arrayIndex = index;
   thumb.dataset.selected = index === 0 ? true : false;

   thumb.addEventListener('click', function(e) {
    let selectedIndex = e.target.dataset.arrayIndex;
    console.log(selectedIndex);
    let selectedImage = galleryImages[selectedIndex];
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;

    thumbnail.querySelectorAll('img').forEach(function(img){
        img.dataset.selected = false;
    });
    e.target.dataset.selected = true;

   })

   
   thumbnail.appendChild(thumb);
    })

}

//execute functions on page load
menuHandler();
greetingHandler();
timeHandler();
galleryHandler();


