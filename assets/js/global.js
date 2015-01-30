$(document).ready(function() {

  // Initiate Waves plugin
  Waves.displayEffect({ duration: 1000 });

  // Global values
  win_width  = $(window).width();
  win_height = $(window).height();



  $(window).on('load resize', function () {


    // Fitting blocks size to screen size
    $(".full-screen-block").height( win_height );
    $(".thumb-wrap, .work-wrap").height( win_height );

    // Hide Exp menu item on vertically small items
    if ( win_width > 1000 ) {
      if ( win_height < 605 ) {
        $('nav a.item:nth-child(3)').addClass('large-hidden');
      }
      else {
        $('nav a.item:nth-child(3)').removeClass('large-hidden');
      }
    }

  });


});










