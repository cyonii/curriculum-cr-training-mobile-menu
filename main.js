const menuBar = document.querySelector('.menu-bars');
const closeMenu = document.getElementById('closeMenu');
const navMenu = document.querySelector('.nav-main');

menuBar.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

closeMenu.onclick = () => {
  navMenu.classList.remove('open');
};
