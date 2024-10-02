  /* JavaScript para controlar o movimento */
  const sliderContainer = document.querySelector('.slider-container');
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  
  function slide(n) {
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  }