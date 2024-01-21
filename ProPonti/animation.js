window.addEventListener('load', function() {
  let slideIndex = 1;
  let autoSlideInterval;

  // Call the initial showSlides function
  showSlides(slideIndex);

  // Start automatic slideshow
  startAutoSlide();

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
    restartAutoSlide();
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
    restartAutoSlide();
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Ensure slideIndex is within valid range
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Add "active" class to the corresponding dot
    dots[slideIndex - 1].className += " active";
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
      plusSlides(1);
    }, 3500); // Change the interval (in milliseconds) as needed
  }

  function restartAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Use Intersection Observer to pause when not visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.5) {
        startAutoSlide();
      } else {
        clearInterval(autoSlideInterval);
      }
    });
  }, { threshold: 0.5 });

  // Observe the element you want to check visibility for
  const slideshowContainer = document.querySelector('.slideshow-container');
  observer.observe(slideshowContainer);
});
