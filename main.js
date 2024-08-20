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

const products = [
    {
        title: "AstroFiction",
        author: "John Doe",
        price: 49.9,
        image: "./assets/products/img6.png"
    },
    {
        title: "Space Odissey",
        author: "Marie Anne",
        price: 35,
        image: "./assets/products/img1.png"
    },
    {
        title: "Doomed City",
        author: "Jason Cobert",
        price: 0,
        image: "./assets/products/img2.png"
    },
    {
        title: "Black Dog",
        author: "John Doe",
        price: 85.35,
        image: "./assets/products/img3.png"
    },
    {
        title: "My Little Robot",
        author: "Pedro Paulo",
        price: 0,
        image: "./assets/products/img5.png"
    },
    {
        title: "Garden Girl",
        author: "Ankit Patel",
        price: 45,
        image: "./assets/products/img4.png"
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

//products section
function productsHandler() {
    //creating HTML elements dynamically to get more control over functionality
    let productsSection = document.querySelector('.products-area');
    
    //looping through products and creating its elements along with its require properties 
    products.forEach( function(product, index) {
        
        let productElm = document.createElement('div');
        productElm.classList.add('product-item'); 

       // create image element
        let productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = ' Image for ' + product.title;
        
        //create product-details section
        let productDetails = document.createElement('div');
        productDetails.classList.add('product-details');

        //create product title, author, price-title and price
        let productTitle = document.createElement('h3');
        productTitle.classList.add('product-title');
        productTitle.textContent = product.title;

        let productAuthor = document.createElement('p');
        productAuthor.classList.add('product-author');
        productAuthor.textContent = product.author;

        let priceTitle = document.createElement('p');
        priceTitle.classList.add('price-title');
        priceTitle.textContent = 'Price';

        let productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = product.price ? '$' + product.price.toFixed(2) : 'Free';

        
        //append child elemets to its parent element
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);

        productElm.append(productImage);
        productElm.append(productDetails);

        productsSection.append(productElm);
    });

}

//execute functions on page load
menuHandler();
greetingHandler();
timeHandler();
galleryHandler();
productsHandler();


/* <div class="product-item">
             <img src="./assets/products/img6.png" alt="AstroFiction">
             <div class="product-details">
                <h3 class="product-title">AstroFiction</h3>
                <p class="product-author">John Doe</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 49.90</p>
             </div>
          </div>
          <div class="product-item">
             <img src="./assets/products/img1.png" alt="Space Odissey">
             <div class="product-details">
                <h3 class="product-title">Space Odissey</h3>
                <p class="product-author">Marie Anne</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 35.00</p>
             </div>
          </div>
          <div class="product-item">
             <img src="./assets/products/img2.png" alt="Doomed City">
             <div class="product-details">
                <h3 class="product-title">Doomed City</h3>
                <p class="product-author">Jason Cobert</p>
                <p class="price-title">Price</p>
                <p class="product-price">Free</p>
             </div>
          </div> */