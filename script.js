// Image Carousel Functionality
const carousel = document.querySelector('.property-grid');
const nextBtn = document.getElementById('next'); // Assuming you have buttons with these IDs
const prevBtn = document.getElementById('prev');
let currentIndex = 0;

function moveCarousel(direction) {
  const cardWidth = carousel.children[0].offsetWidth;
  const translateX = -currentIndex * cardWidth;

  carousel.style.transform = `translateX(${translateX}px)`;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = carousel.children.length - 1;
  } else if (currentIndex >= carousel.children.length) {
    currentIndex = 0;
  }
}

nextBtn.addEventListener('click', () => moveCarousel(1));
prevBtn.addEventListener('click', () => moveCarousel(-1));

// Optional: Auto-play
let autoplayInterval;

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    moveCarousel(1);
  }, 3000); // Adjust interval as needed
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Start autoplay on page load
startAutoplay();

// Pause autoplay on mouseover
carousel.addEventListener('mouseover', stopAutoplay);
carousel.addEventListener('mouseout', startAutoplay);

// Interactive Map Integration (Placeholder - Replace with actual library code)
const map = L.map('map').setView([51.505, -0.09], 13); // Example using Leaflet

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for properties (replace with actual property coordinates)
const property1 = L.marker([51.5, -0.09]).addTo(map);
property1.bindPopup("<b>Property 1</b><br>Modern Villa").openPopup();

const property2 = L.marker([51.51, -0.08]).addTo(map);
property2.bindPopup("<b>Property 2</b><br>Luxury Penthouse").openPopup();

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Submit the form (e.g., send data to server)
  // ...

  alert('Thank you for your message!');
  contactForm.reset();
});

function isValidEmail(email) {
  // Simple email validation (use a more robust library for production)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Smooth Scrolling with Active Navigation (Placeholder)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY <= (sectionTop + sectionHeight)) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});