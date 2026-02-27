// Simple contact form alert
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = 'Thank you! Your message has been sent.';
  form.reset();
});
