const menu = document.querySelector('#js-menu');
const nav = document.querySelector('#js-nav');
const form = document.querySelector('form');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
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
    username.style.borderBottom = '2px solid #ff0000';
    username.style.transition = 'border-bottom 0.5s ease-in-out';
  } else {
    username.style.borderBottom = '2px solid #008000';
    username.style.transition = 'border-bottom 0.5s ease-in-out';
  }

  if (password.value === '') {
    msg.push('Password enter your password.');
    password.style.borderBottom = '2px solid #ff0000';
    password.style.transition = 'border-bottom 0.5s ease-in-out';
  } else {
    password.style.borderBottom = '2px solid #008000';
    password.style.transition = 'border-bottom 0.5s ease-in-out';
  }

  // show in a new line
  error.innerText = msg.join('\r\n');
});
