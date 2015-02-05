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
  animating_work = false;


  $.ajaxSetup({ cache: true });

  // Click handlers
  show_work_trigger.click(function() {

      if (animating_work) return;

      var that = $(this),
          newTitle = that.data('name'),
          newUrl = that.data('url'),
          newfolder = that.data('folder'),
          newHTML = 'work/'+ newfolder;

      animating_work = true;

      work_belt.addClass("slided");
      work_container.show();

      setTimeout(function(){
        $('aside .work-return').show();
        animating_work = false;
      }, 800);

      // Add content
      $('.project-load').load(newHTML,function() {
        $(this).addClass('loaded');
      });

      $('.project-title span').text(newTitle);
      if (newUrl != '') {
        $('.project-url').attr('href', 'http://' + newUrl);
      }

  });

  return_sign.click(function() {
    slide_back();
    setTimeout(function(){
      $('aside .work-return').hide();
      work_container.hide(200);
      animating_work = false;
    }, 800);
  });


});

function slide_back () {
  $('.project-load').removeClass('loaded');
  if (animating_work) return;
  animating_work = true;
  work_belt.removeClass('slided');
}

