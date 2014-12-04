$(document).ready(function() {

  setTimeout

  // Initiate Waves plugin
  Waves.displayEffect();

  $(window).on('load resize', function () {

    // Fitting blocks size to screen size
    $(".full-screen-block").height( $(window).height() );

  });


});










