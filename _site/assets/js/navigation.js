$(document).ready(function() {

  nav_index = 0;
  sections = ['#about', '#portfolio', '#experience', '#contact'];

  // nav click
  $('nav > *').click(function(event) {

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
      window.location.hash = sections[nav_index];
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
