$(document).ready(function() {

  // Global values
  win_width  = $(window).width();
  win_height = $(window).height();
  lang = $('body').data('lang');



  $(window).on('load', function () {

    // Fitting blocks size to screen size
    $(".full-screen-block").height( win_height );
    $(".thumb-wrap, .work-wrap").height( win_height );

    // Fixing position of thumb-container
    $('.thumb-container, .preview-container-shift .container').css('left', getScrollbarWidth() / 2);

    // Clear form data
    $('input, textarea').val('');

    // Loading ava
    load_ava();

    // Set rangom poster
    setTimeout(function(){
      var poster = $('.poster'),
          index = Math.floor((Math.random() * poster.data('images-number')) + 1);

        poster.css('background-image', 'url(' + poster.data('bg-src') + index + '.jpg)');
    }, 100)

  });


  $(window).on('resize', function () {

    // Fitting blocks size to screen size
    setTimeout(function() {
      $(".full-screen-block").height( win_height );
      $(".thumb-wrap, .work-wrap").height( win_height );
    }, 100)

    // Loading ava
    load_ava();

    win_width  = $(window).width();
    win_height = $(window).height();

  });


  // Loading particular ava depanding on viewport
  function load_ava() {
    if ( win_width > 1000) {
      $('#small-ava').attr('src', $('#small-ava').data('src'));
    } else {
      $('#large-ava').attr('src', $('#large-ava').data('src'));
      $('.about-contact').attr('href', '#contact');
    }
  }

});










