$(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut(400);

      setTimeout(function () {
        $('#header').addClass('section-active');
      }, 350);
  })