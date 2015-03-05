$(document).ready(function() {

  $('.lang-switcher span').click(function(event) {

      $.removeCookie('lang',  { path: '/' });

      var dist_lang = $(this).data('lang');

      $.cookie('lang', dist_lang,  { expires: 360, path: '/' });

      if ( sections.indexOf(window.location.hash) == -1 ) window.location.hash = '';


      if ( dist_lang == 'ru' ) {
          window.location.replace(window.location.origin + '/ru' + window.location.hash);
      } else if ( dist_lang == 'en' ) {
          window.location.replace(window.location.origin + '/en' + window.location.hash);
      }

  });

});