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
    setTimeout(function(){
      return_sign.addClass('slide');
    }, 800);

    // Add content
    $('.project-load').load(newHTML,function() {
      $(this).addClass('loaded');
    });

    $('.project-title').text(newTitle);

  });


  $('nav, .work-return').click(function() {
    work_belt.removeClass('slided');
    return_sign.removeClass('slide');
    setTimeout(function(){
      work_container.hide(200);
    }, 800)
  });


});

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

  return_sign.css('right', return_offset );
}

