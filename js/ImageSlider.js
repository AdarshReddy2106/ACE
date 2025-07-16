let slideIndex = 1;
let slideInterval; // For automatic slideshow
showSlides(slideIndex);

// Start automatic slideshow
function startSlideShow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 3000); // Change slide every 3 seconds
}

// Stop automatic slideshow
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Start slideshow on page load
startSlideShow();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
