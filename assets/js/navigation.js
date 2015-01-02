$(document).ready(function() {

  // Global variables
  nav_index = 0;
  all_pages = $(".full-screen-block");


  $('nav > *').click(function(event) {

    event.preventDefault();

    var active_link = $(this);

    if (!active_link.hasClass('active')) {

      // Killing blink interval if defined
      if (typeof blink_interval != 'undefined') { clearInterval(blink_interval); }

      // Get page #
      nav_index = active_link.index() + 1;

      // Apply animation classes
      all_pages
        .removeClass('section-active')
        .eq(nav_index)
          .addClass('section-active');

      // Adding active hightlight to link
      active_link.addClass('active').siblings().removeClass('active');

      // Page openning actions
      switch (nav_index) {
        case 1:
          active_link.parent().removeClass('inverted');
          skills_animate();
          break;
        case 2:
          active_link.parent().addClass('inverted');
          blink_interval = setInterval(blink_pixels, 2000);
          break;
        case 3:
          active_link.parent().removeClass('inverted');
          $('.exp-animation .wrap').load('exp/exp_html.html');
          break;
        case 4:
          active_link.parent().addClass('inverted');
          setTimeout(function(){
            $('#client-name').focus();
          }, 1000);
          break;
      }

    } // End of If statment

  }); // End of click event

});
