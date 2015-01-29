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

  show_work_trigger.click(function() {

    var that = $(this),
        newTitle = that.data('name'),
        newfolder = that.data('folder'),
        newHTML = 'work/'+ newfolder;

    work_belt.addClass("slided");
    work_container.show();
    loader_work.fadeIn();

    // Add content
    $('.project-load').load(newHTML,function() {
      loader_work.fadeOut();
      $(this).addClass('loaded');
    });

    $('.project-title').text(newTitle);

  });

  // work_wrap.on('scroll', function(event) {
  //   return_sign.css('top', work_wrap.scrollTop() -2);
  // });

  var $whatever = $( ".thumb-container" );
  var rt = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));

  var ww = $('.work-wrap').width();
  var wc = $('.thumb-container').outerWidth();

  console.log(ww - (ww - wc));

  var shift = 0;
  if ($(window).width() <= 1000) {
    shift = 12;
  }

  return_sign.css('right', ww - ( (ww - wc) / 2) - 178 + shift) ;

  return_sign.click(function() {
    roll_back();
  });

});

function roll_back () {
  work_belt.removeClass("slided");
  setTimeout(function(){
    work_container.hide(200);
  }, 800)
}

