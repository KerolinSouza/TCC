const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalItems = carouselItems.length;
const itemWidth = carouselItems[0].clientWidth;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

function updateCarousel() {
  const offset = -1 * currentIndex * itemWidth;
  carouselInner.style.transform = `translateX(${offset}px)`;
}


function initMap() {
  var mapOptions = {
      center: { lat: -30.03296031345359  ,lng: -51.121694201760505 }, // Coordenadas de São Paulo
      zoom: 15 // Zoom inicial
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}