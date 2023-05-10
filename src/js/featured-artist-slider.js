class SliderGalleryy {
  constructor(options = {}) {
    this.options = options;
    this.breakpoints = {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    };
    this.slider = null;
    
    if (this.slider === null) {
      window.addEventListener('resize', this.handleResizeWindow.bind(this));
      this.handleResizeWindow(window);
    }
  }
  
  get _breakpoints() {
    return this._breakpoints;
  }
  
  set _breakpoints(val) {
    return this._breakpoints = val;
  }
  
  get _options() {
    return this.options;
  }
  
  set _options(val) {
    return this._options = val;
  }
  
  handleResizeWindow(event) {
    const { innerWidth = 0 } = event?.target || event;
  
    if (innerWidth > this.breakpoints[this.options.breakpoint]) {
      this.destroy();
      return;
    }
    this.init();
  }
  
  init() {
    if (this.slider !== null) return;
    this.slider = new Swiper(this.options.el, {
      loop: true,
      slidesPerView: 'auto',
      ...(this.options.sliderOptions || {}),
    });
  }
 
  destroy() {
    if (this.slider === null) return;
    this.slider.destroy();
    this.slider = null;
  }
}


new SliderGalleryy({
  el: '.slider__itemss',
  breakpoint: 'lg',
  sliderOptions: {
    // loop: false,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
  }
})

