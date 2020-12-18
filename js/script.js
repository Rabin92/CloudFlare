const menu = document.querySelector('#js-menu');
const nav = document.querySelector('#js-nav');

menu.addEventListener('click', () => {
  nav.style.width = '200px';
});

nav.addEventListener('click', e => {
  const theTarget = e.target;
  if (theTarget.className === 'nav-sm__close') {
    nav.style.width = '0';
    nav.style.padding = '0';
  }
});
