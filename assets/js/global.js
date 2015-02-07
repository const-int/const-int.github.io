$(document).ready(function() {

  // Global values
  win_width  = $(window).width();
  win_height = $(window).height();


  $(window).on('load resize', function () {

    // Fitting blocks size to screen size
    $(".full-screen-block").height( win_height );
    $(".thumb-wrap, .work-wrap").height( win_height );

    // Loading ava
    load_ava();

    // Fixing position of thumb-container
    $('.thumb-container').css('left', getScrollbarWidth() / 2);
  });


  $(window).on('resize', function () {

    var old_height = win_height;
    win_width  = $(window).width();
    win_height = $(window).height();

    if ( win_height != old_height && win_width > 1000 )  {
      setTimeout(function() {
        window.location.hash = '#about';
        location.reload();
      }, 1);
    } else {
      load_ava();
    }

  });


  // Loading particular ava depanding on viewport
  function load_ava() {
    if ( win_width > 1000) {
      $('#small-ava').attr('src', $('#small-ava').data('src'));
    } else {
      $('#large-ava').attr('src', $('#large-ava').data('src'));
    }
  }

});










