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

const toggleButtons = document.querySelectorAll('.toggle-panel');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.dataset.panel);
    if (!panel) return;

    panel.classList.toggle('open');
    const isOpen = panel.classList.contains('open');

    if (button.dataset.panel === 'partners-panel') {
      button.textContent = isOpen ? 'Nascondi partner' : 'Mostra partner';
    }

    if (button.dataset.panel === 'social-panel') {
      button.textContent = isOpen ? 'Nascondi social' : 'Mostra social';
    }
  });
});
