// Initiate functions
$(function() {
  workBelt();
  workLoad();
  clientStuff();
  Waves.displayEffect();
  scills_width();
  $("header h1").fitText(1, { minFontSize: '30px', maxFontSize: '46px' });
});


// Window height
$(document).ready(function() {
  nav_index = 0;

  $(window).on('load', function () {
    section_heigh()
    $('html, body').animate({scrollTop: 0}, 100);
  });

  $(window).on('load resize', function () {
    section_heigh()
    $(window).scrollTop(nav_index * window_height);
  });
});

function section_heigh() {
  window_height = $(window).height();
  $(".full-screen-block").height(window_height);
}

function workBelt() {

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-unit span').click(function() {
    $('.work-belt').addClass("slided");
    $('.work-container').show();
  });

  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800);
  });

}


function  workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-unit').click(function() {
    $("#pyf").fadeIn();
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        newHTML = 'work/'+ newfolder;

    $('.project-load').load(newHTML,function() {
      $("#pyf").fadeOut();
    });
    $('.project-title').text(newTitle);
  });

}


// Skills animate functions
function scills_width() {
  $(".meter > span").each(function() {
    $(this).data("origWidth", $(this).width()).width(0);
  });
}

function scills_animate () {
  $(".meter > span").each(function() {
    var element = $(this);
    var opsty = $(this).data("origWidth");
    var indexOfBar = $(this).parents('.skill-unit').index();

    setTimeout(function () {
      animateBars();
    }, 300 * indexOfBar);

    function animateBars() {
      $(element).animate({
        width: opsty,
        opacity: opsty / 240
      }, 1200);
    }
  })
}




function clientStuff() {

  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');
  $('.clients-mobile-nav span').first().addClass('active-client');


  $('.client-logo > span, .clients-mobile-nav span').on('click', function() {

    $(this).parent().siblings('.client-logo').each(function(index, el) {
      $(this).find('.waves-ripple').remove();
    });
    var $this = $(this).parent(),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);

    $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
    $siblings.removeClass('active-client');
    $this.addClass('active-client');
  });
}


clicked = false;

$('nav > *').click(function(event) {
  var page = $(this);

  if (!page.hasClass('active') && clicked == false) {
    var current = $(".sections-current");
    var next = $(".full-screen-block");
    nav_index = page.index() + 1;

    current.addClass('section-scaleDownUp');
    next.eq(nav_index).addClass('sections-current section-scaleUp');

    clicked = true;

    setTimeout(function(){
      current.removeClass('sections-current section-scaleDownUp');
      next.eq(nav_index).removeClass('section-scaleUp');

      clicked = false;
    }, 1000);

    // Add Border to menu
    page.addClass('active').siblings().removeClass('active');


    switch (nav_index) {
      case 1:
        page.parent().addClass('dark');
        scills_animate();
        break;
      case 2:
        page.parent().removeClass('dark');
        break;
      case 3:
        page.parent().addClass('dark');
        break;
      case 4:
        page.parent().removeClass('dark');
        setTimeout(function(){
          $('#client-name').focus();
        }, 1000);
        break;
    }

  }
});

// Fill inputs on keydown
$('input, textarea').keydown(function(event) {
  $(this).addClass('not-empty')
});


// HTML SECTON animation
$(document).ready(function() {

  $('.html-section .phone-post').addClass('active');

  setTimeout(function() {
    $('.html-section .phone-post').removeClass('active');
  }, 2500);

  setInterval(function() {
    $('.html-section .phone-post').addClass('active');

    setTimeout(function() {
      $('.html-section .phone-post').removeClass('active');
    }, 2500);
  }, 5000);

});