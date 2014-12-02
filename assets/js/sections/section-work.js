$(document).ready(function() {

  // Var init
  work_section = $('.section-work');
  navigation = $('nav');
  show_work_trigger = $('.thumb-click-area');
  loader_work = $('.loader.work');
  work_belt = $('.work-belt');
  work_container = $('.work-container');
  return_sign = $('.work-return');



  $.ajaxSetup({ cache: true });

  show_work_trigger.click(function() {

    var that = $(this),
        newTitle = that.data('name'),
        newfolder = that.data('folder'),
        newHTML = 'work/'+ newfolder;

    nav_shifted = true;

    work_belt.addClass("slided");
    work_container.show();
    navigation.addClass('shifted');
    loader_work.fadeIn();

    // Add content
    $('.project-load').load(newHTML,function() {
      loader_work.fadeOut();
    });

    $('.project-title').text(newTitle);

  });

  work_section.on('scroll', function(event) {
    return_sign.css('top', work_section.scrollTop());
  });

  return_sign.click(function() {
    fold_work();
  });

});

function roll_back () {
  work_belt.removeClass("slided");
  work_container.hide(800);
  navigation.removeClass('shifted');
}


function fold_work () {

  var scrolled_pixels = work_section.scrollTop();

  if ( scrolled_pixels > 0 ) {

    work_section.animate({ scrollTop: 0 }, scrolled_pixels/5);

    setTimeout(function(){
      roll_back();
    }, scrolled_pixels/5 + 150);

  } else { roll_back() }


}

