$(document).ready(function() {

  nav_index = 0;
  sections = ['#about', '#portfolio', '#experience', '#contact'];

  // nav click
  $('nav.main-nav > *').click(function(event) {

    // slide back portfolio
    slide_back();
    $('aside .work-return').hide();
    work_container.hide(200);
    animating_work = false;

    var eq = $(this).index();
    if ($(this).hasClass('active')) { return }
    $(this).siblings().each(function(index, el) {
      $(el).removeClass('first-loaded').find('.waves-ripple').remove();
    });
    move_pages(eq);
  });


  $(window).on("load", function() {
      nav_index = get_page_from_location();
      $('nav .item').eq(nav_index).addClass('first-loaded');
      page_actions(nav_index);
      if (nav_index > 0 ) {
        window.location.hash = sections[nav_index];
      }
  });

  $(window).resize(function() {
      if ( $(window).height()==win_height || $(window).width() < 1000 ) return;
      height = $(window).height();
      setTimeout(function() {
        window.location.hash = '#about';
        location.reload();
        win_height = $(window).height;
      }, 1);
  });


  $(window).on('hashchange',function(){
     nav_index = get_page_from_location();
     $('nav .item').removeClass('first-loaded');
     higlight_link(nav_index);
  });


  function get_page_from_location() {
    hash = window.location.hash;
    var nav_index = sections.indexOf(hash);
    if (nav_index == -1) { nav_index = 0; }
    return  nav_index;
  }

  function move_pages(nav_index) {
    higlight_link(nav_index);
    page_actions(nav_index);
  }

  function higlight_link(index) {
    $('nav .item').eq(index)
      .addClass('active')
      .siblings().removeClass('active');
  }

  function page_actions (nav_index) {
    if ( nav_index == 0 ) {
        skills_animate()
     }
    if ( nav_index == 2 ) {
        $('.exp-animation .wrap').load('exp/exp_html.html');
    }
  }

});


function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar";
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
