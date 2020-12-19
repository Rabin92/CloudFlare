const menu = document.querySelector('#js-menu');
const nav = document.querySelector('#js-nav');
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
let error = document.querySelector('#error');

// Nav menu
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

// Form validation

form.addEventListener('submit', e => {
  e.preventDefault();
  let msg = [];

  if (username.value === '') {
    msg.push('Please enter your username/email.');
  }

  if (password.value.length <= 6) {
    msg.push('Password must be longer than 6 characters.');
  } else if (password.value === 'password') {
    msg.push('Password cannot be password.');
  } else if (password.value.length >= 20) {
    msg.push('Password must not be longer than 20 characters.');
  }

  // show in a new line
  error.innerText = msg.join('\r\n');
});
