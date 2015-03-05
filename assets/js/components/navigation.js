$(document).ready(function() {

  nav_index = 0;
  sections = [];
  section_containers = $('.full-screen-block');

  $('nav.main-nav .item').each(function(index, el) {
    sections.push($(el).attr('href'));
  });

  // nav click
  $('nav.main-nav > *').click(function(event) {

      if (!$(this).hasClass('active')) {

          move_pages($(this).index());

          // slide back portfolio and blog
          if (work_opened) slide_back();
          if (blog_opened) blog_slide_back();
      }

  });


  $(window).on("load", function() {

      nav_index = get_page_from_location();

      if (nav_index >= 0) {
          window.location.hash = sections[nav_index];
          show_section(nav_index);
          page_actions(nav_index);
      } else {
          nav_index = 0;
          show_section(nav_index);
          blog_belt.addClass('slided');
          var hash = window.location.hash.substring(1);
          blog_opened = true;
          var content = $('.post-content');
          content.load('/blog-posts/' + hash, function() {
              $('.post-title .title-text').text(content.find('.title').text());
              $('.post-title .date').text(content.find('.date').text());
              $('aside .blog-return').show();
              $('.post-poster').css('background-image', 'url(../../blog-posters/'+ content.find('.title').data('poster') +')');
          });
      }

      $('nav .item').eq(nav_index).addClass('first-loaded');

      setTimeout(function(){
          $('.first-loaded').removeClass('first-loaded').addClass('active');
      }, 200);
  });


  $(window).on('hashchange',function(){

      nav_index = get_page_from_location();

      if (nav_index >= 0) {
          higlight_link(nav_index);
          show_section(nav_index);
          page_actions(nav_index);
      }
  });


  function get_page_from_location() {

      hash = window.location.hash;
      if ( hash == '' ) return  0;
      if ( hash.length > 0 ) {
          var nav_index = sections.indexOf(hash);
          return  nav_index;
      }
  }

  function show_section(nav_index) {

      $(section_containers).hide();
      $(section_containers).eq(nav_index).show();
  }

  function move_pages(nav_index) {

      higlight_link(nav_index);
      page_actions(nav_index);
      show_section(nav_index)
  }

  function higlight_link(index) {
      $('nav .item').eq(index)
        .addClass('active')
        .siblings().removeClass('active');
  }

  function page_actions (nav_index) {

      if ( nav_index == 1 ) {
          skills_animate();
          $('.section-about .poster.me').css('background-image', 'url(/assets/img/posters/me.jpg)');
      }

      if ( nav_index == 2 && !$('.section-work').hasClass('viewed') ) {
          $('.section-work')
            .addClass('viewed')
            .find('img')
              .each(function(index, el) {
                $(el).attr('src', $(el).data('src')).removeAttr('data-src');
              });;
       }

       if ( nav_index == 3 && !$('.section-contact').hasClass('viewed') ) {
           var cantact = $('.section-contact');
           cantact.addClass('viewed');
           cantact.find('.poster').css('background-image', 'url(/assets/img/posters/contact.jpg)');
        }

      if ( nav_index == 4 && !$('.exp-animation').hasClass('viewed') ) {
          $('.exp-animation')
            .addClass('viewed')
            .find('.wrap').load( '../assets/exp/exp_html.html');
          $('.section-expirience .poster.exp').css('background-image', 'url(/assets/img/posters/skillset.jpg)');
      }
  }

});
