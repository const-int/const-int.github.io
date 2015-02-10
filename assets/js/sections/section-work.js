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
  work_opened = false;


  $.ajaxSetup({ cache: true });

  // Click handlers
  show_work_trigger.click(function() {

      if (animating_work) return;

      var that = $(this),
          newTitle = that.data('name'),
          newUrl = that.data('url'),
          folderIndex = that.data('folder');

      animating_work = work_opened = true;

      work_belt.addClass("slided");

      setTimeout(function(){
        $('aside .work-return').show();
        animating_work = false;
      }, 800);

      // Add content
      $('.project-load')
        .addClass('loaded')
        .find('img')
          .attr('src', 'assets/img/work/proj-' + folderIndex + '/image.jpg');

      $('.project-title span').text(newTitle);
      if (newUrl != '') {
        $('.project-url').attr('href', 'http://' + newUrl);
      }

  });

  return_sign.click(function() {
    slide_back();
  });


});

function slide_back () {

  if ( !animating_work && work_opened ) {
      animating_work = true;
      work_opened = false;

    $('.project-load').removeClass('loaded');
    work_belt.removeClass('slided');
    $('aside .work-return').hide();
    setTimeout(function(){
      animating_work = false;
      $('.project-load img').attr('src', '');
    }, 800);
  }
}

