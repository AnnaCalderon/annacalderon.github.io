let slideIndex = 0;
let slides = [];

document.addEventListener("DOMContentLoaded", () => {
  slides = Array.from(document.querySelectorAll('.carousel .slides img'));
  if (!slides.length) return; // no images found, bail out

  // initialize first slide
  showSlide(0);

  // Optional: if you’d rather not use inline onclick, you can also wire buttons here:
  const prevBtn = document.querySelector('.carousel .prev');
  const nextBtn = document.querySelector('.carousel .next');
  if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));
});

// Expose these to inline onclick handlers in HTML:
window.plusSlides = function(n) {
  changeSlide(n);
};

window.showSlide = function(n) {
  if (!slides.length) return;
  slides.forEach(img => img.classList.remove('active'));
  slideIndex = ((n % slides.length) + slides.length) % slides.length; // wrap
  slides[slideIndex].classList.add('active');
};

function changeSlide(step) {
  showSlide(slideIndex + step);
}
