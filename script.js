// Portfolio interactions and animations.

// Typing animation for hero focus areas.
const typingText = document.getElementById('typingText');
const typingWords = ['Robotics', 'Chemistry', 'Leadership', 'Engineering', 'Coding'];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentWord = typingWords[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.slice(0, charIndex + 1);
    charIndex += 1;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeLoop, 1000);
      return;
    }
  } else {
    typingText.textContent = currentWord.slice(0, charIndex - 1);
    charIndex -= 1;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
    }
  }

  setTimeout(typeLoop, deleting ? 55 : 85);
}

// Particle network background with performance-safe limits.
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function sizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function buildParticles() {
  const count = Math.min(70, Math.floor(window.innerWidth / 18));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r: Math.random() * 1.6 + 0.7
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.fillStyle = 'rgba(220, 38, 38, 0.6)';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    for (let j = i + 1; j < particles.length; j += 1) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 105) {
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.2 - distance / 800})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animateParticles);
}

// Sticky navigation: active link highlight + mobile toggle.
const navLinks = document.getElementById('navLinks');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const links = Array.from(document.querySelectorAll('.nav-link'));
const sections = Array.from(document.querySelectorAll('main section'));

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
});

links.forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

function setActiveLink() {
  const mid = window.scrollY + window.innerHeight * 0.35;
  let activeId = 'hero';

  sections.forEach((section) => {
    if (mid >= section.offsetTop) activeId = section.id;
  });

  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
  });
}

// Reveal animations + subtle parallax.
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

function handleParallax() {
  const y = window.scrollY;
  const heroCard = document.querySelector('.hero-content');
  if (heroCard) heroCard.style.transform = `translateY(${y * 0.06}px)`;
}

// Back to top button.
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

function toggleBackToTop() {
  backToTop.classList.toggle('show', window.scrollY > 420);
}

// Contact form validation + success feedback animation.
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

function setError(id, text) {
  document.getElementById(id).textContent = text;
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  setError('nameError', name ? '' : 'Please enter your name.');
  setError('emailError', emailValid ? '' : 'Please enter a valid email address.');
  setError('messageError', message.length >= 8 ? '' : 'Please include a longer message.');

  if (!name || !emailValid || message.length < 8) {
    formMessage.className = 'form-message';
    formMessage.textContent = 'Please fix the highlighted fields and try again.';
    return;
  }

  formMessage.className = 'form-message success';
  formMessage.textContent = 'Thanks! Your message was validated and sent (demo mode).';
  contactForm.reset();
});

window.addEventListener('scroll', () => {
  setActiveLink();
  toggleBackToTop();
  handleParallax();
});

window.addEventListener('resize', () => {
  sizeCanvas();
  buildParticles();
});

window.addEventListener('DOMContentLoaded', () => {
  typeLoop();
  sizeCanvas();
  buildParticles();
  animateParticles();
  setActiveLink();
});
