const root = document.querySelector('html');
const navbar = document.querySelector('#navbar');
const navbarToggle = navbar.querySelector('.navbar-toggle');
const navbarMenu = navbar.querySelector('#navbar-menu');
const navbarLinksContainer = navbar.querySelector('.navbar-links');
mybutton = document.getElementById("top-btn"); // Top btn

function openMobileNavbar() {
  navbar.classList.add('opened');
  navbarToggle.setAttribute('aria-expanded', 'true');
}

function closeMobileNavbar() {
  navbar.classList.remove('opened');
  navbarToggle.setAttribute('aria-expanded', 'false');
}

navbarToggle.addEventListener('click', () => {
  if (navbar.classList.contains('opened')) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

navbarLinksContainer.addEventListener('click', (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener('click', closeMobileNavbar);


// Listen to scroll to change header opacity class

function checkScroll() {
    let startY = navbar.style.height * 2; //The point where the navbar changes in px


    if (window.scrollY > startY) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.78)';
        navbar.style.transition = 'all 0.6s ease-out';
        if (window.innerWidth > 700) {
            navbarLinksContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            navbarLinksContainer.style.transition = 'all 1s ease-out';
        }
    } else {
        navbar.style.backgroundColor = '';
    }
}

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


window.onload = function () {
    window.onscroll = function () {
      checkScroll();
      scrollFunction();
    };
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});