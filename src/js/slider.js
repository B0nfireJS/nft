const heroSlider = () => {
  new Swiper(".swiper", {
    direction: 'horizontal',
    slidesPerView: 2,
    loop: true,
    // loopFillGroupWithBlank: true,
    speed: 600,
    // slidesPerView: 1.5,
    // grabCursor: true,
    spaceBetween: 27,
    // autoHeight: true,
    breakpoints: {
      992: {
        // slidesPerView: 2,
        // spaceBetween: 27,
      }
    }
  });
}

heroSlider();