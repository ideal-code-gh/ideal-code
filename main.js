document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const toggle = document.getElementById('navToggle');

toggle.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('#nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
