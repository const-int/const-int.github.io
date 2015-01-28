$(document).ready(function() {

  // Initiate Waves plugin
  Waves.displayEffect({ duration: 1000 });

  function get_page_from_location() {
    if(window.location.hash) {
      hash = window.location.hash;
    } else {
      hash = '#about';
    }
    var nav_index = sections.indexOf(hash);
    if (nav_index == -1) { nav_index = 0; }
    return  nav_index;
  }


  $(window).on('load resize', function () {

    // Fitting blocks size to screen size
    if ( $(window).width() > 1000 ) {
      $(".full-screen-block").height( $(window).height());
      $(".thumb-wrap, .work-wrap").height( $(window).height());
    } else {
      $(".full-screen-block").hide().eq(get_page_from_location()).show();
      $('nav .item').attr('href', '#sect');
    }

  });





  $(window).on('scroll', function(event) {

      var nav = $('nav');

      if ( $(window).width() <= 1000 ) {
        if ( $(window).scrollTop() > 262) {
          $(nav).addClass('fixed');
        } else {
          $(nav).removeClass('fixed');
        }
      }
    });




});










