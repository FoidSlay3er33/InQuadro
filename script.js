const links = document.querySelectorAll('.nav-link, .mobile-link');
const sections = document.querySelectorAll('section[id]');
const reveals = document.querySelectorAll('.reveal');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

function setActiveLink() {
  let current = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 180;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

reveals.forEach(element => revealObserver.observe(element));
window.addEventListener('scroll', setActiveLink);
setActiveLink();

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    formMessage.textContent = 'Richiesta inviata! Ti ricontatteremo presto.';
    form.reset();
  });
}
