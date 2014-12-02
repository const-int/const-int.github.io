$(document).ready(function() {

  // Initiate Waves plugin
  Waves.displayEffect();

  $(window).on('load resize', function () {
    $(".full-screen-block").height( $(window).height() );
  });

});










