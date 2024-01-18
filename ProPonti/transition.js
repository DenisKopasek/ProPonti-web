function applyTransition(element) {
    element.classList.add('transitioned');
  }
  
  function resetTransition(element) {
    element.classList.remove('transitioned');
  }


  var mybutton = document.getElementById("backToTopBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }



  document.addEventListener('DOMContentLoaded', function() {
    // Create an Intersection Observer
    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
    // Target all elements with the class "company" and "photos"
    var companies = document.querySelectorAll('.company');
    var photos = document.querySelectorAll('.photos');
  
    // Observe each "company" element
    companies.forEach(function(company) {
      observer.observe(company);
    });
  
    // Observe each "photos" element
    photos.forEach(function(photo) {
      observer.observe(photo);
    });
  });
  
  function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
      // If the element is in the viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Stop observing once the element is visible (optional)
        observer.unobserve(entry.target);
      }
    });
  }