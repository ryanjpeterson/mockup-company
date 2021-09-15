// // Navbar DOM
const navbar = document.querySelector('#navbar');
const navbarToggle = document.querySelector('#navbarToggle');
const navbarMenu = document.querySelector('#navbarMenu');
const navbarSticky = navbar.offsetTop;

// Navbar: Sticky
const toggleNavbarSticky = () => {
  if (window.pageYOffset >= navbarSticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

window.addEventListener('scroll', () => toggleNavbarSticky);

// Navbar: Mobile menu
function mobileMenu() {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
}

navbarToggle.addEventListener('click', mobileMenu);

// Header: Owl Carousel
const headerOwl = $('.owl-carousel');
headerOwl.owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,
  dotsEach: true,
});

// Selected Works DOM
const selectedWorksBtns = document.querySelectorAll('.selected-works__btn');
const selectedWorksItems = document.querySelectorAll('.selected-work');
let prevSelection = document.querySelector('.selected-works__btn.active');

// Selected Works: Filter items on btn click
const filterSelectedWorks = (btn) => {
  if (prevSelection) {
    prevSelection.classList.remove('active');
  }

  selectedWorksItems.forEach((item) => {
    if (btn.value === 'all') {
      return item.classList.remove('hide');
    }

    if (!item.classList.contains(btn.value)) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  });

  btn.classList.add('active');
  prevSelection = btn;
};

selectedWorksBtns.forEach((btn) => {
  btn.addEventListener('click', () => filterSelectedWorks(btn));
});
