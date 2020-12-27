
const hamburger = document.getElementsByClassName('toggle')[0];
const dadNavbar = document.getElementsByClassName('nav-menu')[0];

hamburger.addEventListener('click', () => {
    dadNavbar.classList.toggle('show');

});


// let mainNavLinks = document.querySelectorAll("nav ul li a");

// mainNavLinks.forEach(link => {
//     link.addEventListener("click", event => {
//       event.preventDefault();
//       let target = document.querySelector(event.target.hash);
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     });
//   });