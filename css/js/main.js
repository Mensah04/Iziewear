(function ($) {
  "use strict";

  // Initialize Isotope grid on window load
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    // Filter items on button click
    $('.portfolio-filters button').on('click', function () {
      $('.portfolio-filters button').removeClass('active');
      $(this).addClass('active');

      var filterValue = $(this).attr('data-filter');
      portfolioIsotope.isotope({ filter: filterValue });
    });
  });

  // Smooth scrolling for navigation anchors
  $('.nav-link, .btn-gold, .btn-outline-gold').on('click', function (e) {
    if (this.hash !== "") {
      var hash = this.hash;
      if ($(hash).length) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70
        }, 800);
      }
    }
  });

  // Form Submission Prevent Handler
  $('#fittingForm').on('submit', function (e) {
    e.preventDefault();
    alert('Thank you for requesting a fitting! We will contact you shortly to confirm your appointment.');
    this.reset();
  });

})(jQuery);