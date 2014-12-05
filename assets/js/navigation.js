$(document).ready(function() {

  // Initiate menu index and shift
  nav_index = 0;

  // Init clicked flag
  clicked = false;

  $('nav > *').click(function(event) {
    var active_link = $(this);

    if (!active_link.hasClass('active') && !active_link.hasClass('faded') && clicked == false) {

      // Open clicked flag
      clicked = true;

      // Set vars
      var current_page = $(".sections-current");
      var next_page = $(".full-screen-block");
      nav_index = active_link.index() + 1;

      // Apply animation classes
      current_page.addClass('section-faded-out');
      next_page.eq(nav_index).addClass('sections-current section-scaleUp');

      // Add Border to menu
      active_link.addClass('active').siblings().removeClass('active shown').addClass('faded');


      // Page openning actions
      switch (nav_index) {
        case 1:
          active_link.parent().addClass('dark');
          skills_animate();
          break;
        case 2:
          active_link.parent().removeClass('dark');
          break;
        case 3:
          active_link.parent().addClass('dark');
          break;
        case 4:
          active_link.parent().removeClass('dark');
          setTimeout(function(){
            $('#client-name').focus();
          }, 1000);
          break;
      }


      setTimeout(function(){

        // Removing animation classes
        current_page.removeClass('sections-current section-faded-out');
        next_page.eq(nav_index).removeClass('section-scaleUp');

        setTimeout(function(){

          // Show menu
          $('.faded').removeClass('faded').addClass('shown');

          setTimeout(function(){

            // Close clicked flag
            clicked = false;

          }, 500);

        }, 1000);

      }, 1000);

    } // End of If statment

  }); // End of click event

});
