const timeline = gsap.timeline({
  defaults:{ ease: 'power1.out' }
});

// clear page loader
function loaderLoaded() {
  document.querySelector('.page-loader').style.display = 'none';
  document.querySelector('.page-loader-slider').style.display = 'none';
}

// Page loader animation
timeline.fromTo('.la-square-jelly-box', {opacity: 1}, {opacity: 0, duration: 0.5, delay: 1.5});
timeline.to('.hide .text', { y: '0%', duration: 1, stagger: 0.25 });
timeline.to('.page-loader-slider', { y: '-100%', duration: 1.5, delay: 0.5 });
timeline.to('.page-loader', { y: '-100%', duration: 1, onComplete: loaderLoaded }, "-=1");

// Page components
// timeline.fromTo('.header', {opacity: 0, y: '-100%'}, {opacity: 1, y: '0%', duration: 0.5 });

// Burger Controller
const burger = document.querySelector('.button--burger');
const mobileMenu = document.querySelector('.mobile-menu-container');
const burgerIcons = document.querySelectorAll('.button--burger__icon');

burger.addEventListener('click', () => {
  burgerIcons.forEach(burgerIcon => {
    burgerIcon.classList.toggle('show');
  })
  mobileMenu.classList.toggle('show');
})
