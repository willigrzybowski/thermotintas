const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const opacity = Math.max(0, 1 - scrollY / 500);

  logo.style.opacity = opacity;
});