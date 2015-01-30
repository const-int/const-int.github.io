$(document).ready(function() {

  // Var init
  work_section = $('.section-work');
  navigation = $('nav');
  show_work_trigger = $('.thumb-click-area');
  loader_work = $('.loader.work');
  work_belt = $('.work-belt');
  work_wrap = $('.work-wrap');
  work_container = $('.work-container');
  return_sign = $('.work-return');
  thumb_wrap_shift = $('.thumb-wrap-shift')


  $.ajaxSetup({ cache: true });

  // Click handlers
  show_work_trigger.click(function() {

    var that = $(this),
        newTitle = that.data('name'),
        newfolder = that.data('folder'),
        newHTML = 'work/'+ newfolder;

    work_belt.addClass("slided");
    work_container.show();

    // Add content
    $('.project-load').load(newHTML,function() {
      $(this).addClass('loaded');
    });

    $('.project-title').text(newTitle);

  });


  return_sign.click(function() {
    work_belt.removeClass("slided");
    setTimeout(function(){
      work_container.hide(200);
    }, 800)
  });


  // Return button placemant
  var $whatever = $( ".thumb-container" );
  var rt = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));

  var ww = $('.work-wrap').width();
  var wc = $('.thumb-container').outerWidth();

  var shift = 0;
  if ($(window).width() <= 1000) {
    shift = 12;
  }

  return_sign.css('right', ww - ( (ww - wc) / 2) - 178 + shift) ;

});

