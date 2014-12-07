$(document).ready(function() {

  // Global variables
  nav_index = 0;
  all_pages = $(".full-screen-block");


  $('nav > *').click(function(event) {

    var active_link = $(this);

    if (!active_link.hasClass('active')) {

      // Set vars
      var current_page = $(".section-active");
      nav_index = active_link.index() + 1;

      // Apply animation classes
      current_page.removeClass('section-active')

      all_pages.eq(nav_index).addClass('section-active');

      // Adding active hightlight to link
      active_link.addClass('active').siblings().removeClass('active');

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

    } // End of If statment

  }); // End of click event

});
