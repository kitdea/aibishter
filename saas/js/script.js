
// const hamburger = document.getElementsByClassName('toggle')[0];
// const dadNavbar = document.getElementsByClassName('nav-menu')[0];

// hamburger.addEventListener('click', () => {
//     dadNavbar.classList.toggle('show');

// });

$('.toggle').click(function(){
    $('.nav-menu').slideToggle(180);
  });
