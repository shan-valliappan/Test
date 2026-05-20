// ------------------------------
// 1) Hero typing animation
// ------------------------------
const typingText = document.getElementById('typingText');
const subtitle = 'Student, builder, mentor, and future engineer.';
let charIndex = 0;

function typeSubtitle() {
  if (charIndex < subtitle.length) {
    typingText.textContent += subtitle.charAt(charIndex);
    charIndex++;
    setTimeout(typeSubtitle, 55);
  }
}

window.addEventListener('DOMContentLoaded', typeSubtitle);

// ------------------------------
// 2) Smooth scroll button (Hero -> Projects)
// ------------------------------
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
const projectsSection = document.getElementById('projects');

viewProjectsBtn.addEventListener('click', () => {
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

// ------------------------------
// 3) Dark mode toggle
// ------------------------------
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Update icon for better feedback
  if (document.body.classList.contains('light-mode')) {
    themeToggle.textContent = '🌙';
  } else {
    themeToggle.textContent = '☀️';
  }
});

// ------------------------------
// 4) Mobile menu toggle
// ------------------------------
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ------------------------------
// 5) Fade-in animation on scroll
// ------------------------------
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

faders.forEach((element) => observer.observe(element));

// ------------------------------
// 6) Back-to-top button
// ------------------------------
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ------------------------------
// 7) Simple contact form validation
// ------------------------------
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page reload

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic checks
  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.style.color = '#e63946';
    return;
  }

  // Very simple email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = '#e63946';
    return;
  }

  formMessage.textContent = 'Message sent successfully! (Demo only)';
  formMessage.style.color = '#2a9d8f';
  contactForm.reset();
});
