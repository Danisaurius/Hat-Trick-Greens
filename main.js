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
    alert("This feature is not implemented yet. Stay tuned!");
  });
});


// modal added code:

    const modal = document.getElementById('cardModal');
    const modalContent = document.getElementById('modalCardContent');
    const closeBtn = document.querySelector('.modal .close');
    const cards = document.querySelectorAll('.main-dishes-grid-container .card, .drink-grid-container .card, .dessert-grid-container .card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const clonedCard = card.cloneNode(true);
      modalContent.innerHTML = ''; // Clear old content
      modalContent.appendChild(clonedCard);
      modal.style.display = 'block';
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

// end of modal added code


