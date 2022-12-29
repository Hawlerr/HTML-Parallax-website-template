
 $('.navbar a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
        scrollTop: $(hash).offset().top
       },800);
   }
 });

// Set the initial position of the element
element.style.left = '0';
element.style.top = '0';

// Add an event listener for mousemove events
document.addEventListener('mousemove', (event) => {
  // Calculate the new position of the element based on the mouse movement
  const newX = -event.clientX / 20;
  const newY = -event.clientY / 20;

  // Update the position of the element
  element.style.left = newX + 'px';
  element.style.top = newY + 'px';
});

// Get a reference to the main element
const element = document.querySelector('section');

// Scroll to the element
window.scrollTo({
  top: element.offsetTop,
  behavior: 'smooth'
});
const main = document.querySelector('main');



// Set the initial position of the background image for each parallax section
const updatePositions = () => {
  const sections = main.querySelectorAll('.parallax');
  sections.forEach((section) => {
    const speed = section.getAttribute('data-speed');
    const yPos = -(window.scrollY / speed);
    const coords = `center ${yPos}px`;
    section.style.backgroundPosition = coords;
  });
};

// Update the positions of the background images on scroll
window.addEventListener('scroll', updatePositions);

// Update the positions of the background images on load
updatePositions();