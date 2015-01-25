$(document).ready(function() {

  setTimeout

  // Initiate Waves plugin
  Waves.displayEffect({ duration: 1000 });


  $(window).on('load resize', function () {

    // Fitting blocks size to screen size
    $(".full-screen-block").height( $(window).height());
    $(".thumb-wrap, .work-wrap").height( $(window).height());

  });

});










