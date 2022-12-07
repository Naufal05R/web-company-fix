const navbar = document.getElementsByTagName('nav')[0];
const toggle = document.getElementsByClassName('navbar-toggler')[0];

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace('bg-transparent', 'nav-color');
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace('nav-color', 'bg-transparent');
  }
});

toggle.addEventListener('click', function () {
  if (toggle.ariaExpanded === 'true') {
    navbar.classList.replace('bg-transparent', 'nav-color');
  } else if (toggle.ariaExpanded === 'false') {
    navbar.classList.replace('nav-color', 'bg-transparent');
  }
});