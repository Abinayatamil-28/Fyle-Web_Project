// script.js
document.getElementById('contactUsBtn').onclick = function() {
  document.getElementById('popupForm').style.display = 'flex';
}

document.getElementById('closeBtn').onclick = function() {
  document.getElementById('popupForm').style.display = 'none';
}

// Add slider functionality as needed


document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  const slideInterval = 3000; // Time in milliseconds for each slide

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Automatically change slides every few seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, slideInterval);
});
function changeProject(element) {
  const imageUrl = element.getAttribute('data-image');
  document.getElementById('projectImage').src = imageUrl;
  
  // Remove active class from all list items
  const listItems = document.querySelectorAll('.project-list li');
  listItems.forEach(item => item.classList.remove('active'));
  
  // Add active class to the clicked item
  element.classList.add('active');
}
