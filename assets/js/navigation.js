$(document).ready(function() {

  nav_index = 0;
  sections = ['#about', '#portfolio', '#experience', '#contact'];

  // nav click
  $('nav > *').click(function(event) {
    if ($(this).hasClass('active')) { return }
    $(this).siblings().each(function(index, el) {
      $(el).removeClass('first-loaded').find('.waves-ripple').remove();
    });
    move_pages($(this).index());
  });


  $(window).on("load", function() {
      nav_index = get_page_from_location();
      $('nav .item').eq(nav_index).addClass('first-loaded');
      page_actions(nav_index);
  });


  // track width, set to window width
  var height = $(window).height();
  // fire on window resize
  $(window).resize(function() {
      // do nothing if the height is the same
      if ($(window).height()==height) return;
      // update new height value
      height = $(window).height();
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
    switch (nav_index) {
      case 0:
        skills_animate();
        break;
      case 1, 3:
        skills_stop();
        break;
      case 2:
        skills_stop();
        $('.exp-animation .wrap').load('exp/exp_html.html');
        break;
    }
  }

});
