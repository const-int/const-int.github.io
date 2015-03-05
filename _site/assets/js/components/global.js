$(document).ready(function() {

  // Global values
  win_width  = $(window).width();
  win_height = $(window).height();
  lang = $('body').data('lang');
  page_url = window.location.href;
  domain = page_url.split("/");

  $(window).on('load', function () {

    // Fitting blocks size to screen size
    $(".full-screen-block").height( win_height );
    $(".thumb-wrap, .work-wrap").height( win_height );

    // Clear form data
    $('input, textarea').val('');

    responsive_actions();

    // Set rangom poster
    setTimeout(function(){

        img_url = 'url(' + domain[0] + '//' + domain[2] + '/assets/img/posters/web.jpg)';
        $('.section-blog .preview-container .poster').css('background-image', img_url);
    }, 100)

  });


  $(window).on('resize', function () {

    // Fitting blocks size to screen size
    setTimeout(function() {
      $(".full-screen-block").height( win_height );
      $(".thumb-wrap, .work-wrap").height( win_height );
    }, 100)

    responsive_actions();

    win_width  = $(window).width();
    win_height = $(window).height();

  });


  // Loading particular ava depanding on viewport
  function responsive_actions() {
    if ( win_width > 1000) {
      $('#small-ava').attr('src', $('#small-ava').data('src'));
    } else {
      if (lang == 'ru') {
          $('.section-about .section-title').text('Константин Наумов')
      }
      $('#large-ava').attr('src', $('#large-ava').data('src'));
      $('.about-contact').attr('href', '#contact');
    }
  }


});










