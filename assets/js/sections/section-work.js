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

    $('.project-title').text(newTitle);

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
  if (animating_work) return;
  animating_work = true;
  work_belt.removeClass('slided');
}

// Scrollbar width
function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);
    var widthNoScroll = outer.offsetWidth;
    outer.style.overflow = "scroll";
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    var widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
}

// Calc button placemant
function calc_return_button_place() {
  var thumb_container = $( ".thumb-container"),
      scrollbar = ( win_width > 1000 ) ? getScrollbarWidth() : 0,
      margin_right = thumb_container.css('margin-right'),
      padding_right = thumb_container.css('padding-right'),
      margin_value = parseInt(margin_right.substring(0, margin_right.length - 2)),
      padding_value = parseInt(padding_right.substring(0, padding_right.length - 2)),
      return_offset = scrollbar + (thumb_container.outerWidth(true) - thumb_container.outerWidth()) / 2 + padding_value + thumb_container.width() - 56;

  $('.work-center-container .work-return').css('right', return_offset );
}



