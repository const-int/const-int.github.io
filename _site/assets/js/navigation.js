$(document).ready(function() {

  var last_nav_index = 0,
      times_moved  = 0,
      page_animating = false;

  skills_animate();


  $('nav .item:first-child').addClass('active');

  $('nav > *').click(function(event) {
    event.preventDefault();
    var active_link = $(this);

    if (page_animating) { return;  }

    $(active_link).siblings().each(function(index, el) {
      $(el).find('.waves-ripple').remove();
    });

    if (!active_link.hasClass('active')) {

      history.pushState(null, null, $(active_link).attr('href'));

      // Get page #
      nav_index = active_link.index();
      block = $(".full-screen-block").eq(nav_index);

      move_pages(block, nav_index);
    }

  });


  $(window).on("popstate", function() {
      var url_array = document.URL.split('/'),
      hash = url_array[url_array.length - 1],
      nav_index = ['#about', '#portfolio', '#experience', '#contact'].indexOf(hash),
      block = $(".full-screen-block").eq(nav_index);

      if ( (hash == '#about' || hash == '') && times_moved == 0) { return }

      move_pages(block, nav_index);
  });


  $(window).on("load", function() {
    setTimeout(function(){
      var url_array = document.URL.split('/'),
      hash = url_array[url_array.length - 1],
      nav_index = ['#about', '#portfolio', '#experience', '#contact'].indexOf(hash),
      block = $(".full-screen-block").eq(nav_index);

      if ( (hash == '#about' || hash == '') && times_moved == 0) { return }

      move_pages(block, nav_index);
    }, 500)
  });


  function move_pages(page, nav_index) {
    times_moved++;
    dirs = ( nav_index > last_nav_index ) ? ['from-bot', 'to-top'] : ['from-top','to-bot'];

    //move page
    $(page)
      .css('z-index', times_moved * 10)
      .attr('data-move', dirs[0]);
    $('.section-active')
      .removeClass('section-active')
      .attr('data-move', dirs[1]);
    $(page).addClass('section-active');

    disable_nav();
    higlight_link(nav_index);
    page_actions(nav_index);

    // Save index
    last_nav_index = nav_index;
  }


  function disable_nav() {
    page_animating = true;
    $('nav').addClass('disabled');

    setTimeout(function(){
      page_animating = false;
      $('nav').removeClass('disabled');
    }, 800);
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
