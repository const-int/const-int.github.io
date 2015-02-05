$(document).ready(function() {

  // Global values
  win_width  = $(window).width();
  win_height = $(window).height();

  $(window).on('load resize', function () {

    // Fitting blocks size to screen size
    $(".full-screen-block").height( win_height );
    $(".thumb-wrap, .work-wrap").height( win_height );

    // Fixing position of thumb-container
    $('.thumb-container').css('left', getScrollbarWidth() / 2);

  });


});










