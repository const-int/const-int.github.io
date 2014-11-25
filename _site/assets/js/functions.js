$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();
	clientStuff();

	$("header h1").fitText(1.5, { minFontSize: '30px', maxFontSize: '47px' });
	$(".biglink").fitText(1.5, { minFontSize: '20px', maxFontSize: '33px' });

});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function workBelt() {

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-unit').click(function() {
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
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newfolder;

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });

}


// Skills animate
  $(".meter > span").each(function() {
    $(this).data("origWidth", $(this).width()).width(0);
  });
  $(window).on('scroll load', function () {
    if ($(this).scrollTop() > 500) {


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
    if ($(this).scrollTop() > 3200) {
      $('form input[name=name]').focus();
    }
  });




function clientStuff() {

  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');
  $('.clients-mobile-nav span').first().addClass('active-client');


  $('.client-logo, .clients-mobile-nav span').click(function() {

    $(this).siblings('.client-logo').each(function(index, el) {
      $(this).find('.waves-ripple').remove();
    });
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);

    $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
    $siblings.removeClass('active-client');
    $this.addClass('active-client');
  });


}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );



// Call Waves Buttons
Waves.displayEffect();



// HTML SECTON animation
$(document).ready(function() {

  $('.html .phone-post').addClass('active');

  setTimeout(function() {
    $('.html .phone-post').removeClass('active');
  }, 1500);

  setInterval(function() {
    $('.html .phone-post').addClass('active');

    setTimeout(function() {
      $('.html .phone-post').removeClass('active');
    }, 1500);
  }, 2000);

});

// CSS SECTON animation
$(document).ready(function() {

  // $('.css .phone-post').addClass('active');


});