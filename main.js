const menuBar = document.querySelector('.menu-bars');

menuBar.addEventListener('click', () => {
  document.querySelector('.nav-main').classList.toggle('open');
  document.querySelector('.top-header').classList.toggle('stick');
});
