const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      // Restart the animation by removing and re-adding the class
      el.classList.remove('visible');
      void el.offsetWidth; // Trigger reflow to restart animation
      el.classList.add('visible');
    } else {
      // Optional: reset when out of view
      entry.target.classList.remove('visible');
    }
  });
});

const elementsToObserve = document.querySelectorAll('.about-us-image, .about-us-image-container p, .about-our-food-image');

elementsToObserve.forEach(el => {
  observer.observe(el);
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
  });
});