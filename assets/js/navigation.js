$(document).ready(function() {

  nav_index = 0;
  sections = ['#about', '#portfolio', '#experience', '#contact'];

  // nav click
  $('nav > *').click(function(event) {
    var eq = $(this).index();
    if ($(this).hasClass('active')) { return }
    $(this).siblings().each(function(index, el) {
      $(el).removeClass('first-loaded').find('.waves-ripple').remove();
    });
    move_pages(eq);
  });

  var handheld = false;
  var desctop = false;

  $(window).on("load", function() {
      handheld = ( win_width < 1001 ) ? true : false;
      desctop = ( win_width > 1000 ) ? true : false;
      nav_index = get_page_from_location();
      $('nav .item').eq(nav_index).addClass('first-loaded');
      page_actions(nav_index);
  });


  $(window).resize(function() {
      win_width = $(window).width();
      if ( win_width > 1000  && handheld ) { location.reload() }
      if ( win_width < 1001  && desctop ) { location.reload() }
      if ( $(window).height() == win_height || win_width < 1001 ) return;
      win_height = $(window).height();
      window.location.hash = '#about';
  });


  $(window).on('hashchange',function(){
     nav_index = get_page_from_location();
     $('nav .item').removeClass('first-loaded');
     higlight_link(nav_index);
  });


  function get_page_from_location() {
    if(window.location.hash) {
      hash = window.location.hash;
    } else {
      hash = '#about';
    }
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
