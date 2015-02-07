$(document).ready(function() {

  nav_index = 0;
  sections = ['#about', '#portfolio', '#experience', '#contact'];

  // nav click
  $('nav.main-nav > *').click(function(event) {

    if (!$(this).hasClass('active')) {
      move_pages($(this).index());
      // slide back portfolio
      if (work_opened) {
        slide_back();
      }
    }

  });


  $(window).on("load", function() {

      nav_index = get_page_from_location();
      window.location.hash = sections[nav_index];

      var active_tab = $('nav .item').eq(nav_index)
      active_tab.addClass('first-loaded');
      page_actions(nav_index);

      setTimeout(function(){
        active_tab.removeClass('first-loaded').addClass('active');
      }, 200);
  });


  $(window).on('hashchange',function(){

     nav_index = get_page_from_location();
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
    if ( nav_index == 2 && !$('.exp-animation').hasClass('viewed') ) {
      $('.exp-animation')
        .addClass('viewed')
        .find('.wrap').load('exp/exp_html.html');
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
