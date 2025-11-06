// Loader solo si existe en la página
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    }, 1500);
  }
});

// Navbar transparente/solida según scroll 
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15,23,42,1)';
  } else {
    navbar.style.background = 'rgba(15,23,42,.95)';
  }
});

// Smooth scroll para anclas internas del mismo documento
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Marcar link activo en navbar por ruta
(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const page = href.split('#')[0];
    if (page === path) link.classList.add('active');
  });
})();
