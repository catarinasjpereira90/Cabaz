$(document).ready(function () {
  $('.multiple-items').slick({
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
  });

  $('.mobile-items').slick({
    responsive: [
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          prevArrow: '<div class="slick-prev"><i class="fas fa-arrows-alt-h" aria-hidden="true"></i></div>',
          nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        }
      }
    ]
  });

  $("#down").click(function (){
    $('html, body').animate({
        scrollTop: $(".mobile-items").offset().top
    }, 1000);
    e.preventDefault();
}); 


})
