$(document).ready(function() {


  // nav click
  $('nav > *').click(function(event) {

    if ($(this).hasClass('active')) { return }

    $(this).siblings().each(function(index, el) {
      $(el).find('.waves-ripple').remove();
    });

    move_pages($(this).index());

  });


  $(window).on("load hashchange", function() {

      hash = window.location.hash
      if ( hash == '') { hash == '#about' }
      console.log(hash);

      var nav_index = ['#about', '#portfolio', '#experience', '#contact'].indexOf(hash);
      move_pages(nav_index);
  });


  function move_pages(nav_index) {
    higlight_link(nav_index);
    page_actions(nav_index);
  }


  function higlight_link(index) {
    $('nav .item').eq(index)
      .addClass('active')
      .siblings().removeClass('active');
  }

  function page_actions (nav_index) {
    switch (nav_index) {
      case 0:
        skills_animate();
        break;
      case 1, 3:
        skills_stop();
        break;
      case 2:
        skills_stop();
        $('.exp-animation .wrap').load('exp/exp_html.html');
        break;
    }
  }

});
