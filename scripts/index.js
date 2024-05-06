const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let counter = 1;
const slideWidth = slides[0].clientWidth;

carouselWrapper.style.transform = `translateX(${-slideWidth * counter}px)`;

function nextSlide() {
  if (counter >= slides.length - 1) return;
  carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselWrapper.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function prevSlide() {
  if (counter <= 0) return;
  carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselWrapper.style.transform = `translateX(${-slideWidth * counter}px)`;
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

carouselWrapper.addEventListener('transitionend', () => {
  if (slides[counter].classList.contains('last-clone')) {
    carouselWrapper.style.transition = 'none';
    counter = slides.length - 2;
    carouselWrapper.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
  if (slides[counter].classList.contains('first-clone')) {
    carouselWrapper.style.transition = 'none';
    counter = slides.length - counter;
    carouselWrapper.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});

setInterval(nextSlide, 3000);
