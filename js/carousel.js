$(document).ready(function(){
  $('.slide-renders').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: 'linear',
    dots: true,
    fade: false,
    infinite: true,
    speed: 600
  });
  $('.slide-top').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: 'linear',
    dots: false,
    fade: true,
    infinite: true,
    speed: 400
  });
  $('.slide-bot').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: 'linear',
    dots: false,
    fade: true,
    infinite: true,
    speed: 800
  });
});
